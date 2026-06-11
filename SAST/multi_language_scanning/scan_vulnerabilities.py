import argparse
import json
import os
import shutil
import subprocess
import sys
from datetime import datetime
from html import escape
from pathlib import Path

SEVERITY_MAP = {
    "critical": "Critical",
    "crit": "Critical",
    "high": "High",
    "medium": "Medium",
    "med": "Medium",
    "moderate": "Medium",
    "low": "Low",
    "info": "Low",
    "unknown": "Low",
}

OWASP_TOP10 = {
    "CWE-79": "A3:2021 – Injection",
    "CWE-89": "A3:2021 – Injection",
    "CWE-77": "A3:2021 – Injection",
    "CWE-20": "A1:2021 – Broken Access Control",
    "CWE-639": "A1:2021 – Broken Access Control",
    "CWE-250": "A5:2021 – Security Misconfiguration",
    "CWE-200": "A7:2021 – Identification and Authentication Failures",
    "CWE-522": "A7:2021 – Identification and Authentication Failures",
    "CWE-311": "A6:2021 – Vulnerable and Outdated Components",
    "CWE-117": "A2:2021 – Cryptographic Failures",
    "CWE-798": "A2:2021 – Cryptographic Failures",
    "CWE-287": "A7:2021 – Identification and Authentication Failures",
    "CWE-22": "A4:2021 – Insecure Design",
    "CWE-78": "A3:2021 – Injection",
}

RECOMMENDATIONS = {
    "Injection": "Validate and sanitize user input, use parameterized queries or safe templating.",
    "Broken Access Control": "Enforce least privilege, verify authorization on every request.",
    "Security Misconfiguration": "Review environment settings, remove debug and use safe defaults.",
    "Identification and Authentication Failures": "Use multi-factor authentication and secure password storage.",
    "Vulnerable and Outdated Components": "Upgrade dependencies to versions without known vulnerabilities.",
    "Cryptographic Failures": "Use strong algorithms and proper key management.",
    "Insecure Design": "Review application design for secure defaults and threat modeling.",
}


def run_command(command, cwd=None, allow_returncodes=(0,)):
    result = subprocess.run(
        command,
        cwd=cwd,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        check=False,
    )
    if result.returncode not in allow_returncodes:
        print(f"Command failed: {' '.join(command)}")
        if result.stderr:
            print(result.stderr.strip())
        raise subprocess.CalledProcessError(result.returncode, result.args, output=result.stdout, stderr=result.stderr)
    return result.stdout


def normalize_severity(value):
    if not value:
        return "Low"
    normalized = SEVERITY_MAP.get(value.strip().lower(), None)
    if normalized:
        return normalized
    if "critical" in value.lower():
        return "Critical"
    if "high" in value.lower():
        return "High"
    if "medium" in value.lower() or "med" in value.lower():
        return "Medium"
    return "Low"


def guess_owasp(cwe, text):
    if cwe:
        for key, category in OWASP_TOP10.items():
            if key in str(cwe):
                return category
    text_lower = str(text).lower()
    if "sql" in text_lower or "command" in text_lower or "xss" in text_lower:
        return "A3:2021 – Injection"
    if "auth" in text_lower or "access" in text_lower:
        return "A1:2021 – Broken Access Control"
    if "config" in text_lower or "misconfig" in text_lower:
        return "A5:2021 – Security Misconfiguration"
    if "crypto" in text_lower or "ssl" in text_lower or "tls" in text_lower:
        return "A2:2021 – Cryptographic Failures"
    if "dependency" in text_lower or "package" in text_lower or "outdated" in text_lower:
        return "A6:2021 – Vulnerable and Outdated Components"
    return "A10:2021 – Server-Side Request Forgery"


def recommendation_for_finding(find):
    if find.get("fix_version"):
        return f"Upgrade {find.get('package', find.get('file', 'the component'))} to {find['fix_version']}."
    owasp = find.get("owasp", "")
    for key, recommendation in RECOMMENDATIONS.items():
        if key.lower() in owasp.lower() or key.lower() in str(find.get("description", "")).lower():
            return recommendation
    return "Review the finding and apply the vendor recommended fix or secure coding practice."


def parse_bandit(base_dir):
    output = run_command(["bandit", "-r", str(base_dir), "-f", "json"], allow_returncodes=(0, 1))
    data = json.loads(output)
    findings = []
    for issue in data.get("results", []):
        cwe = None
        if isinstance(issue.get("cwe"), dict):
            cwe = issue["cwe"].get("id")
        elif issue.get("cwe"):
            cwe = issue["cwe"]
        finding = {
            "tool": "bandit",
            "id": issue.get("test_id", "bandit"),
            "description": issue.get("issue_text", ""),
            "file": issue.get("filename"),
            "line": issue.get("line_number"),
            "severity": issue.get("issue_severity"),
            "normalized_severity": normalize_severity(issue.get("issue_severity")),
            "confidence": issue.get("issue_confidence"),
            "cwe": cwe,
            "owasp": guess_owasp(cwe, issue.get("issue_text", "")),
            "cvss": None,
            "package": None,
            "fix_version": None,
        }
        findings.append(finding)
    return findings


def parse_semgrep(base_dir):
    output = run_command(["semgrep", "--config", "auto", "--json", "--no-git-ignore", str(base_dir)], allow_returncodes=(0, 1))
    data = json.loads(output)
    findings = []
    for result in data.get("results", []):
        extra = result.get("extra", {})
        metadata = extra.get("metadata", {})
        cwe = metadata.get("cwe") if isinstance(metadata, dict) else None
        severity = extra.get("severity") or metadata.get("severity") if isinstance(metadata, dict) else None
        finding = {
            "tool": "semgrep",
            "id": result.get("check_id", result.get("rule_id", "semgrep")),
            "description": extra.get("message", result.get("match", "")),
            "file": result.get("path"),
            "line": result.get("start", {}).get("line") if isinstance(result.get("start"), dict) else None,
            "severity": severity,
            "normalized_severity": normalize_severity(severity),
            "confidence": None,
            "cwe": cwe,
            "owasp": guess_owasp(cwe, extra.get("message", "")),
            "cvss": None,
            "package": None,
            "fix_version": None,
        }
        findings.append(finding)
    return findings


def parse_pip_audit():
    command = ["pip-audit", "--format", "json"]
    if shutil.which("pip-audit") is None:
        command = [sys.executable, "-m", "pip_audit", "--format", "json"]
    output = run_command(command, allow_returncodes=(0, 1))
    findings = []

    try:
        payload = json.loads(output or "[]")
    except json.JSONDecodeError:
        return findings

    if isinstance(payload, dict):
        package_items = payload.get("dependencies") or payload.get("packages") or payload.get("results") or []
        if not isinstance(package_items, list):
            package_items = []
    elif isinstance(payload, list):
        package_items = payload
    else:
        package_items = []

    for package in package_items:
        if not isinstance(package, dict):
            continue

        package_name = package.get("name") or package.get("package") or package.get("package_name")
        current_version = package.get("version") or package.get("current_version")
        fix_version = package.get("fix_version")
        vulns = package.get("vulns", [])
        if isinstance(vulns, dict):
            vulns = vulns.get("vulns", [])
        if not isinstance(vulns, list):
            vulns = []

        for vuln in vulns:
            if not isinstance(vuln, dict):
                continue

            severity = vuln.get("severity")
            cvss = vuln.get("cvss")
            if isinstance(cvss, dict):
                severity = severity or cvss.get("score")
                score = cvss.get("score")
            else:
                score = cvss

            finding = {
                "tool": "pip-audit",
                "id": vuln.get("id", package_name),
                "description": vuln.get("description", "Dependency vulnerability detected."),
                "file": None,
                "line": None,
                "severity": str(severity) if severity else "Low",
                "normalized_severity": normalize_severity(str(severity)),
                "confidence": None,
                "cwe": vuln.get("cwe"),
                "owasp": guess_owasp(vuln.get("cwe"), vuln.get("description", "")),
                "cvss": score,
                "package": package_name,
                "current_version": current_version,
                "fix_version": fix_version or vuln.get("fix_version"),
            }
            findings.append(finding)

    return findings


def build_unique_key(find):
    if find["tool"] == "pip-audit":
        return f"{find['tool']}:{find.get('package')}:{find.get('id')}:{find.get('current_version')}"
    return f"{find['tool']}:{find.get('file')}:{find.get('line')}:{find.get('id')}"


def load_scan_history(path):
    if path.exists():
        try:
            return json.loads(path.read_text())
        except Exception:
            return {}
    return {}


def save_scan_history(path, history):
    path.write_text(json.dumps(history, indent=2))


def compare_trends(findings, previous):
    current_keys = {build_unique_key(f): f for f in findings}
    previous_keys = previous.get("keys", {})
    trends = {}
    for key, find in current_keys.items():
        trends[key] = "unchanged" if key in previous_keys else "new"
    resolved = [key for key in previous_keys if key not in current_keys]
    return trends, resolved


def generate_sarif(findings, output_path):
    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    rules = {}
    results = []
    artifacts = []
    artifact_index = {}
    for find in findings:
        rule_id = find["id"]
        if rule_id not in rules:
            rules[rule_id] = {
                "id": rule_id,
                "name": f"{find['tool']} {rule_id}",
                "shortDescription": {"text": find["description"][:120]},
                "fullDescription": {"text": find["description"]},
            }
        location = None
        if find.get("file"):
            file_path = str(find["file"])
            if file_path not in artifact_index:
                artifact_index[file_path] = len(artifacts)
                artifacts.append({"location": {"uri": file_path}})
            location = {
                "physicalLocation": {
                    "artifactLocation": {"uri": file_path},
                    "region": {"startLine": find.get("line") or 1},
                }
            }
        level = "warning"
        if find["normalized_severity"] == "Critical" or find["normalized_severity"] == "High":
            level = "error"
        elif find["normalized_severity"] == "Medium":
            level = "warning"
        else:
            level = "note"
        result = {
            "ruleId": rule_id,
            "level": level,
            "message": {"text": find.get("description")},
        }
        if location:
            result["locations"] = [location]
        results.append(result)
    sarif = {
        "version": "2.1.0",
        "$schema": "https://schemastore.azurewebsites.net/schemas/json/sarif-2.1.0.json",
        "runs": [
            {
                "tool": {"driver": {"name": "SecurityScanner", "rules": list(rules.values())}},
                "results": results,
            }
        ],
    }
    output_path.write_text(json.dumps(sarif, indent=2), encoding="utf-8")


def generate_html_report(findings, trends, resolved, output_path):
    now = datetime.utcnow().isoformat() + "Z"
    new_count = sum(1 for status in trends.values() if status == "new")
    total = len(findings)
    html_lines = [
        "<html><head><meta charset='utf-8'><title>Security Scan Report</title></head><body>",
        f"<h1>Security Scan Report</h1>",
        f"<p>Generated: {escape(now)}</p>",
        f"<p>Total findings: {total}</p>",
        f"<p>New findings: {new_count}</p>",
        f"<p>Resolved since last scan: {len(resolved)}</p>",
        "<table border='1' cellpadding='4' cellspacing='0'>",
        "<tr><th>Tool</th><th>ID</th><th>Severity</th><th>OWASP</th><th>CWE</th><th>Package/File</th><th>Line</th><th>Description</th><th>Recommendation</th><th>Status</th></tr>",
    ]
    for find in findings:
        key = build_unique_key(find)
        status = trends.get(key, "new")
        target = escape(find.get("package") or find.get("file") or "-")
        html_lines.append(
            "<tr>"
            f"<td>{escape(find['tool'])}</td>"
            f"<td>{escape(str(find['id']))}</td>"
            f"<td>{escape(find['normalized_severity'])}</td>"
            f"<td>{escape(find.get('owasp') or '-')}</td>"
            f"<td>{escape(str(find.get('cwe') or '-'))}</td>"
            f"<td>{target}</td>"
            f"<td>{escape(str(find.get('line') or '-'))}</td>"
            f"<td>{escape(find.get('description') or '-')}</td>"
            f"<td>{escape(find.get('recommendation') or '-')}</td>"
            f"<td>{escape(status)}</td>"
            "</tr>"
        )
    html_lines.append("</table></body></html>")
    Path(output_path).write_text("\n".join(html_lines), encoding="utf-8")


def parse_args():
    parser = argparse.ArgumentParser(description="Scan code and generate a vulnerability report.")
    parser.add_argument("--path", "-p", default=None, help="Root folder to scan for vulnerabilities.")
    parser.add_argument("--output", "-o", default="security_reportv.txt", help="Output report file path.")
    return parser.parse_args()


def main():
    args = parse_args()
    base_dir = Path(args.path or ".").resolve()
    if not base_dir.is_dir():
        print(f"Error: '{base_dir}' is not a valid directory.")
        return

    print(f"Starting security scanning for: {base_dir}")
    try:
        bandit_findings = parse_bandit(base_dir)
    except Exception as exc:
        print(f"Bandit scan skipped: {exc}")
        bandit_findings = []

    try:
        semgrep_findings = parse_semgrep(base_dir)
    except Exception as exc:
        print(f"Semgrep scan skipped: {exc}")
        semgrep_findings = []

    try:
        dependency_findings = parse_pip_audit()
    except Exception as exc:
        print(f"Dependency audit skipped: {exc}")
        dependency_findings = []
    findings = bandit_findings + semgrep_findings + dependency_findings
    for find in findings:
        find["recommendation"] = recommendation_for_finding(find)
        find["unique_key"] = build_unique_key(find)
    history_path = base_dir / "scan_history.json"
    previous_scan = load_scan_history(history_path)
    trends, resolved = compare_trends(findings, previous_scan)
    current_keys = {key: True for key in trends.keys()}
    save_scan_history(history_path, {"keys": current_keys, "timestamp": datetime.utcnow().isoformat()})
    sarif_output = base_dir / "scan_results.sarif"
    generate_sarif(findings, sarif_output)
    report_output = base_dir / "security_report.html"
    generate_html_report(findings, trends, resolved, report_output)
    summary = {
        "bandit_findings": len(bandit_findings),
        "semgrep_findings": len(semgrep_findings),
        "dependency_findings": len(dependency_findings),
        "total_findings": len(findings),
        "new_findings": sum(1 for status in trends.values() if status == "new"),
        "resolved_findings": len(resolved),
        "sarif": str(sarif_output),
        "html_report": str(report_output),
    }
    print(json.dumps(summary, indent=2))

    try:
        Path(args.output).write_text(json.dumps(summary, indent=2), encoding="utf-8")
        print(f"Saved vulnerability summary to {args.output}")
    except OSError as exc:
        print(f"Failed to write output file '{args.output}': {exc}")


if __name__ == "__main__":
    main()

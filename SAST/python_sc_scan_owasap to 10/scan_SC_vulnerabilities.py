import argparse
import os
import re
import json
import sys

# define patterns for common security issues in Python code

ISSUE_DEFINITIONS = [
    {
        "id": "hardcoded-secret",
        "name": "Hardcoded Secret",
        "pattern": re.compile(r"(?i)(password|passwd|secret|token|api_key|apikey|credentials)\s*=\s*['\"].+['\"]"),
        "severity": "High",
        "recommendation": "Move secrets and credentials into secure environment variables or a secrets manager. Avoid checking them into source control.",
    },
    {
        "id": "eval-exec-injection",
        "name": "Use of eval/exec",
        "pattern": re.compile(r"\b(eval|exec)\s*\("),
        "severity": "High",
        "recommendation": "Avoid eval/exec. Use safe parsing and validation functions, or explicit logic instead of executing dynamic code.",
    },
    {
        "id": "command-injection",
        "name": "Command Injection Risk",
        "pattern": re.compile(r"\b(subprocess\.(Popen|call|run|check_output)|os\.system)\s*\([^\)]*(shell\s*=\s*True|\+|%|\.format\()"),
        "severity": "High",
        "recommendation": "Do not pass untrusted data into shell commands. Use subprocess with a list of arguments and shell=False.",
    },
    {
        "id": "sql-injection",
        "name": "SQL Injection Risk",
        "pattern": re.compile(r"\.execute\s*\([^\)]*(%|\+|\.format\()"),
        "severity": "High",
        "recommendation": "Use parameterized queries or ORM query binding instead of string concatenation or formatting for SQL statements.",
    },
    {
        "id": "insecure-deserialization",
        "name": "Insecure Deserialization",
        "pattern": re.compile(r"\b(pickle\.(loads|load|dumps|dump)|yaml\.load\()"),
        "severity": "High",
        "recommendation": "Prefer safe serializers like json or yaml.safe_load. Avoid deserializing untrusted input.",
    },
    {
        "id": "debug-enabled",
        "name": "Debug Mode Enabled",
        "pattern": re.compile(r"\b(DEBUG\s*=\s*True|app\.debug\s*=\s*True|Flask\([^\)]*debug\s*=\s*True)"),
        "severity": "Medium",
        "recommendation": "Disable debug mode in production and ensure sensitive error information is not exposed to users.",
    },
    {
        "id": "insecure-random",
        "name": "Insecure Random Usage",
        "pattern": re.compile(r"\brandom\.(randint|random|choice|choices|sample|randrange)\s*\("),
        "severity": "Medium",
        "recommendation": "Use the secrets module for generating security tokens, passwords, and cryptographic values.",
    },
    {
        "id": "insecure-ssl",
        "name": "Insecure SSL/TLS Verification",
        "pattern": re.compile(r"\b(verify\s*=\s*False|ssl\.CERT_NONE|check_hostname\s*=\s*False)"),
        "severity": "High",
        "recommendation": "Do not disable SSL/TLS verification. Validate certificates and use secure connection settings.",
    },
    {
        "id": "xss-risk",
        "name": "Potential Cross-Site Scripting (XSS)",
        "pattern": re.compile(r"\b(render_template|make_response|Response|return\s+[\"'].*\{\{.*\}\}.*[\"'])"),
        "severity": "Medium",
        "recommendation": "Sanitize and escape user-supplied content before rendering it in HTML responses.",
    },
    {
        "id": "insecure-file-permissions",
        "name": "Insecure File Permission or Path Handling",
        "pattern": re.compile(r"\bopen\s*\([^\)]*\bmode\s*=\s*['\"]a?w['\"]|os\.chmod\s*\([^\)]*0o7[0-7]{2}\)"),
        "severity": "Medium",
        "recommendation": "Avoid overly permissive file permissions and validate file paths to prevent directory traversal issues.",
    },
]

# severity scoring based on common CVSS-like ratings
SEVERITY_SCORE = {
    "High": 9,
    "Medium": 6,
    "Low": 3,
}

SUMMARY_TEMPLATE = (
    "File: {file}\n"
    "  Issue: {name}\n"
    "  Description: {description}\n"
    "  Severity: {severity}\n"
    "  Score: {score}/10\n"
    "  Recommendation: {recommendation}\n"
    "  Location: Line {line}\n"
)

# This script scans Python files for common security issues and generates a report.

def get_issues_from_text(text):
    issues = []
    for issue_def in ISSUE_DEFINITIONS:
        for match in issue_def["pattern"].finditer(text):
            line = text.count("\n", 0, match.start()) + 1
            issues.append({
                "id": issue_def["id"],
                "name": issue_def["name"],
                "description": f"Detected pattern matching {issue_def['name']}.",
                "severity": issue_def["severity"],
                "score": SEVERITY_SCORE.get(issue_def["severity"], 3),
                "recommendation": issue_def["recommendation"],
                "line": line,
                "match_text": match.group(0).strip(),
            })
            if issue_def["id"] == "hardcoded-secret":
                break
    return issues


def scan_python_files(root_path):
    report = {}
    for dirpath, _, filenames in os.walk(root_path):
        for filename in filenames:
            if filename.endswith(".py"):
                file_path = os.path.join(dirpath, filename)
                try:
                    with open(file_path, "r", encoding="utf-8", errors="ignore") as source_file:
                        text = source_file.read()
                except (OSError, UnicodeDecodeError):
                    continue
                issues = get_issues_from_text(text)
                if issues:
                    report[file_path] = issues
                    # Print vulnerabilities as they're found
                    for issue in issues:
                        print(f"[VULNERABILITY FOUND] {issue['name']}")
                        print(f"  File: {file_path}")
                        print(f"  Line: {issue['line']}")
                        print(f"  Severity: {issue['severity']}")
                        print(f"  Match: {issue['match_text']}")
                        print()
    return report


def create_summary_report(report, output_path):
    total_findings = sum(len(issues) for issues in report.values())
    high = sum(1 for issues in report.values() for issue in issues if issue["severity"] == "High")
    medium = sum(1 for issues in report.values() for issue in issues if issue["severity"] == "Medium")
    low = sum(1 for issues in report.values() for issue in issues if issue["severity"] == "Low")

    lines = [
        "Security scan report",
        "======================",
        f"Total Python files with findings: {len(report)}",
        f"Total findings: {total_findings}",
        f"High severity: {high}",
        f"Medium severity: {medium}",
        f"Low severity: {low}",
        "",
    ]

    for file_path, issues in sorted(report.items()):
        lines.append(f"File: {file_path}")
        for issue in issues:
            lines.append(f"  - {issue['name']} (Severity: {issue['severity']}, Score: {issue['score']}/10, Line: {issue['line']})")
            lines.append(f"      Description: {issue['description']}")
            lines.append(f"      Recommendation: {issue['recommendation']}")
        lines.append("")

    summary_text = "\n".join(lines)
    with open(output_path, "w", encoding="utf-8") as output_file:
        output_file.write(summary_text)

    json_path = os.path.splitext(output_path)[0] + ".json"
    with open(json_path, "w", encoding="utf-8") as json_file:
        json.dump(report, json_file, indent=2)

    return summary_text, json_path


def parse_args():
    parser = argparse.ArgumentParser(description="Scan Python code for security issues and generate a report.")
    parser.add_argument("--path", "-p", default=None, help="Root folder to scan for Python files.")
    parser.add_argument("--output", "-o", default="security_report.txt", help="Output report file path.")
    return parser.parse_args()


def main():
    args = parse_args()
    root_path = args.path or os.getcwd()
    root_path = os.path.abspath(root_path)

    # Verify the path exists
    if not os.path.isdir(root_path):
        print(f"Error: '{root_path}' is not a valid directory.")
        return

    print(f"\nScanning for vulnerabilities in: {root_path}\n")
    report = scan_python_files(root_path)
    
    if report:
        print("\n" + "="*80)
        print("Generating detailed report...")
        summary_text, json_path = create_summary_report(report, args.output)
        print(f"\nSaved text report to {args.output}")
        print(f"Saved JSON report to {json_path}")
    else:
        print("No vulnerabilities found!")

    
    high_findings = any(
    issue["severity"] == "High"
    for issues in report.values()
    for issue in issues)

    if high_findings:
        sys.exit(1)


if __name__ == "__main__":
    main()

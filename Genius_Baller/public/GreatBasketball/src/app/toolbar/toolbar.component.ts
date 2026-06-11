import { Component, OnInit} from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../Hero';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
   // policy: Hero;
   // id: number;
   // title: string;
   // subtitle: string;
   // description: string;
   // link: string;
   // images: string;
  constructor(public translate: TranslateService, public dataService: DataserviceService, public http: HttpClient) {
    translate.addLangs(['English', 'French', 'Chinese']);
    translate.setDefaultLang('English');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/English|French|Chinese/) ? browserLang : 'English');
  }
  ngOnInit() {
    // this.dataService.readPolicies().subscribe( policies => {
    //   this.policy = policies;
    //   // this.id = this.policy.id;
    //   // this.title = this.policy.title;
    //   // this.description = this.policy.description;
    //   // this.link = this.policy.link;
    //   // this.images = this.policy.images;
    //   console.log(this.images);
    // });
  }
}

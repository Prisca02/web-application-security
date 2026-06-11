import { Component, OnInit } from '@angular/core';
import {IImage} from 'ng-simple-slideshow';

@Component({
  selector: 'app-summer-camp',
  templateUrl: './summer-camp.component.html',
  styleUrls: ['./summer-camp.component.css']
})
export class SummerCampComponent implements OnInit {

   imageSources: (string | IImage)[] = [
    {url: 'http://localhost/prisc_app/admin/upload/slide_summer5.jpg'},  {url: 'http://localhost/prisc_app/admin/upload/slide_summer1.jpg'},
    {url: 'http://localhost/prisc_app/admin/upload/slide_summer2.jpg'}, {url: 'http://localhost/prisc_app/admin/upload/slide_summer3.jpg'}
  ];
  height: '400px';
  ngOnInit() {
    this.imageSources.push('http://localhost/prisc_app/admin/upload/slide_summer4.jpg');
  }
}

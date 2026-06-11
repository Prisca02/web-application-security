import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {IImage} from 'ng-simple-slideshow';
import { Hero, Image } from '../Hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  imageSources: (string | IImage)[] = [
    {url: 'http://localhost/prisc_app/admin/upload/slide_home1.jpg'},  {url: 'http://localhost/prisc_app/admin/upload/slide_home2.jpg'},
    {url: 'http://localhost/prisc_app/admin/upload/slide_home3.jpg'}, {url: 'http://localhost/prisc_app/admin/upload/slide_home4.jpg'},
    {url: 'http://localhost/prisc_app/admin/upload/slide_home5.jpg'}
  ];
  constructor(private dataService: DataserviceService) {}
  height: '400px';
  ngOnInit() {
    this.imageSources.push('http://localhost/prisc_app/admin/upload/slide_home1.jpg');
    }
}

import { Component, OnInit } from '@angular/core';
import {IImage} from 'ng-simple-slideshow';

@Component({
  selector: 'app-winter-camp',
  templateUrl: './winter-camp.component.html',
  styleUrls: ['./winter-camp.component.css']
})
export class WinterCampComponent implements OnInit {
    imageSources: (string | IImage)[] = [
    {url: '../../assets/image/group_image.jpg'},  {url: '../../assets/image/group_image1.jpeg'},
    {url: '../../assets/image/image16.jpeg'}, {url: '../../assets/image/image18.jpeg'}
  ];
  height: '400px';
  ngOnInit() {
    this.imageSources.push('../../assets/image/image1.jpg');
  }

}

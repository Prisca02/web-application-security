import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Hero} from '../Hero';
import {DataserviceService} from '../dataservice.service';


@Component({
  selector: 'app-classes-videos',
  templateUrl: './classes-videos.component.html',
  styleUrls: ['./classes-videos.component.css']
})
export class ClassesVideosComponent implements OnInit {
  policy: Hero[];
  videos: string;

  constructor( public dataService: DataserviceService) { }
  @ViewChild('videoPlayer', { static : true}) videoplayer: ElementRef;

  toggleVideo() {
      this.videoplayer.nativeElement.play();
  }

  ngOnInit() {
    this.dataService.VideosList().subscribe( policies => {
      this.policy = policies;
      console.log('toto');
    });
  }

}

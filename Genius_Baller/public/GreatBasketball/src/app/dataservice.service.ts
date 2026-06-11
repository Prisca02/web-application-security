import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero, Image } from './Hero';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class DataserviceService {
  myVideos: Observable<Hero[]>;
  // PHP_API_SERVER = 'http://localhost/prisc_app/?page_name=about'; // URL to web api
  // PHP_API_SERVER = 'http://localhost/prisc_app/admin/videos/'; // URL to web api
  PHP_API_SERVERS = 'https://cors-anywhere.herokuapp.com/http://localhost/prisc_app/?page_name=home'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient, private messageService: MessageService) { }
  // readPolicies(): Observable<Hero> {
  //   return this.http.get<Hero>(`${this.PHP_API_SERVER}`);
  // }
  VideosList(): Observable<Hero[]> {
    return this.http.get<Hero[]>('http://localhost/prisc_app/admin/videos');
  }
  getImages(): Observable<Image> {
    return this.http.get<Image>(`${this.PHP_API_SERVERS}`);
  }
}

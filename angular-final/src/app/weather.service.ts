import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(public http: Http) {
  }

  getWeather(){
     return this.http.get('http://api.wunderground.com/api/7223400ff39cea3d/hourly/q/zmw:00000.59.71820.json').map(res => res.json())
   }
}

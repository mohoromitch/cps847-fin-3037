import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {


  // X = FCTTIME 
  hour;
  condition;
  temperature;

  constructor(public weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(weather => { 
      this.hour = weather.hourly_forecast[0].FCTTIME.hour;
      this.condition = weather.hourly_forecast[0].condition;
      this.temperature = weather.hourly_forecast[0].temp.metric;
    });
  }
}

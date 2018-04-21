import { WeatherComponent } from './weather/weather.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { WeatherService } from './weather.service';
import { HomeComponent } from './home/home.component';
import { HourlyComponent } from './hourly/hourly.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent,
    HourlyComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
      DatePipe,
      WeatherService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

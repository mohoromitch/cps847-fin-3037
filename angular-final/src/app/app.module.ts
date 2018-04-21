import { WeatherComponent } from './weather/weather.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AppRoutingModule } from './/app-routing.module';

import { WeatherService } from './weather.service';
import { HomeComponent } from './home/home.component';
import { HourlyComponent } from './hourly/hourly.component';

@NgModule({
  declarations: [
    AppComponent,
    OurCustomersComponent,
    AboutUsComponent,
    OurServicesComponent,
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

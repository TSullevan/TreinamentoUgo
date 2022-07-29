import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { WeatherForecast } from '../../models/weather-forecast.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public myText: string = '';

  public weatherForecasts: Array<WeatherForecast> = new Array<WeatherForecast>();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  public get(): void {
    this.httpService.get<Array<WeatherForecast>>('weatherforecast').subscribe(response => {
      this.weatherForecasts = response;
    });
    return ;
  }

}
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/Weather';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.css'],
})
export class WeatherBoxComponent {
  constructor(
    private weatherService: WeatherService,
    private _snackBar: MatSnackBar
  ) {}
  weather: Weather = {
    location: '',
    temp: 0,
    humidity: 0,
    wind: 0,
    icon: '',
    condition: '',
  };

  searchCity(city: string): void {
    this.weatherService
      .getWeather(city)
      .pipe(
        catchError((error) => {
          this._snackBar.open('Cannot find that city!', 'Close', {
            verticalPosition: 'top',
          });
          return of(null); // Return a default value or handle the error case
        })
      )
      .subscribe((result) => {
        if (result) {
          // Update the weather object with the successful response
          this.weather.location = `${result.location.name}, ${result.location.country}`;
          this.weather.humidity = result.current.humidity;
          this.weather.temp = result.current.temp_c;
          this.weather.wind = result.current.wind_kph;
          this.weather.icon = 'https:' + result.current.condition.icon;
          this.weather.condition = result.current.condition.text;
        }
      });
  }
}

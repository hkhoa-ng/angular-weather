import { Component, Input } from '@angular/core';
import { Weather } from 'src/Weather';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
})
export class WeatherDetailsComponent {
  @Input() weather!: Weather;
  iconUrl: string = `https:${this.weather?.icon}`;
}

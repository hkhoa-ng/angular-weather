import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey: string = '48aad3c4821940c88c753423231005';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}&aqi=no`;
    return this.http.get(apiUrl);
  }
}

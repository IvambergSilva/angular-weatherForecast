import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getWeather(query: string): Observable<any> {
    const url = 'https://api.openweathermap.org/data/2.5/weather'

    const appid = environment.apiKey

    const params = new HttpParams()
      .set('q', query)
      .set('appid', appid)
      .set('lang', 'pt_br');

    return this.http.get(url, { params })
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { responseToCityWeather, responseToCityWeatherDays } from '../Common/response';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  private loadingSubject = new BehaviorSubject<boolean>(false)

  loading: Observable<boolean> = this.loadingSubject.asObservable()

  hide(): void {
    this.loadingSubject.next(false)
  }

  show(): void {
    this.loadingSubject.next(true)
  }

  getDatasCityWeather(query: string, type: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/${type}`

    const appid = environment.apiKey

    const params = new HttpParams()
      .set('q', query)
      .set('appid', appid)
      .set('units', 'metric')
      .set('lang', 'pt_br');

    if (type == 'weather') return this.getCityWeather(url, params)
    else return this.getCityWeatherDays(url, params)
  }

  getCityWeather(url: string, params: HttpParams): Observable<any> {
    return this.http.get(url, { params }).pipe(map((response) =>
      responseToCityWeather(response)
    ))
  }

  getCityWeatherDays(url: string, params: HttpParams): Observable<any> {
    return this.http.get(url, { params }).pipe(map((response) =>
      responseToCityWeatherDays(response)
    ))
  }
}

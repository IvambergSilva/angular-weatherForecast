import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { responseToCityWeather } from '../Common/response';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  private loadingSubject = new BehaviorSubject<boolean>(false)

  loading: Observable<boolean> = this.loadingSubject.asObservable()

  private query: string = ''

  private countrySubject = new BehaviorSubject<object>({})

  country: Observable<object> = this.countrySubject.asObservable()

  type: string = ''

  hide(): void {
    this.loadingSubject.next(false)
  }

  show(): void {
    this.loadingSubject.next(true)
  }

  // setInformation(query: {}){
  //   this.countrySubject.next(query)
  //   console.log('entrou');
  // }

  // getWeather(): Observable<any> {
  //   const url = 'https://api.openweathermap.org/data/2.5/weather'

  //   const appid = environment.apiKey

  //   const params = new HttpParams()
  //   .set('q', query)
  //   .set('appid', appid)
  //   .set('lang', 'pt_br');

  //   return this.http.get(url, { params }).pipe(map(response => responseToCityWeather(response)))


  //   this.weaterService.getWeather(query).pipe(
  //   tap((response) => {
  //   this.cityWeather = response
  //   console.log(response);
  //   }),
  //   catchError((err: any) => {
  //   console.error(err.error);
  //   return of()
  //   }
  //   )).subscribe()
  // }

  getCityWeather(query: string): Observable<any> {

    this.type = 'weather'

    const url = `https://api.openweathermap.org/data/2.5/${this.type}`

    const appid = environment.apiKey

    const params = new HttpParams()
      .set('q', query)
      .set('appid', appid)
      .set('units', 'metric')
      .set('lang', 'pt_br');

    return this.http.get(url, { params }).pipe(map((response) =>
      responseToCityWeather(response)
    ))
  }
}

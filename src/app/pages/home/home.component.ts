import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, catchError, tap, of } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchControl: FormControl = new FormControl;

  cityWeather: any

  constructor(
    private weaterService: WeatherService
  ) {}

  ngOnInit(): void {
    this.searchControl.setValidators(Validators.required)
  }

  keyUpEnter(key: KeyboardEvent) {
    if(key.code == 'Enter') this.search()
  }

  search() {
    const query = this.searchControl.value
    
    this.weaterService.getWeather(query).pipe(
      tap((response) => {
        this.cityWeather = response
        console.log(response);
      }),
      catchError((err: any) => {
        console.error(err.error);
        return of()
      }
    )).subscribe()
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, catchError, tap, of, map } from 'rxjs';
import { newCityWeather } from 'src/app/Common/factories';
import { City, CityWeather } from 'src/app/Interfaces/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchControl: FormControl = new FormControl;

  cityWeather: CityWeather = newCityWeather()

  constructor(
    private weaterService: WeatherService
  ) {}

  ngOnInit(): void {
    this.searchControl.setValidators(Validators.required)
  }

  keyUpEnter(key: KeyboardEvent) {
    if (key.code == 'Enter') this.search()
  }

  search() {
    const query =  this.searchControl.value

    this.weaterService.getCityWeather(query).subscribe((map) => {
      console.log(map);
      this.cityWeather = map
      console.log(this.cityWeather.weather);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { newCityWeather, newCityWeatherDays } from 'src/app/Common/factories';
import { CityWeather, CityWeatherDays } from 'src/app/Interfaces/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchControl: FormControl = new FormControl;

  cityWeather: CityWeather = newCityWeather()
  cityWeatherDays: CityWeatherDays = newCityWeatherDays()

  constructor(
    private weaterService: WeatherService
  ) {}

  ngOnInit(): void {
    this.searchControl.setValidators(Validators.required)
    // this.searchToday()
    this.search5Days()
  }

  keyUpEnter(key: KeyboardEvent) {
    if (key.code == 'Enter') this.searchToday()
  }

  searchToday() {
    const query = 'são paulo'
    // const query = this.searchControl.value
    const type = 'weather'

    this.weaterService.getDatasCityWeather(query, type).subscribe((map) => {
      console.log(map);
      this.cityWeather = map
    })
  }
  search5Days() {
    const query = 'juripiranga'
    const type = 'forecast'

    this.weaterService.getDatasCityWeather(query, type).subscribe((map) => {
      console.log(map);
      this.cityWeatherDays = map
      console.log(this.cityWeatherDays.list.length);
    })
  }
}
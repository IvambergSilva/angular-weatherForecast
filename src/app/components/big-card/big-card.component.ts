import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent implements OnInit, OnChanges {
  width: string = '128'
  height: string = (Number(this.width) * (3 / 4)).toString()

  @Input()
  country: string = ''
  
  countryVisible: boolean = false

  src: string = ''
  srcIcon: string = ''

  @Input()
  title: string = ''

  @Input()
  description: string = ''

  @Input()
  icon: string = ''
  
  @Input()
  temperature: number = 0
  
  temp: string = ''
  unit: string = '°C'
  
  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
  }
  
  ngOnChanges(): void {
    this.setInformation()
  }
  
  setInformation() {
    this.country = this.country.toLowerCase()
    
    if (this.country != '') {
      this.src = `https://flagcdn.com/${this.width}x${this.height}/${this.country}.png`
      
      this.countryVisible = true
      
      this.temp = `${this.temperature.toFixed()} ${this.unit}`
      this.srcIcon = `https://openweathermap.org/img/wn/${this.icon}@4x.png`

    }
  }
}

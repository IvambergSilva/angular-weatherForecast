import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnChanges {

  @Input()
  description: string = ''

  @Input()
  country: string = ''

  // countryVisible: boolean = false

  // src: string = ''
  srcIcon: string = ''

  @Input()
  title: string = ''

  @Input()
  icon: string = ''

  @Input()
  temperature: number = 0

  @Input()
  humidity: number = 0

  @Input()
  wind: number = 0

  temp: string = ''
  unit: string = '°C'

  @Input()
  day: string = ''



  dayOfWeek: string = ''
  date: string = ''
  hours: string = ''
  month: string = ''

  daysBR: string[] = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

  daysEn: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  monthEn: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


  ngOnChanges(): void {
    if (this.country != '') {
      this.setInformation()
      this.dateHandle()
    }
  }

  setInformation() {
    this.country = this.country.toLowerCase()

    // this.src = `https://flagcdn.com/${this.width}x${this.height}/${this.country}.png`

    // this.countryVisible = true

    this.temp = `${this.temperature.toFixed()} ${this.unit}`
    this.srcIcon = `https://openweathermap.org/img/wn/${this.icon}@4x.png`

  }

  dateHandle() {
    const dateHandle = new Date(this.day).toString().split(' ')

    this.daysEn.map((day, index) => {
      if (dateHandle[0] == day) this.dayOfWeek = this.daysBR[index]
    })

    this.hours = dateHandle[4].substring(0, 5)

    this.monthEn.map((month, index) => {
      if (dateHandle[1] == month) {
        if (index < 10) this.month = `0${index + 1}`

        this.date = `${dateHandle[2]}/${this.month}/${dateHandle[3]}`
      }
    })
  }
}

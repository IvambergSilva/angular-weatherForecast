import { CityWeather, CityWeatherDays } from '../Interfaces/weather.model'

export function responseToCityWeather(response: any): CityWeather {
  return {
    city: {
      id: response.id,
      name: response.name,
      country: response.sys.country,
      // timeZone: response.timezone,
    },
    weather: {
      id: response.weather[0].id,
      description: response.weather[0].description,
      icon: response.weather[0].icon,
      temp: response.main.temp,
      // minTemp: undefined,
      // maxTemp: undefined,
      feelsLike: response.main.feels_like,
      humidity: response.main.humidity,
      wind: {
        speed: response.wind.speed,
        deg: response.wind.deg,
      },
      sunrise: response.sys.sunrise,
      sunset: response.sys.sunset,
    },
  }
}

export function responseToCityWeatherDays(response: any): CityWeatherDays {
  return {
    city: {
      id: response.city.id,
      name: response.city.name,
      country: response.city.country,
    },
    list: response.list.filter((item: any) => {
      return item.dt_txt[12] == '9' || item.dt_txt[12] == '5' || item.dt_txt[12] == '1'
    }).map((item: any) => {
      return {
          dt_txt: item.dt_txt,
          temp: item.main.temp,
          humidity: item.main.humidity,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
          wind_speed: item.wind.speed,
          sys_pod: item.sys.pod
      }
    })
  }
}

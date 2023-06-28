import { CityWeather, CityWeatherDays } from "../Interfaces/weather.model";

export function newCityWeather(): CityWeather {
    return {
        city: {
            id: 0,
            name: '',
            country: '',
            // timeZone: ''
        },
        weather: {
            id: 0,
            description: '',
            icon: '',
            temp: 0,
            // minTemp: undefined,
            // maxTemp: undefined,
            feelsLike: 0,
            humidity: 0,
            wind: {
                speed: 0,
                deg: 0,
            },
            sunrise: 0,
            sunset: 0,
        },
    }
}

export function newCityWeatherDays(): CityWeatherDays {
    return {
        city: {
            id: 0,
            name: '',
            country: '',
        },
        list: [{
            dt_txt: '',
            temp: 0,
            humidity: 0,
            weather: {
                description: '',
                icon: ''
            },
            wind_speed: 0,
            wind_deg: 0,
            sys_pod: '',
            icon: '',
            description: ''
        }]
    }
}

import { CityWeather } from "../Interfaces/weather.model";

export function newCityWeather(): CityWeather {
    return {
        city: {
            id: 0,
            name: '',
            country: '',
            coord: {
                lon: 0,
                lat: 0
            },
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
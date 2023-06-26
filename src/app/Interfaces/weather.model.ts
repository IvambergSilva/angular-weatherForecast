export interface CityWeather {
    city: City,
    weather: Weather
}

export interface City {
    id: number;
    name: string;
    country: string;
    coord: {
        lon: number;
        lat: number;
    };
    // timeZone?: string;
}

export interface Weather {
    id: number;
    description: string;
    icon: string;
    temp: number;
    // minTemp?: number;
    // maxTemp?: number;
    feelsLike: number;
    humidity: number;
    wind: {
        speed: number;
        deg: number;
    };
    sunrise: number;
    sunset: number;
  }
  
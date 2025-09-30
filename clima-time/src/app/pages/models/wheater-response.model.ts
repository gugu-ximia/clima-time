export interface WeatherResponse {
    weather: Weather[];
    main: Main

}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
}
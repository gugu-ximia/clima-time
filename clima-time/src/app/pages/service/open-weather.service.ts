import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherResponse } from "../models/wheater-response.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class OpenWeatherService {
    private apiKey = "83a45ec6be8cf7e0ae3726f1d65a8a84";
    private apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    private http = inject(HttpClient);
    constructor() {}

    buscarInfoClimaCidadeAtual (): Observable<WeatherResponse>{

        const url = this.apiUrl + '?q=Dois%20Vizinhos&appid=' + this.apiKey + '&lang=pt_br&units=metric';
        
        return this.http.get<WeatherResponse>(url);
    }
}
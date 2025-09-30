import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class OpenWeatherService {
    apiKey = "83a45ec6be8cf7e0ae3726f1d65a8a84";
    apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    constructor() {}

    buscarInfoClimaCidadeAtual (){



        const url = this.apiUrl + '?q=Dois%20Vizinhos&appid=' + this.apiKey + '&lang=pt_br&units=metric';
    
        console.log(url);
    }
}
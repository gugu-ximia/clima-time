import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenWeatherService } from '../service/open-weather.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {

  navegaodr = inject(Router);
  openWeatherService = inject(OpenWeatherService);
  constructor() { }

  ngOnInit() {
    this.openWeatherService.buscarInfoClimaCidadeAtual();
  }

  navegarParaTelaTelaPesquisa() {
    this.navegaodr.navigate(['pesquisa']);
  }
}
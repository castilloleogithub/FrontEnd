/*
Proyecto: Mi porfolio
Autor: lcastillo
© Argentina Programa 2022
*/
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona('', '', '','');

  constructor(public personaService: PersonaService) {}
  isLogged = true;
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });
  }
}

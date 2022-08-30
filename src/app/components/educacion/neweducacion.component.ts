/*
Proyecto: Mi porfolio
Autor: lcastillo
© Argentina Programa 2022
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  periE: string;
  imgE: string;
  educacion: Educacion[] =[];
  constructor(private educacionS: EducacionService, private router: Router, private tokenService: TokenService) { }
  
  isLogged =false;
  ngOnInit(): void {
  this.cargarEducacion();
    if ( this.tokenService.getToken())
      {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
  }
  cargarEducacion(): void{
    this.educacionS.lista().subscribe((data)=>{this.educacion = data;
    });
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.periE, this.imgE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}

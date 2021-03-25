import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadServicioService } from 'src/app/shared/ciudad-servicio.service';
@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  public ciudadService:CiudadServicioService
  public mostrar:Ciudad[]
  public oneCiudad:Ciudad
  constructor(ciudadService:CiudadServicioService) {
    this.ciudadService=ciudadService
    this.mostrar=[];
    this.oneCiudad=new Ciudad("","","")
  }



  mostrarCiudades(){
   this.mostrar= this.ciudadService.getAll();
  }

  mostrarUno(codigo:string){
      this.oneCiudad = this.ciudadService.getOne(codigo)
  }

  ngOnInit(): void {
  }

}

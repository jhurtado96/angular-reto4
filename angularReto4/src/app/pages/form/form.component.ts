import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadServicioService } from 'src/app/shared/ciudad-servicio.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public ciudadEditada:Ciudad[]
  constructor(public ciudadService:CiudadServicioService) {
    this.ciudadEditada = []
  }



  meterCiudad(ciudad:string,pais:string,codigo:string)
  {
    this.ciudadService.add(new Ciudad(ciudad,pais,codigo)) 
  }
  
  editarCiudad(ciudad:string,pais:string,codigo:string){
    this.ciudadService.edit(new Ciudad(ciudad,pais,codigo))
  }

  borrarCiudad(codigo:string){
    this.ciudadService.delete(codigo)
  }


  ngOnInit(): void {
  }

}

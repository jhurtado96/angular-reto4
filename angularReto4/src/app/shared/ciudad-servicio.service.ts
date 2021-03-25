import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadServicioService {
  private ciudades:Ciudad[]
  constructor() {
    this.ciudades=[
      new Ciudad("Madrid","Spain","MAD"),
      new Ciudad("Barcelona","Spain","BCN"),
      new Ciudad("Estocolmo","Sweeden","EST")
    ]
   }
   getAll():Ciudad[]{
    return this.ciudades
  }

  public getOne(codigo:string):Ciudad{
    let resultado:Ciudad = new Ciudad("","","");
    for (let i = 0; i < this.ciudades.length; i++) {
      if(this.ciudades[i].codigo==codigo){
        resultado= this.ciudades[i];
      } 
      
    }

    
    return resultado;
  }

  public add(ciudad:Ciudad):boolean{
    let resultado = false
    if (ciudad!=null) {
      this.ciudades.push(ciudad)
      resultado=true
    }
    
    return resultado
  }

  public edit(ciudad:Ciudad):boolean{
    let resultado=false
    for (let i = 0; i < this.ciudades.length; i++) {
      if (this.ciudades[i].codigo == ciudad.codigo) {
        this.ciudades[i].nombre = ciudad.nombre
        this.ciudades[i].pais = ciudad.pais
        resultado = true
      }
      
    }
      
      return resultado;
  }

  public delete(code:string):boolean{
    let resultado = false
    for (let i = 0; i < this.ciudades.length; i++) {
      if (this.ciudades[i].codigo == code) {
        this.ciudades.splice(i,1)
        resultado = true
      }
      
    }
    return resultado
  }

}

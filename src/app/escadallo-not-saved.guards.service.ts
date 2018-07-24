import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Escandallo1Component } from './escandallo-1/escandallo-1.component';


//Realizamos el Guard para que cuando realicemos un cambio dentro del componente escandallos1 no podamos salir sin guardar y tengamos que darle a Finish. esto nos garantiza el salvado de los datos en la base de datos.
@Injectable()
export class EscandalloNotGuard implements CanDeactivate<Escandallo1Component>{
  canDeactivate(component: Escandallo1Component): boolean {
    console.log('hola amigo')
    if(component.saved === false){
      alert('salva primero')
    }
    return component.saved
    
  }
  constructor() { }
}








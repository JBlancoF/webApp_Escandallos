import { Injectable } from '@angular/core';

@Injectable()
export class SideBarColorsService {
//Son los metodos de acceso y seteo de datos de una variable o propiedad.
//realizamos este servicio para asignar a cada componente visible un nombre en el active section, lo recuperamos con el get en el side bar, si estos coinciden la classe active sera efectiva.
  activeSection: string

  setActiveSection(newActiveSection){
    this.activeSection = newActiveSection
  }

  getActiveSection(){
    return this.activeSection
  }

  constructor() { }

}

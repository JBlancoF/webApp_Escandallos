import { Component, OnInit } from '@angular/core';
import { EscandallosAllService } from '../escandallos-all.service';
import { SideBarColorsService } from '../side-bar-colors.service';

@Component({
  selector: 'app-cat-escandallo',
  templateUrl: './cat-escandallo.component.html',
  styleUrls: ['./cat-escandallo.component.scss'],
  providers: [EscandallosAllService]

})
export class CatEscandalloComponent implements OnInit {

  listaCatEscandallos: any
  idUser: number


  getCatEscn(){
    this.escandallosAllService.getAllCatEscandallos(this.idUser)
    .then((result)=> {
      this.listaCatEscandallos = result.json()
    })
  }


  constructor(private escandallosAllService : EscandallosAllService,private sideBarColorsService: SideBarColorsService,) { 
    this.sideBarColorsService.setActiveSection('catEsc')
  }

  ngOnInit() {
    this.idUser=JSON.parse(localStorage.getItem('idUser'))


    this.getCatEscn()

  }

  handleSubmit(catEsc){    
    this.escandallosAllService.deleteCatEscandallos(catEsc).then(()=>{
      this.getCatEscn()
    })
  }

}

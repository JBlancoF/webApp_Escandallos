import { Component, OnInit } from '@angular/core';
import { EscandallosAllService } from '../escandallos-all.service';
import { SideBarColorsService } from '../side-bar-colors.service';

@Component({
  selector: 'escandallos-list',
  templateUrl: './escandallos-list.component.html',
  styleUrls: ['./escandallos-list.component.scss'],
  providers: [EscandallosAllService]

})
export class EscandallosListComponent implements OnInit {

  listaEscandallos: any
  idUser: number

  constructor(private escandallosAllService: EscandallosAllService,private sideBarColorsService: SideBarColorsService) {
    this.sideBarColorsService.setActiveSection('escandallos')
   }

  
   
  allEscandallos(){
    this.escandallosAllService.getAllEscandallos(this.idUser)
    .then((result)=> {
      this.listaEscandallos = result
      console.log('listadoEncandallos',this.listaEscandallos);
    })
  }

  ngOnInit() {
    //recupero el id del Usuario del LocalStorage y lo transformo en numero y lo metemos en una variable
    this.idUser =JSON.parse(localStorage.getItem('idUser'))
    console.log(this.idUser);
    
    this.allEscandallos()



  }

  handleSubmit(esc){
    this.escandallosAllService.deleteEscandallos(esc).then(() => {
      this.allEscandallos()
    })
  }


}

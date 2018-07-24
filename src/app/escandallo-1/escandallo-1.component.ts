import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EscandallosAllService } from '../escandallos-all.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompleterService, CompleterData } from 'ng2-completer';
import { IngredientesAllService } from '../ingredientes-all.service';
import { SideBarColorsService } from '../side-bar-colors.service';


@Component({
  selector: 'app-escandallo-1',
  templateUrl: './escandallo-1.component.html',
  styleUrls: ['./escandallo-1.component.scss'],
  providers: [EscandallosAllService, IngredientesAllService]

})

export class Escandallo1Component implements OnInit {


  datosCabecera: any
  datosTabla: any
  idEscandallo: any
  sumaCmpT: number
  sumaTund: number
  saved: boolean = true


  protected searchArt: any
  protected searchData: any
  protected dataService: CompleterData;
  protected und: number


  constructor(
    private activatedRoute: ActivatedRoute,
    private escandallosAllService: EscandallosAllService,
    private router: Router,
    private completerService: CompleterService,
    private ingredientesAllService: IngredientesAllService,
    private sideBarColorsService: SideBarColorsService) { 
      this.sideBarColorsService.setActiveSection('escandallos')
    }


  sumaCmpTotal() {
    this.sumaCmpT = 0
    //realizar la suma para el C.M.P Total
    for (let i = 0; i < this.datosTabla.length; i++) {
      this.sumaCmpT = this.sumaCmpT + ((this.datosTabla[i].precioI / 1000) * (this.datosTabla[i].und / (this.datosTabla[i].aprob / 100)))
    }
  }

  sumaPesoTotal() {
    this.sumaTund = 0
    //realiza la suma para el peso TOTAL
    for (let i = 0; i < this.datosTabla.length; i++) {
      this.sumaTund += this.datosTabla[i].und
    }

  }


  //TE AVISA CUANDO SALES
  ngOnDestroy() {

  }

  ngOnInit() {
    console.log(this.saved);
    this.ingredientesAllService.getAllIngredientesIdName()
      .then((result) => {
        this.searchData = result.json()
        console.log('searchData', this.searchData);
        this.dataService = this.completerService.local(this.searchData, 'value', 'value');
        console.log('dataService', this.dataService);


      })


    //Recupera El numero de la Ruta activa en este caso el ID DEL ESCANDALLOS EN EL QUE NOS ENCONTRAMOS
    this.activatedRoute.params.subscribe((params) => {
      if (params.id != null) {
        this.idEscandallo = params.id
        console.log(params.id);
        console.log('Good job, Continue');
        this.escandallosAllService.getCabEscandallos(params.id).then((result) => {
          this.datosCabecera = result.json();
          console.log('este', this.datosCabecera);
        })
        this.escandallosAllService.getTableIngredientsEscandallos(params.id).then((result) => {
          this.datosTabla = result.json();
          console.log('este1', this.datosTabla);

          this.sumaCmpTotal()

          this.sumaPesoTotal()


        })
      } else {
        console.log('Something is wrong');
      }

    })


    //Prueba puntual para ver si funciona el cambio de pvp.
    // setTimeout(() => {
    //   this.datosCabecera.pvp = 14
    // }, 5000)

  }


  //INTRODUCIR LOS INGREDIENTES EN LA TABLA
  handleSubmit() {
    this.saved = false
    console.log('xxxxxxxxxxx',this.saved);
    console.log(this.searchData);
    console.log(this.searchArt);
    

    let arr = this.searchData.filter(data => {
      return data.value === this.searchArt    
    })
    
    let datos = {
      idEsc: this.datosCabecera.id,
      idIng: arr[0].id,
      und: this.und,
    }
    //LO nombramos aqui para que la tabla se actualice al momento y me muestre el ingrediente introducido sin necesidad de refrescar.
    this.escandallosAllService.createRelacionEscIng(datos).then(() => {
      this.escandallosAllService.getTableIngredientsEscandallos(this.idEscandallo).then((result) => {
        this.datosTabla = result.json();
        console.log('este1', this.datosTabla);
        this.sumaCmpTotal()
        this.sumaPesoTotal()
      })

    })



  }

  //DELETE LOS INGREDIENTES EN LA TABLA
  onClickDeleteIng(ingT) {
    this.saved = false
    console.log(this.saved);

    this.escandallosAllService.deletIngTabla(ingT).then(() => {
      this.escandallosAllService.getTableIngredientsEscandallos(this.idEscandallo).then((result) => {
        this.datosTabla = result.json();
        console.log('este1', this.datosTabla);
        this.sumaCmpTotal()
        this.sumaPesoTotal()

      })
    })

  }


  //Introduce el pvp a la base de datos 
  onClickMe() {
    this.saved = true
    let datos = {
      id: this.idEscandallo,
      pvp: this.datosCabecera.pvp,
      cosT: this.sumaCmpT
    }
    this.escandallosAllService.upgradePvpEscandallos(datos).then((result) => {
      console.log(result.json());
      this.router.navigate(['/main', 'escandallos-list'])
    })
  }








}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EscandallosAllService } from '../escandallos-all.service';
import { CompleterService, CompleterData } from 'ng2-completer';
import { SideBarColorsService } from '../side-bar-colors.service';



@Component({
  selector: 'app-escandallo',
  templateUrl: './escandallo.component.html',
  styleUrls: ['./escandallo.component.scss'],
  providers: [EscandallosAllService]

})
export class EscandalloComponent implements OnInit {

  form: FormGroup
  idUser: number
  tag: string
  //Rellenar este array con los tags de la base de datos para mostrarlos de nuevo
  allTags: Array<string>


  cabecera: any
  escId: any

  protected searchData: any
  protected dataService: CompleterData
  protected searchCat: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private escandallosAllService: EscandallosAllService,
    private router: Router,
    private completerService: CompleterService,
    private sideBarColorsService: SideBarColorsService, ) {
      this.sideBarColorsService.setActiveSection('escandallos')
     }

  ngOnInit() {
    this.allTags = []
    //recupero del locarStorage el idUser y los transformo a numero
    this.idUser=JSON.parse(localStorage.getItem('idUser'))


    //ESTO RELACIONADO CON EL COMPLETER SERVICE
    //Recupero todas las categorias y las almacenamos en una variables
    this.escandallosAllService.getAllCatEscandallos(this.idUser).then((result) => {
      this.searchData = result.json()
      console.log('searchData', this.searchData);
      //definimos los datos que van a ir dentro del completer
      this.dataService = this.completerService.local(this.searchData, 'nombre', 'nombre');
      console.log('dataService', this.dataService);
    })


    this.form = new FormGroup({
      code: new FormControl('', [
        Validators.required,
      ]),
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      nServ: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    })

    //A traves del activateRouter estraemos el id y luego requerimos el elemento que queremos
    this.activatedRoute.params.subscribe((params) => {
      this.escId = params.id
      if (params.id != null) {

        //------------------------------RECUPERAMOS TODAS LAS TAGS
        this.escandallosAllService.getAllTagsEsc(params.id).then((result)=>{
         //HACEMOS UN ForEach para iterar el objeto result.json(), estraemos el contenido que queremos y se lo metemos al array
          result.json().forEach(tags => {
           this.allTags.push(tags.name)

          });
        //-----------------------------------

        })
        console.log(params.id);
        console.log('edit');
        this.escandallosAllService.getCabEscandallos(params.id).then((result) => {
          this.cabecera = result.json();
          console.log(this.cabecera);

          this.form.controls.code.setValue(this.cabecera.code)
          this.form.controls.nombre.setValue(this.cabecera.nombre)
          this.form.controls.nServ.setValue(this.cabecera.nServ)

          //Modificamos la variable que tenemos enlazada a traves de ngModel con el campo de categoria.
          this.searchCat = this.cabecera.categoria
          

        })

      } else {
        console.log('new');
      }

    })


  }

  handleSubmit(cat) {

    if (this.escId != undefined) {
      cat.id = this.escId
       console.log('DADADADAA',this.searchCat);
      cat.categoria = this.searchCat
      cat.tags = this.allTags //le paso todas las tags existentes y añadidas
      console.log(cat);
      this.escandallosAllService.updateCabEscandallos(cat)
        .then((result) => {
          this.router.navigate(['/main', 'escandallo', 'new', 'table', this.escId])
        })
    } else {
      cat.categoria = this.searchCat
      cat.idUser = this.idUser
      cat.tags = this.allTags
      this.escandallosAllService.createCabEscandallos(cat)
        .then((result) => {
          console.log('xx', result.json());
          console.log(result.json().res.insertId);
          this.router.navigate(['/main', 'escandallo', 'new', 'table', result.json().res.insertId])
        })
    }
  }
  
  //el $event me permite prevenir la funcion de default del boton
  tagSubmit($event){
    $event.preventDefault()
    console.log(this.tag);
    this.allTags.push(this.tag)
    console.log(this.allTags);
    

    
    
  }
}

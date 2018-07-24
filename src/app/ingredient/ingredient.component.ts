import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngredientesAllService } from '../ingredientes-all.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CompleterService, CompleterData } from 'ng2-completer';
import { SideBarColorsService } from '../side-bar-colors.service';



@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
  providers: [IngredientesAllService]

})
export class IngredientComponent implements OnInit {

  form: FormGroup
  idUser: number

  ingId: any
  ingrediente: any



  protected searchData: any
  protected dataService: CompleterData
  protected searchCat: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private ingredientesAll: IngredientesAllService,
    private router: Router,
    private completerService: CompleterService, 
    private sideBarColorsService: SideBarColorsService,){ 
      
      this.sideBarColorsService.setActiveSection('ingredientes')
 
    }

  ngOnInit() {
    //recupero del LocalStorage el idUser
    this.idUser=JSON.parse(localStorage.getItem('idUser'))
    

    //ESTO RELACIONADO CON EL COMPLETER SERVICE
    //Recupero todas las categorias y las almacenamos en una variables
    this.ingredientesAll.getAllCatIngredientes(this.idUser).then((result) => {
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
      ]),
      aprob: new FormControl('', [
        Validators.required,
      ]),
      uInv: new FormControl('', [
        Validators.required,

      ]),
      precioI: new FormControl('', [
        Validators.required,

      ]),
      uFabr: new FormControl('', [
        Validators.required,

      ]),
      costeF: new FormControl('', [
        Validators.required,

      ]),

    })

    this.activatedRoute.params.subscribe((params) => {
      this.ingId = params.id
      if (params.id != null) {
        console.log('edit');
        this.ingredientesAll.getIngredientes(params.id).then((result) => {
          this.ingrediente = result.json();
          console.log(this.ingrediente);

          this.form.controls.code.setValue(this.ingrediente.code)
          this.form.controls.nombre.setValue(this.ingrediente.nombre)
          this.form.controls.aprob.setValue(this.ingrediente.aprob)
          this.form.controls.uInv.setValue(this.ingrediente.uInv)
          this.form.controls.precioI.setValue(this.ingrediente.precioI)
          this.form.controls.uFabr.setValue(this.ingrediente.uFabr)
          this.form.controls.costeF.setValue(this.ingrediente.costeF)

          //Modificamos la variable que tenemos enlazada a traves de ngModel con el campo de categoria.
          this.searchCat = this.ingrediente.categoria

        })

      } else {
        console.log('new');
      }

    })





  }

  handleSubmit(ing) {
    console.log('ing', ing);
    console.log('formValue', this.form.value);
    console.log('xxx', this.ingId);
    //Defino dos acciones. una para crear y otra para modificar.
    if (this.ingId != undefined) {
      //le añado la propiedad id al objeto ing 
      ing.id = this.ingId
      ing.categoria = this.searchCat
      console.log('actualizando');
      this.ingredientesAll.updateIngrediente(ing)
        .then((result) => {
          console.log(result.json());
          this.router.navigate(['/main', 'ingredients-list'])
        })
    } else {
      ing.categoria = this.searchCat
      ing.idUser = this.idUser
      console.log('creando',ing);
      this.ingredientesAll.createIngrediente(ing)
        .then((result) => {
          console.log(result.json());
          this.router.navigate(['/main', 'ingredients-list'])
        })
    }
    // //Para filtrar el nombre del elemento que hemos seleccionado. coje el elemento cuyo nombre sea igual a this.searchCat
    // let arr = this.searchData.filter(data => {
    //   return data.nombre === this.searchCat
    // })
    // console.log('ZZZZ',arr);
    // console.log('UUUUUU',this.searchCat);
    
  }




}

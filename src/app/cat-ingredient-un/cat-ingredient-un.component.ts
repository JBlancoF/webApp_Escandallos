import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngredientesAllService } from '../ingredientes-all.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SideBarColorsService } from '../side-bar-colors.service';


@Component({
  selector: 'app-cat-ingredient-un',
  templateUrl: './cat-ingredient-un.component.html',
  styleUrls: ['./cat-ingredient-un.component.scss'],
  providers: [IngredientesAllService]
})
export class CatIngredientUnComponent implements OnInit {

  form: FormGroup
  idUser: number


  categoria: any
  catIngId: any

  constructor(private activatedRoute: ActivatedRoute, 
    private ingredientesAll: IngredientesAllService, 
    private router: Router,
    private sideBarColorsService: SideBarColorsService) { 
      this.sideBarColorsService.setActiveSection('catIng')
    }

  ngOnInit() {
    this.idUser=JSON.parse(localStorage.getItem('idUser'))


    this.form = new FormGroup({
      tipo: new FormControl('', [
        Validators.required,
      ]),
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      img: new FormControl('', ),
    })

    //A traves del activateRouter estraemos el id y luego requerimos el elemento que queremos
    this.activatedRoute.params.subscribe((params) => {
      this.catIngId = params.id
      if (params.id != null) {
        console.log(params.id);
        console.log('edit');
        this.ingredientesAll.getCatIngredientes(params.id).then((result) => {
          this.categoria = result.json();
          console.log(this.categoria);

          this.form.controls.nombre.setValue(this.categoria.nombre)
          this.form.controls.tipo.setValue(this.categoria.tipo)
          // this.form.controls.nombre.markAsTouched()
          // this.form.controls.nombre.markAsPristine()
          // this.form.controls.nombre.markAsVa
        })

      } else {
        console.log('new');
      }
    })



  }

  handleSubmit(cat) {
    console.log('xxxxxxxxxx',cat);
    if (this.catIngId != undefined) {
      cat.id = this.catIngId
      this.ingredientesAll.updateCatIngrediente(cat).then((result) => {
        console.log(result.json());
        this.router.navigate(['/main', 'ingredients', 'category'])
      })
    } else {
      console.log(this.form.value);
      cat.idUser = this.idUser
      this.ingredientesAll.createCatIngredientes(cat)
        .then((result) => {
          console.log(result.json());
          this.router.navigate(['/main', 'ingredients', 'category'])
        })
    }

  }


}

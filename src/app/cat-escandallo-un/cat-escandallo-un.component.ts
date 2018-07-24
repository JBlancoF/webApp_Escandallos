import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EscandallosAllService } from '../escandallos-all.service';
import { SideBarColorsService } from '../side-bar-colors.service';


@Component({
  selector: 'app-cat-escandallo-un',
  templateUrl: './cat-escandallo-un.component.html',
  styleUrls: ['./cat-escandallo-un.component.scss'],
  providers: [EscandallosAllService]

})
export class CatEscandalloUnComponent implements OnInit {

  form: FormGroup
  idUser: number


  categoria: any
  catEscId: any

  constructor(private escandallosAllService: EscandallosAllService,
     private activatedRoute: ActivatedRoute, 
     private router: Router,
     private sideBarColorsService: SideBarColorsService,) {
      this.sideBarColorsService.setActiveSection('catEsc')

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
      this.catEscId = params.id
      if (params.id != null) {
        console.log(params.id);
        console.log('edit');
        this.escandallosAllService.getCatEscandallos(params.id).then((result) => {
          this.categoria = result.json();
          console.log('xxx', this.categoria);

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
    if (this.catEscId != undefined) {
      cat.id = this.catEscId
      console.log('edit');
      this.escandallosAllService.updateCatEscandallos(cat)
      .then((result)=>{
        this.router.navigate(['/main', 'escandallos', 'category'])
      })

    } else {
      console.log('new');
      cat.idUser = this.idUser
      this.escandallosAllService.createCatEscandallos(cat)
        .then((result) => {
          console.log(result.json());
          this.router.navigate(['/main', 'escandallos', 'category'])
        })
    }


  }


}

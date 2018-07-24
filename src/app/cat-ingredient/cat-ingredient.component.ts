import { Component, OnInit } from '@angular/core';
import { IngredientesAllService } from '../ingredientes-all.service';
import { SideBarColorsService } from '../side-bar-colors.service';

@Component({
  selector: 'cat-ingredient',
  templateUrl: './cat-ingredient.component.html',
  styleUrls: ['./cat-ingredient.component.scss'],
  providers: [IngredientesAllService]

})
export class CatIngredientComponent implements OnInit {

  listaCatIngredientes: any
  idUser: number


  constructor(private ingredientesAllService: IngredientesAllService,private sideBarColorsService: SideBarColorsService) {
    this.sideBarColorsService.setActiveSection('catIng')
   }

  //realizamos una funcion para no repetir codigo ya que lo tenemos que utilizar dos veces.
  getAllCatIngr(){
    this.ingredientesAllService.getAllCatIngredientes(this.idUser)
    .then((result)=> {
      this.listaCatIngredientes = result.json()
      console.log('xxx',this.listaCatIngredientes);
    })
  }

  ngOnInit() {
    this.idUser=JSON.parse(localStorage.getItem('idUser'))

    this.getAllCatIngr()

  }

  handleSubmit(catIng){
    console.log(catIng);
    this.ingredientesAllService.deleteCatIngrediente(catIng).then(() => {
      this.getAllCatIngr()
    })
  }


}

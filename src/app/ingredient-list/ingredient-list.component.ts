import { Component, OnInit } from '@angular/core';
import { IngredientesAllService } from '../ingredientes-all.service';
import { SideBarColorsService } from '../side-bar-colors.service';

@Component({
  selector: 'ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss'],
  providers: [IngredientesAllService]

})
export class IngredientListComponent implements OnInit {

  listaIngredientes: any
  idUser: number


  constructor(private ingredientesAllService: IngredientesAllService, private sideBarColorsService: SideBarColorsService) {
    //llamamos al metodo dentro del servicio SideBarColorSection
    this.sideBarColorsService.setActiveSection('ingredientes')
    
   }

  getAllIngr(){
    this.ingredientesAllService.getAllIngredientes(this.idUser)
    .then((result)=> {
      this.listaIngredientes = result.json()
      console.log(this.listaIngredientes); 
    })

  }

  ngOnInit() {
    this.idUser=JSON.parse(localStorage.getItem('idUser'))


    this.getAllIngr()

  }

  handleSubmit(ing){
    console.log(ing);
    this.ingredientesAllService.deleteIngrediente(ing).then(() => {
      this.getAllIngr()
    })
  }

}

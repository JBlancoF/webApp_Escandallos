import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'
import { HttpClient } from "@angular/common/http"


@Injectable()
export class IngredientesAllService {

  constructor(private http: Http) { }

  //Conecta con el back para recuperar los datos de TODOS LOS INGREDIENTES a traves de la url
  getAllIngredientes(idUser) {
    return this.http.get(`http://localhost:3000/api/ingredientes/show/user/${idUser}`)
      .toPromise()
  }

  //Conecta con el back para recuperar los datos de TODOS LOS INGREDIENTES con su id y nombre a traves de la url
  getAllIngredientesIdName() {
    return this.http.get('http://localhost:3000/api/ingredientesIdName/show')
      .toPromise()
  }


  //Conecta con el back para recuperar los datos de UN INGREDIENTE determinado por el parametro id 
  getIngredientes(id) {
    return this.http.get(`http://localhost:3000/api/ingrediente/show/${id}`)
      .toPromise()
  }


  //Conecta con el back para recuperar los datos de TODAS LAS CATEGORIAS de ingredientes a traves de la url
  getAllCatIngredientes(idUser) {
    return this.http.get(`http://localhost:3000/api/catIngredientes/show/user/${idUser}`)
      .toPromise()
  }

  //Conecta con el back para recuperar los datos de UNA CATEGORIA de ingredientes determinado por el parametro id 
  getCatIngredientes(id) {
    console.log(id);
    return this.http.get(`http://localhost:3000/api/catIngredientes/show/${id}`)
      .toPromise()
  }






  //Crear una nueva categoria de ingredientes y mandarla a la base de datos
  createCatIngredientes(catIng) {
    console.log(catIng);
    return this.http.post('http://localhost:3000/api/categoriaIngr/create', {
      idUser: catIng.idUser,
      tipo: catIng.tipo,
      nombre: catIng.nombre,
      img: catIng.img,
    })
      .toPromise()
  }

  //Crear un nuevo  ingrediente y mandarla a la base de datos
  createIngrediente(ing) {
    console.log(ing);
    return this.http.post('http://localhost:3000/api/ingrediente/create', {
      code: ing.code,
      idUser: ing.idUser,
      nombre: ing.nombre,
      categoria: ing.categoria,
      aprob: ing.aprob,
      uInv: ing.uInv,
      precioI: ing.precioI,
      uFabr: ing.uFabr,
      costeF: ing.costeF,
    })
      .toPromise()

  }

  updateIngrediente(ing) {
    console.log(ing);
    return this.http.post('http://localhost:3000/api/ingrediente/update', {
      id: ing.id,
      code: ing.code,
      nombre: ing.nombre,
      categoria: ing.categoria,
      aprob: ing.aprob,
      uInv: ing.uInv,
      precioI: ing.precioI,
      uFabr: ing.uFabr,
      costeF: ing.costeF,
    })
      .toPromise()

  }

  updateCatIngrediente(catIng) {
    console.log('SERVICIO', catIng);
    return this.http.post('http://localhost:3000/api/catIngrediente/update', {
      id: catIng.id,
      tipo: catIng.tipo,
      nombre: catIng.nombre,
      img: catIng.img,
    })
      .toPromise()

  }


  deleteIngrediente(ing) {
    console.log(ing);
    return this.http.post('http://localhost:3000/api/ingrediente/delete', {
      id: ing.id,
    })
      .toPromise()

  }

  deleteCatIngrediente(ing) {
    console.log(ing);
    return this.http.post('http://localhost:3000/api/catIngrediente/delete', {
      id: ing.id,
    })
      .toPromise()

  }


}




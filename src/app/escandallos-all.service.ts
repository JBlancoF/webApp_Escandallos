import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'
import { HttpClient } from "@angular/common/http"
import "rxjs/add/operator/map"
import { Escandallo } from './Model/escandallos.model';


@Injectable()
export class EscandallosAllService {

  constructor(private http: Http) { }

  //Conecta con el back para recuperar los datos a traves de la url
  getAllEscandallos(idUser) {
    return this.http.get(`http://localhost:3000/api/escandallos/show/${idUser}`)
      .map((res) => {
        return res.json()
      })
      .map((items) => {
        let arr = []
        items.forEach(item => {
          arr.push(new Escandallo(item.id, item.idUser, item.code, item.nombre, item.categoria, item.nServ, item.cosT, item.pvp))
        });
        return arr
      })
      .toPromise()
  }

  //Conecta con el back para recuperar los datos de TODAS LAS CATEGORIAS de escandallos a traves de la url
  getAllCatEscandallos(idUser) {
    return this.http.get(`http://localhost:3000/api/catEscandallos/show/user/${idUser}`)
      .toPromise()
  }

  //Conecta con el back para recuperar los datos de UNA CATEGORIA de ESCANDALLOS determinado por el parametro id 
  getCatEscandallos(id) {
    console.log(id);
    return this.http.get(`http://localhost:3000/api/catEscandallos/show/${id}`)
      .toPromise()
  }

  //Conecta con el back para recuperar los datos de UNA CATEGORIA de ingredientes determinado por el parametro id 
  getCabEscandallos(id) {
    console.log(id);
    return this.http.get(`http://localhost:3000/api/cabEscandallos/show/${id}`)
      .toPromise()
  }

  getTableIngredientsEscandallos(id) {
    console.log(id);
    return this.http.get(`http://localhost:3000/api/ingredientesTabla/show/${id}`)
      .toPromise()
  }

  getAllTagsEsc(idEsc) {
    console.log(idEsc);
    return this.http.get(`http://localhost:3000/api/tagsEscandallos/show/${idEsc}`)
      .toPromise()
  }











  //Crear una NUEVA CATEGORIA DE INGREDIENTES y mandarla a la base de datos
  createCatEscandallos(catEscan) {
    console.log('catEscan',catEscan);
    return this.http.post('http://localhost:3000/api/categoriaEscandallos/create', {
      idUser:catEscan.idUser,
      tipo: catEscan.tipo,
      nombre: catEscan.nombre,
      img: catEscan.img,
    })
      .toPromise()
  }

  //Crear una nueva CABECERA DE ESCANDALLOS y mandarla a la base de datos
  createCabEscandallos(cabEsc) {
    console.log(cabEsc);
    return this.http.post('http://localhost:3000/api/cabeceraEscandallos/create', {
      code: cabEsc.code,
      idUser: cabEsc.idUser,
      nombre: cabEsc.nombre,
      categoria: cabEsc.categoria,
      nServ: cabEsc.nServ,
      tags: cabEsc.tags,
    })
      .toPromise()
  }


  //Crear una nueva RELACION ESCANDALLOS-INGREDIENTES-UND y mandarla a la base de datos
  createRelacionEscIng(rel) {
    console.log(rel);
    return this.http.post('http://localhost:3000/api/relacionEscIngUndTabla/create', {
      idEsc: rel.idEsc,
      idIng: rel.idIng,
      und: rel.und,
    })
      .toPromise()
  }

  //DELETE una  RELACION ESCANDALLOS-INGREDIENTES-UND de la base de tados
  deletIngTabla(rel) {
    console.log(rel);
    return this.http.post('http://localhost:3000/api/tablaIngr/delete', {
      idx: rel.idx,
    })
      .toPromise()
  }


  //Actualizar el pvp del escandallo y mandarlo a la base de datos
  upgradePvpEscandallos(rel) {
    return this.http.post('http://localhost:3000/api/pvpUpdate/update', {
      id: rel.id,
      pvp: rel.pvp,
      cosT: rel.cosT
    })
      .toPromise()
  }

  updateCatEscandallos(catEsc) {
    return this.http.post('http://localhost:3000/api/catEscandallos/update', {
      id: catEsc.id,
      tipo: catEsc.tipo,
      nombre: catEsc.nombre,
      img: catEsc.img,
    })
      .toPromise()
  }

  updateCabEscandallos(cabEsc) {
    return this.http.post('http://localhost:3000/api/cabEscandallo/update', {
      id: cabEsc.id,
      code: cabEsc.code,
      nombre: cabEsc.nombre,
      categoria: cabEsc.categoria,
      nServ: cabEsc.nServ,
      idEsc: cabEsc.idEsc,
      tags: cabEsc.tags,
    })
      .toPromise()
  }

  deleteCatEscandallos(idEsc) {
    return this.http.post('http://localhost:3000/api/catEscandallos/delete', {
      id: idEsc.id
    })
      .toPromise()
  }

  deleteEscandallos(idEsc) {
    return this.http.post('http://localhost:3000/api/escandallo/delete', {
      id: idEsc.id
    })
    .toPromise()
  }

}

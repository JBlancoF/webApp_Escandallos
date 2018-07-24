import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'
import { HttpClient} from "@angular/common/http"
import { EmailValidator } from '@angular/forms';

@Injectable()
export class SignInUsersService {

  constructor(private http: Http) { }


  //Crea un nuevo usuario y lo manda a la base de datos 
  createUser(persona){
    console.log(persona);
    return this.http.post('http://localhost:3000/api/users/create', {
      first_name: persona.nombre,
      last_name: persona.apellidos,
      date_of_birth: persona.fechaNacimiento,
      email: persona.email,
      password: persona.password,
    })
    .toPromise()
  } 
  
  verifyUser(userSignIn){
    console.log(userSignIn);
    return this.http.post('http://localhost:3000/api/verification/user', {
      email: userSignIn.email,
      password: userSignIn.password,
    })
    .toPromise()
  } 


}

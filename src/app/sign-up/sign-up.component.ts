import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignInUsersService } from '../sign-in-users.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers:[SignInUsersService]

})
export class SignUpComponent implements OnInit {

  form: FormGroup
  error: string

  constructor(private signInUsers: SignInUsersService,private router: Router) { }

  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
      ]),
    })

  }

  handleSubmit(user){
    console.log('xxxxx',user);
    console.log(this.form.value);
    this.signInUsers.verifyUser(user)
    .then((result)=> {
      let json = result.json()
      console.log(json);
        if(json.err){
          this.error = json.err
        }else{
          //Almacenamos el id del usuario una vez que verificamos en el LocalStorege
          localStorage.setItem('idUser', JSON.stringify(result.json().user.id))
          this.router.navigate(['/main','escandallos-list'])
        }
    })
  }

  


}

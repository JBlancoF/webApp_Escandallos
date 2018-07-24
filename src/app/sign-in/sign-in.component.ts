import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignInUsersService } from '../sign-in-users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [SignInUsersService]
})
export class SignInComponent implements OnInit {

  form: FormGroup
  error: any

  constructor(private signInUsers: SignInUsersService, private router: Router, ) { }

  ngOnInit() {

    this.form = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      fechaNacimiento: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        // Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)
      ]),

    })

  }

  handleSubmit(persona) {
    console.log('xxxxx', persona);
    console.log(this.form.value);
    this.signInUsers.createUser(persona)
      .then((result) => {
        let json = result.json()
        if (json.err) {
          this.error = json.err
        } else {
          console.log(result.json());
          this.router.navigate(['/signIn'])
        }
      })
  }

}

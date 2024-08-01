import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup
  validation_messages = {
    email: [
      {type: "required", message: "El email es obligatorio."},
      {type: "email", message: "El email es inválido."}
    ]
  }

  constructor(
    private formBuilder:FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      )
    })
  }

  ngOnInit() {
  }

  loginUser(datalogin:any) {
    console.log(datalogin)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  errorMessage: any
  registerForm: FormGroup
  
  validation_messages = {
    name: [
      { type: "required", message: "El nombre es obligatorio." }
    ],
    last_name: [
      { type: "required", message: "El apellido es obligatorio." }
    ],
    email: [
      { type: "required", message: "El email es obligatorio." },
      { type: "email", message: "El email es inválido." }
    ],
    password: [
      { type: "required", message: "La contraseña es obligatoria." },
      { type: "minlength", message: "La contraseña es muy corta." },
    ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.registerForm = this.formBuilder.group({
      
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
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

  registerUser(datalogin: any) {
    console.log(datalogin)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenicateService } from '../services/authenicate.service';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  errorMessage: any
  loginForm: FormGroup

  validation_messages = {
    email: [
      { type: "required", message: "El email es obligatorio." },
      { type: "email", message: "El email es inválido." }
    ],
    password: [
      { type: "required", message: "La contraseña es obligatoria." },
    ]
  }

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthenicateService, 
    private navCtrl: NavController,
    private alertController: AlertController,
    private storage: Storage
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
          Validators.required
        ])
      )
    });
  }

  ngOnInit() { }

  login(datalogin: any) {
    console.log(datalogin)
    this.authService.loginUser(datalogin).then(res => {
      this.errorMessage=""
      this.storage.set("isuserLoggedIn",true)
      this.navCtrl.navigateForward("/home")
    }).catch(err => {
      this.errorMessage = err
      this.presentAlert(this.errorMessage)
    })
  }

  async presentAlert(mss: string) {
    const alert = await this.alertController.create({
      header: "Error al Ingresar",
      message: mss,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}

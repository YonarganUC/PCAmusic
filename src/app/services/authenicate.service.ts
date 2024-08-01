import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenicateService {

  constructor(
    private storage: Storage
  ) { }

  loginUser(credentials: any) {
    return new Promise((accept, reject) => {
      if(
        credentials.email == "loganyoshua@gmail.com" &&
        credentials.password == "123456789"
      ) {
        accept("Login Correcto")
      } else  {
        reject("login Incorrecto")
      }
    })
  }

  registerUser(registerData: any) {
    registerData.password = btoa(registerData.password)
    return this.storage.set("user",registerData)
  }
}

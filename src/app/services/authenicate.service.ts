import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenicateService {

  constructor() { }
  loginUser(credentials: any) {
    return new Promise((accept, reject) => {
      if(
        credentials.email == "loganyoshua@gmail.com"
      ) {
        accept("Login Correcto")
      } else  {
        reject("login Incorrecto")
      }
    })
  }
}

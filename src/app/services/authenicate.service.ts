import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenicateService {

  constructor() { }
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
}

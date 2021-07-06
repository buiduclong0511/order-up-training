import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login() {
    window.localStorage.setItem("isLogin", JSON.stringify(true));
  }
}

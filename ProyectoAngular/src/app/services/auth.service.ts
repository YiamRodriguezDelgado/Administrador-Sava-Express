import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:4000';

  constructor(
    private http: HttpClient,
    private JwtHelper: JwtHelperService
  ) { }

  signin(user: any) {
    return this.http.post(`${this.URL}/users/userConfirmation`, user, {withCredentials: true});
  }

  create(client: any) {
    return this.http.post(`${this.URL}/users/client`, client);
  }

  isExpired() {
    const token = localStorage.getItem("token");
    if(this.JwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }

    return true;
  }

}

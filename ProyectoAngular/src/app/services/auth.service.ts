import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject ,Subject,Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:4000';
  private isUserLoggedIn = false;
  private subject = new Subject<boolean>();
  private observable = this.subject.asObservable();
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    this.isUserLoggedIn=this.checkLoginStatus();
   }

  signIn(user: any) {
    return this.http.post<any>(`${this.url}/users/userConfirmation`, user, ).pipe(
      map(result=>{
        if(result && result.token!="error"){
          localStorage.setItem('token', result.token);
          localStorage.setItem('loginStatus', '1');
          this.isUserLoggedIn = true;
          this.subject.next(this.isUserLoggedIn);
        }
        return result;
      })
    );
  }

  create(client: any) {
    return this.http.post(`${this.url}/users/client`, client);
  }

  isExpired() {
    const token = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('loginStatus');
    this.router.navigate(['/inicio']);
    this.isUserLoggedIn = false;
    this.subject.next(this.isUserLoggedIn);
  }

  checkLoginStatus(): boolean {
        const loginCookie = localStorage.getItem('loginStatus');
        if(loginCookie === '1'){
            if(localStorage.getItem('token') === null || localStorage.getItem('token') === undefined){
                return false;
            }
            const token = localStorage.getItem('token');
            const decoded: any = jwt_decode(token);
            if(decoded.exp === undefined){
                return false;
            }
            return true;
        }
        return false;
  }

  public isLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }
  
  public isLoggedInObservable(): Observable<boolean> {
    return this.observable;
  }


}

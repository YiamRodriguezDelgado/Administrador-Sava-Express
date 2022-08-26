import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminDataService {
  private url = 'http://localhost:4000';
  constructor(private _http: HttpClient) { }
  searchUsers(){
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this._http.get<any[]>(this.url+"/users/",{headers})
  }

  createUsers(body: any){
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    if(body.get("role")=="administrador"){
      return this._http.post<any>(`${this.url}/users/admin`, body,{headers});
    }else{
      return this._http.post<any>(`${this.url}/users/client`, body,{headers});
    }
  }
  deleteUsers(body:any){
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this._http.delete<any>(`${this.url}/users/`, {body,headers});
  }
  obtainClients(){
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this._http.get(`${this.url}/dashboard/clients`,{headers})
  }
  obtainPackages(){
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this._http.get(`${this.url}/dashboard/packages/delivered`,{headers})
  }
  obtainStadistics(){
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this._http.get(`${this.url}/dashboard/packages/total`,{headers})
  }
}

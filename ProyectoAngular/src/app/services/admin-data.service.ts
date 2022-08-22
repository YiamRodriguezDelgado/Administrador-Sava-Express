import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminDataService {
  private url = 'http://localhost:4000';
  constructor(private _http: HttpClient) { }
  searchUsers(){
    //const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this._http.get<any[]>(this.url+"/users/",)
  }

  createUsers(body: any){
    //const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    if(body.get("role")=="administrador"){
      console.log("administrador")
      return this._http.post<any>(`${this.url}/users/admin`, body);
    }else{
      console.log("no administrador")
      return this._http.post<any>(`${this.url}/users/client`, body);
    }
  }
  deleteUsers(body:any){
    return this._http.delete<any>(`${this.url}/users/`, {body});
  }
  obtainClients(){
    return this._http.get(`${this.url}/dashboard/clients`)
  }
  obtainPackages(){
    return this._http.get(`${this.url}/dashboard/packages/delivered`)
  }
  obtainStadistics(){
    return this._http.get(`${this.url}/dashboard/packages/total`)
  }
}

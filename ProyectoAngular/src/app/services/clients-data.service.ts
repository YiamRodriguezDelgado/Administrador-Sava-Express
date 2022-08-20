import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from '../models/package';
import { User } from '../models/users';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientsDataService {
  private url = 'http://localhost:4000';
  constructor(private _http: HttpClient) { }
  searchPackages(){
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this._http.get<any[]>(this.url+"/api/warehouse-packages/User", {withCredentials: true,headers})
  }
  createSavaPackage(warehousePackage){
    const body ={packages:warehousePackage};
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this._http.post<any>(this.url+"/api/warehouse/sava",body,{withCredentials: true,headers})
  }

  getClientsData(): Observable<Array<User>>{
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    const apiUrl = `${this.url}/users/`
    return this._http.get<Array<User>>(apiUrl, {withCredentials: true, headers})
  }

  searchSavaPackages(){
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this._http.get<any[]>(this.url+"/savaPackage/", {withCredentials: true,headers})
  }
}

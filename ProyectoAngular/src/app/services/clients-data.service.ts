import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from '../models/package';
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
    console.log(warehousePackage)
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this._http.post<any>(this.url+"/api/warehouse/sava",body,{withCredentials: true,headers})
  }
}

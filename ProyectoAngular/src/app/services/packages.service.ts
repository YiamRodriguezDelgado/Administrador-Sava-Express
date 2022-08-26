import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WarehousePackage } from '../models/warehouse-package';
import { environment } from "src/environments/environment"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from '../models/package';


@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  private url = 'http://localhost:4000';
  constructor(
    private http: HttpClient,
  ) { }

  createWarehousePackage(warehouse_package: FormData): Observable<any> {
    const apiUrl = `${this.url}/api/warehouse-packages`
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this.http.post(apiUrl, warehouse_package,{headers})
  }

  getWarehousePackageList(filters: string = ""): Observable<Array<WarehousePackage>> {
    const apiUrl = `${this.url}/api/warehouse-packages${filters}`
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this.http.get<Array<WarehousePackage>>(apiUrl,{headers})
  }

  getSavaPackageList(): Observable<Array<Package>> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    const apiUrl = `${this.url}/savaPackage/all`
    return this.http.get<Array<Package>>(apiUrl,{headers})
  }

  updateWarehousePackage(warehouse_package: WarehousePackage): Observable<any> {
    const apiUrl = `${this.url}/warehouse_packages${warehouse_package.id}`
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this.http.put(apiUrl, warehouse_package,{headers})
  }

  updateSavaPackage(sava_package: Package): Observable<any> {
    const apiUrl = `${this.url}/savaPackage/edit`
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this.http.put(apiUrl, sava_package,{headers})
  }

  deleteWarehousePackage(id: string): Observable<any> {
    const apiUrl = `${this.url}/api/warehouse-packages/${id}`
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this.http.delete(apiUrl,{headers})
  }

  deleteSavaPackage(id: string): Observable<any> {
    const apiUrl = `${this.url}/savaPackage/${id}`
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem("token"));
    return this.http.delete(apiUrl,{headers})
  }


}

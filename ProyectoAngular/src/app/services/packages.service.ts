import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WarehousePackage } from '../models/warehouse-package';
import { environment } from "src/environments/environment"
import { HttpClient } from '@angular/common/http';
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
    return this.http.post(apiUrl, warehouse_package)
  }

  getWarehousePackageList(filters: string = ""): Observable<Array<WarehousePackage>> {
    const apiUrl = `${this.url}/api/warehouse-packages${filters}`
    return this.http.get<Array<WarehousePackage>>(apiUrl)
  }

  getSavaPackageList(): Observable<Array<Package>> {
    const apiUrl = `${this.url}/savaPackage/all`
    return this.http.get<Array<Package>>(apiUrl)
  }

  updateWarehousePackage(warehouse_package: WarehousePackage): Observable<any> {
    const apiUrl = `${this.url}/warehouse_packages${warehouse_package.id}`
    return this.http.put(apiUrl, warehouse_package)
  }

  updateSavaPackage(sava_package: Package): Observable<any> {
    const apiUrl = `${this.url}/savaPackage/newStatus${sava_package.id}`
    return this.http.put(apiUrl, sava_package)
  }

  deleteWarehousePackage(id: number): Observable<any> {
    const apiUrl = `${this.url}/warehouse_packages${id}`
    return this.http.delete(apiUrl)
  }
}

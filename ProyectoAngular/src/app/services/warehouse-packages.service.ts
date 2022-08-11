import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WarehousePackage } from '../models/warehouse-package';
import { environment } from "src/environments/environment"
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WarehousePackagesService {
  private url = 'http://localhost:4000';
  constructor(
    private http: HttpClient,
  ) { }

  createWarehousePackage(warehouse_package: WarehousePackage): Observable<any> {
    const apiUrl = `${this.url}/api/warehouse-packages/`
    return this.http.post(apiUrl, warehouse_package)
  }

  getWarehousePackageList(filters: string = ""): Observable<Array<WarehousePackage>> {
    const apiUrl = `${this.url}track-logs${filters}`
    return this.http.get<Array<WarehousePackage>>(apiUrl)
  }

  updateWarehousePackage(warehouse_package: WarehousePackage): Observable<any> {
    const apiUrl = `${this.url}warehouse_packages/${warehouse_package.id}`
    return this.http.put(apiUrl, warehouse_package)
  }

  deleteWarehousePackage(id: number): Observable<any> {
    const apiUrl = `${this.url}warehouse_packages/${id}`
    return this.http.delete(apiUrl)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from '../models/package';
@Injectable({
  providedIn: 'root'
})
export class ClientsDataService {
  constructor(private _http:HttpClient) { }
  SearchPackages(){
    let paquetes :Package[]=[{TrackingNumber:123,foto:"../../../assets/img/icons/common/package.jpg",precio:90,peso:"110.8",FechaLLegada:"Mañana"},{TrackingNumber:124,foto:"../../../assets/img/icons/common/package.jpg",precio:90,peso:"110.8",FechaLLegada:"Mañana"},{TrackingNumber:125,foto:"../../../assets/img/icons/common/package.jpg",precio:90,peso:"110.8",FechaLLegada:"Mañana"}]
    return paquetes;
  }
}

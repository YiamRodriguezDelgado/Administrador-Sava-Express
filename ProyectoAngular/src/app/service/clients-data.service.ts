import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from '../models/package';
@Injectable({
  providedIn: 'root'
})
export class ClientsDataService {
  constructor(private _http: HttpClient) { }
  searchPackages(){
    const paquetes: Package[]=[{trackingNumber:123,foto:"../../../assets/img/icons/common/package.jpg",precio:90,peso:'110.8',fechaLLegada:'Mañana'},
    {trackingNumber:124,foto:'url',precio:90,peso:"../../../assets/img/icons/common/package.jpg",fechaLLegada:'Mañana'},
    {trackingNumber:125,foto:'url',precio:90,peso:"../../../assets/img/icons/common/package.jpg",fechaLLegada:'Mañana'}];
    return paquetes;
  }
}

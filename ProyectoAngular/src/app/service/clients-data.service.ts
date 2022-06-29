import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from '../models/package';
@Injectable({
  providedIn: 'root'
})
export class ClientsDataService {
  constructor(private _http: HttpClient) { }
  searchPackages(){
    const paquetes: Package[]=[{trackingNumber:123,foto:'url',precio:90,peso:'110.8',fechaLLegada:'Mañana'},
    {trackingNumber:124,foto:'url',precio:90,peso:'110.8',fechaLLegada:'Mañana'},
    {trackingNumber:125,foto:'url',precio:90,peso:'110.8',fechaLLegada:'Mañana'}];
    return paquetes;
  }
}

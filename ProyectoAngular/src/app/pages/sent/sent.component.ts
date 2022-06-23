import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Package } from 'src/app/models/package';
import { ClientsDataService } from 'src/app/service/clients-data.service';
@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {
  paquetes: Package[];
  paquetesMostrar:Package[];
  selectedPackages = new FormControl('');
  TrackingNumbers: number[]=[];
  constructor(private _petitions :ClientsDataService) { }

  ngOnInit(): void {
    this.paquetes=this._petitions.SearchPackages();
    for(let pack of this.paquetes){
      console.log(pack.TrackingNumber);
      this.TrackingNumbers.push(pack.TrackingNumber);
    }
  }
  Enviar(){
    console.log(this.selectedPackages.value)
  }
  agregarPaquete(value) {
    this.paquetesMostrar=[];
    for(let posicion=0;posicion<this.paquetes.length;posicion++){
      let trackingNumber=this.paquetes[posicion].TrackingNumber;
      if(value.includes(trackingNumber)){
        this.paquetesMostrar.push(this.paquetes[posicion])
      }
    }
  }

}

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
  paquetesMostrar: Package[];
  selectedPackages = new FormControl('');
  trackingNumbers: number[]=[];
  constructor(private _petitions: ClientsDataService) { }

  ngOnInit(): void {
    this.paquetes=this._petitions.searchPackages();
    for(const pack of this.paquetes){
      console.log(pack.trackingNumber);
      this.trackingNumbers.push(pack.trackingNumber);
    }
  }
  enviar(){
    console.log(this.selectedPackages.value);
  }
  agregarPaquete(value) {
    this.paquetesMostrar=[];
    /* eslint-disable @typescript-eslint/prefer-for-of */
    for(let posicion=0;posicion<this.paquetes.length;posicion++){
      const trackingNumber=this.paquetes[posicion].trackingNumber;
      if(value.includes(trackingNumber)){
        this.paquetesMostrar.push(this.paquetes[posicion]);
      }
    }
  }

}

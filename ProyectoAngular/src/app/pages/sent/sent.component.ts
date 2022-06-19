import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Package } from 'src/app/models/package';
@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {
  paquetes: Package[]=[{TrackingNumber:123,foto:"url"},{TrackingNumber:124,foto:"url"},{TrackingNumber:125,foto:"url"}]
  paquetesMostrar:Package[];
  isCollapsedCyc: boolean[] = [false, true,false,false,false,false];
  selectedPackages = new FormControl('');
  toppingList: number[] = [123, 124, 125];
  constructor() { }

  ngOnInit(): void {
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

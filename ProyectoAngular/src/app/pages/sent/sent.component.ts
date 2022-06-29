import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Package } from 'src/app/models/package';
import { ClientsDataService } from 'src/app/service/clients-data.service';
import Swal from 'sweetalert2';
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
    if(this.selectedPackages.value.length>0){
      Swal.fire(
        "Paquetes",
        'Acabas de crear tu paquete Sava',
        'success'
      )
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Seleccione al menos un paquete',
      })
    }
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

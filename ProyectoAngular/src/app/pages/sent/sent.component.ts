import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Package } from 'src/app/models/package';
import { ClientsDataService } from 'src/app/services/clients-data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {
  paquetes: any[]=[];
  paquetesMostrar: any[]=[];
  selectedPackages = new FormControl('');
  trackingNumbers: number[]=[];
  constructor(private _petitions: ClientsDataService) { }
  ngOnInit(): void {
    this._petitions.searchPackages().subscribe((resp: any)=>{
      this.paquetes=resp
      for(const pack of this.paquetes){
        console.log(pack.trackingNumber);
        this.trackingNumbers.push(pack.tracking_number);
      }
    })
  }
  enviar(){
    console.log(this.selectedPackages.value)
    if(this.selectedPackages.value.length>0){
      this._petitions.createSavaPackage(this.selectedPackages.value).subscribe((savaPackage:any)=>{
          Swal.fire(
            "Paquetes",
            'Codigo de tu paquete Sava:'+savaPackage.sava_code,
            'success'
          ).then(function() {
            window.location.reload();
        });
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Seleccione al menos un paquete',
      })
    }

  }
  agregarPaquete(value) {
    this.paquetesMostrar=[];
    /* eslint-disable @typescript-eslint/prefer-for-of */
    for(let posicion=0;posicion<this.paquetes.length;posicion++){
      const trackingNumber=this.paquetes[posicion].tracking_number;
      if(value.includes(trackingNumber)){
        this.paquetesMostrar.push(this.paquetes[posicion]);
      }
    }
  }

}

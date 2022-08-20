import { Component, OnInit } from '@angular/core';
import { ClientsDataService } from 'src/app/services/clients-data.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-sava-package',
  templateUrl: './sava-package.component.html',
  styleUrls: ['./sava-package.component.scss']
})
export class SavaPackageComponent implements OnInit {
  userPackage: any[]=[];
  packagesToSend: any[] = [];
  isEmpty: boolean = true;
  price: number = 0.0;
  pounds: number = 0.0;
  constructor(private _petitions: ClientsDataService) { }

  ngOnInit(): void {
    this._petitions.searchPackages().subscribe((res: any)=>{
      if (res.length > 0) {
        this.isEmpty = false;
      }
      this.userPackage=res
    });
  }

  closeDetails(): void {
    let details = document.getElementById('package-details');
    details.style.display = 'none';
  }

  selectPackage(package_details, p: HTMLElement): void {
    let details = document.getElementById('package-details');
    details.style.display = 'flex';
    p.style.pointerEvents = 'none';

    let details_section = document.getElementById('sava-packages');

    let package_added = document.createElement('div');
    let package_title = document.createElement('h3');
    let package_cross = document.createElement('p');

    package_added.classList.add('sava-item');
    package_added.setAttribute('id', package_details.tracking_number);
    package_title.innerHTML = `Paquete ${package_details.id}`;
    package_cross.innerHTML = 'X'
    package_cross.addEventListener('click', () => {
      document.getElementById(package_details.tracking_number).remove();
      this.packagesToSend = _.without(this.packagesToSend, package_details.tracking_number);
      p.style.pointerEvents = 'auto';
      this.pounds -= parseInt(package_details.pounds);
      this.price -= parseInt(package_details.price);
    });
    package_added.appendChild(package_title);
    package_added.appendChild(package_cross);
    details_section.appendChild(package_added);

    this.pounds += parseInt(package_details.pounds);
    this.price += parseInt(package_details.price);
    this.packagesToSend.push(package_details.tracking_number);
  }

  sendPackage() {
    if (this.packagesToSend.length > 0){
      this._petitions.createSavaPackage(this.packagesToSend).subscribe((res: any) => {
        window.location.reload();
      });
    } else {
      window.alert("Tienes que seleccionar al menos un paquete para poder enviarlo");
    }
  }

}

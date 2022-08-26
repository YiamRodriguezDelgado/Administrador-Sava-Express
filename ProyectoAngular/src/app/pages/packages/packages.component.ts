import { Component, OnInit } from '@angular/core';
import { ClientsDataService } from 'src/app/services/clients-data.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  userPackage: any[]=[];
  isEmpty: boolean = true;
  images:any[]=[]
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

  showDetails(package_details): void {
    let details = document.getElementById('package-details');
    details.style.display = 'flex';

    let details_img = document.getElementById('details-img');
    details_img.style.display = 'none';

    let details_section = document.getElementById('package-details-box');
    details_section.getElementsByTagName('h1')[0].innerHTML = "Paquete " + package_details.id;
    details_section.getElementsByTagName('p')[0].innerHTML = package_details.tracking_number;
    details_section.getElementsByTagName('p')[2].innerHTML = package_details.pounds + "lb";
    details_section.getElementsByTagName('p')[3].innerHTML = "$" + package_details.price;
    details_section.getElementsByTagName('p')[4].innerHTML = package_details.arrival_date;
    details_section.style.display = 'block';

    this.images=[]
    for (let image of package_details.Images) {
      this.images.push(image)
    }

  }

}


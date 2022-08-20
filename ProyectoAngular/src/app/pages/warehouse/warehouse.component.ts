import { Component, OnInit } from '@angular/core';
import { ClientsDataService } from 'src/app/services/clients-data.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  userPackage: any[]=[];
  isEmpty: boolean = true;
  constructor(private _petitions: ClientsDataService) { }

  ngOnInit(): void {
    this._petitions.searchSavaPackages().subscribe((res: any)=>{
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
    details_section.getElementsByTagName('p')[0].innerHTML = package_details.sava_code;
    details_section.getElementsByTagName('p')[1].innerHTML = package_details.status;
    details_section.getElementsByTagName('p')[2].innerHTML = package_details.weight + "lb";
    details_section.getElementsByTagName('p')[3].innerHTML = "$" + package_details.price;
    details_section.getElementsByTagName('p')[4].innerHTML = package_details.arrival_date_destiny;
    details_section.style.display = 'block';

    let grid_images = document.getElementById('grid-images');
    grid_images.innerHTML = '';

    for (let sava_package of package_details.WarehousePackages){
      for (let image of sava_package.Images) {
        grid_images.innerHTML += `
                                    <img class="grid-image" src=${image.source} alt="image">
                                `
      }
    }
    

  }

}

import { Component, OnInit } from '@angular/core';
import { ClientsDataService } from 'src/app/service/clients-data.service';
import { Package } from 'src/app/models/package';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  userPackage: Package[];
  constructor(private _petitions: ClientsDataService) { }

  ngOnInit(): void {
    this.userPackage=this._petitions.searchPackages();
    console.log(this.userPackage);
  }
}

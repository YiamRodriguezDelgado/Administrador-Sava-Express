import { Component, OnInit } from '@angular/core';
import { ClientsDataService } from 'src/app/service/clients-data.service';
import { Package } from 'src/app/models/package';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  UserPackage:Package[];
  constructor(private _petitions:ClientsDataService) { }

  ngOnInit(): void {
    this.UserPackage=this._petitions.SearchPackages();
    console.log(this.UserPackage);
  }
}

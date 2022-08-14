import { Component, OnInit } from '@angular/core';
import { ClientsDataService } from 'src/app/services/clients-data.service';
import { Package } from 'src/app/models/package';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  userPackage: any[]=[];
  constructor(private _petitions: ClientsDataService) { }

  ngOnInit(): void {
    this._petitions.searchPackages().subscribe((res: any)=>{
      this.userPackage=res
    });
  }
}


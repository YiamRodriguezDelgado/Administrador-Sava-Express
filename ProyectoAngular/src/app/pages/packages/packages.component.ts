import { Component, OnInit } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  constructor() { }
  route:string;
  visibility:boolean;

  ngOnInit(): void {
  }
}

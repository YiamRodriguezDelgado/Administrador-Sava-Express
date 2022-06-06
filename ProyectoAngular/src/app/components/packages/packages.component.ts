import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  displayEntry(detail: any): void {
    this.modalService.open(detail, {
      centered: true,
      backdrop: 'static',
      size: 'm'
    });
  }

  onClose() {
    this.modalService.dismissAll();
  }

}

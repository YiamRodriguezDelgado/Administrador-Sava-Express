import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Package } from 'src/app/models/package';
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})

export class PackageComponent implements OnInit {
  route:string;
  @Input() package:Package
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log(this.package)
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

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent {
  @Input() url: string;
  @ViewChild('picture') pictureShow: any;
  constructor(private modalService: NgbModal) { }

  CreateModal(name: any){
    this.url=name;
    this.modalService.open(this.pictureShow, {
      centered: true,
      backdrop: 'static',
      size: 'm'
    });
  }
  onClose() {
    this.modalService.dismissAll();
  }

}

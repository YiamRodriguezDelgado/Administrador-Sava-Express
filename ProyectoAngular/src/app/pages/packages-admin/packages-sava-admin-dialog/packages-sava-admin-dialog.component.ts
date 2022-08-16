import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Package } from 'src/app/models/package';
import { PackagesService } from 'src/app/services/packages.service';
import Swal from 'sweetalert2';
import { PackagesAdminDialogComponent } from '../packages-admin-dialog/packages-admin-dialog.component';

@Component({
  selector: 'app-packages-sava-admin-dialog',
  templateUrl: './packages-sava-admin-dialog.component.html',
  styleUrls: ['./packages-sava-admin-dialog.component.scss']
})
export class PackagesSavaAdminDialogComponent implements OnInit {

  savaPackageForm: FormGroup;
  onCreate: boolean = true;
  client_name: FormControl = new FormControl("", [Validators.required]);
  tracking_number: FormControl = new FormControl("", [Validators.required]);
  pounds: FormControl = new FormControl("", [Validators.required]);
  price: FormControl = new FormControl("");
  arrival_date_warehouse: FormControl = new FormControl("", [Validators.required]);
  status: FormControl = new FormControl("");
  sava_code: FormControl = new FormControl("");
  departure_date: FormControl = new FormControl("");
  arrival_date_destiny: FormControl = new FormControl("");
  images: FormControl = new FormControl("");
  private savaCrudSubscription: Subscription;
  private savaPackage: Package
  constructor(
    private dialogRef: MatDialogRef<PackagesAdminDialogComponent>,
    private _savaPackageCrudService: PackagesService,
    @Inject(MAT_DIALOG_DATA) private data,
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.onCreate = false
      this.savaPackage = this.data.object as Package
    }
    this.savaPackageForm = new FormGroup({
      client_name: this.client_name,
      tracking_number: this.tracking_number,
      pounds: this.pounds,
      price: this.price,
      warehouse: this.arrival_date_warehouse,
      status: this.status,
      sava_code: this.sava_code,
      departure_date: this.departure_date,
      arrival_date_destiny: this.arrival_date_destiny
    })
  }

  accept() {
    this.savaPackageForm.markAllAsTouched()
      this.savaCrudSubscription = this._savaPackageCrudService.updateSavaPackage(this.savaPackageForm.value).subscribe(
        (result) => {
          Swal.fire(
            'Paquete SAVA actualizado',
            'success',
          )
        },
        (error) => {
          Swal.fire({ 
            title: 'Error', 
            text: 'No se pudo actualizar paquete', 
            confirmButtonColor: '#FEBE10', 
            icon: 'error', 
            confirmButtonText: 'OK'});
        })
  }
  cancel() {
    this.dialogRef.close()
  }

}
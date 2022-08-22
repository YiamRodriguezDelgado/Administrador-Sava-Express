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
  status: FormControl = new FormControl("");
  weight: FormControl = new FormControl("");
  sava_code: FormControl = new FormControl("");
  departureDate: FormControl = new FormControl("");
  arrival_date_destiny: FormControl = new FormControl("");
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
      this.savaPackage = this.data.savaPackage as Package
      this.client_name.setValue(this.savaPackage.Client["email"])
      this.sava_code.setValue(this.savaPackage.sava_code)
      this.status.setValue(this.savaPackage.status)
      this.price.setValue(this.savaPackage.price)
      this.weight.setValue(this.savaPackage.weight)
      this.departureDate.setValue(this.savaPackage.departureDate)
      this.arrival_date_destiny.setValue(this.savaPackage.arrival_date_destiny)
    }
    this.savaPackageForm = new FormGroup({
      sava_code: this.sava_code,
      status: this.status,
      price: this.price,
      weight: this.weight,
      departureDate: this.departureDate,
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
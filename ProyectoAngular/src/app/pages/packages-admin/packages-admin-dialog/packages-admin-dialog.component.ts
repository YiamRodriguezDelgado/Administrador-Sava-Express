import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { WarehousePackage } from 'src/app/models/warehouse-package';
import { PackagesService } from 'src/app/services/packages.service';
import Swal from 'sweetalert2';
import $ from "jquery";

@Component({
  selector: 'app-packages-admin-dialog',
  templateUrl: './packages-admin-dialog.component.html',
  styleUrls: ['./packages-admin-dialog.component.scss']
})
export class PackagesAdminDialogComponent implements OnInit {
  warehousePackageForm: FormGroup;
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
  private warehouseCrudSubscription: Subscription;
  colectionImages : string[] = [];
  imageForm = new FormGroup({
   name: new FormControl('', [Validators.required]),
   file: new FormControl('', [Validators.required]),
   fileSource: new FormControl('', [Validators.required])
 });
  private warehousePackage: WarehousePackage
  constructor(
    private dialogRef: MatDialogRef<PackagesAdminDialogComponent>,
    private _warehousePackageCrudService: PackagesService,
    @Inject(MAT_DIALOG_DATA) private data,
  ) { }

  get formValue(){
    return this.imageForm.controls;
  }

  ngOnInit(): void {
    if (this.data) {
      this.onCreate = false
      this.warehousePackage = this.data.object as WarehousePackage
      this.client_name.setValue(this.warehousePackage.client_name)
      this.tracking_number.setValue(this.warehousePackage.tracking_number)
      this.sava_code.setValue(this.warehousePackage.sava_code)
      this.pounds.setValue(this.warehousePackage.pounds)
      this.price.setValue(this.warehousePackage.price)
      this.arrival_date_warehouse.setValue(this.warehousePackage.arrival_date_warehouse)
      this.arrival_date_destiny.setValue(this.warehousePackage.arrival_date_destiny)
      this.departure_date.setValue(this.warehousePackage.departure_date)
      this.status.setValue(this.warehousePackage.status)
    }
    this.warehousePackageForm = new FormGroup({
      client_name: this.client_name,
      tracking_number: this.tracking_number,
      pounds: this.pounds,
      price: this.price,
      arrival_date_warehouse: this.arrival_date_warehouse,
      status: this.status,
      sava_code: this.sava_code,
      departure_date: this.departure_date,
      arrival_date_destiny: this.arrival_date_destiny,
      images: this.imageForm
    })
  }

  onFileChange(event:any) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event:any) => {
                  // Push Base64 string
                  this.colectionImages.push(event.target.result); 
                  this.patchValues();
                }
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

  patchValues(){
    this.imageForm.patchValue({
       fileSource: this.colectionImages
    });
  }

  // Remove Image
  removeImage(url:any){
    console.log(this.colectionImages,url);
    this.colectionImages = this.colectionImages.filter(img => (img != url));
    this.patchValues();
  }

  accept() {
    this.warehousePackageForm.markAllAsTouched()
    if (this.arrival_date_warehouse.valid) {
      if (this.onCreate) {
        this.warehouseCrudSubscription = this._warehousePackageCrudService.createWarehousePackage(this.warehousePackageForm.value).subscribe(
          (result) => {
            
        },
          (error) => {

          }
         )
    } else {
      this.warehouseCrudSubscription = this._warehousePackageCrudService.updateWarehousePackage(this.warehousePackageForm.value).subscribe(
        (result) => {
          Swal.fire(
            'Eliminado!',
            'success',
            
          )
        },
        (error) => {
          Swal.fire({ 
            title: 'Error', 
            text: 'No se pudo actualizar el paquete', 
            confirmButtonColor: '#FEBE10', 
            icon: 'error', 
            confirmButtonText: 'OK'});
        })
    }
  }
}
cancel(){
  this.dialogRef.close()
}

}

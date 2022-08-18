import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Package } from 'src/app/models/package';
import { WarehousePackage } from 'src/app/models/warehouse-package';
import { PackagesService } from 'src/app/services/packages.service';
import Swal from 'sweetalert2';
import { PackagesAdminDialogComponent } from './packages-admin-dialog/packages-admin-dialog.component';
import { PackagesSavaAdminDialogComponent } from './packages-sava-admin-dialog/packages-sava-admin-dialog.component';


@Component({
  selector: 'app-packages-admin',
  templateUrl: './packages-admin.component.html',
  styleUrls: ['./packages-admin.component.scss']
})

export class PackagesAdminComponent implements OnInit {
  public focus;
  default_package: string = "Paquetes bodega"
  packagesForm: FormGroup
  package_instance: FormControl = new FormControl()
  packagesOptions: Array<string> = ["Paquetes SAVA", "Paquetes bodega"]
  warehousePackages: Array<WarehousePackage> = [{
    id: 5,
    tracking_number: "0788566565",
    client_name: "Raquel Riofrio",
    pounds: "20 libras",
    price: "50",
    arrival_date: new Date(),
    images: []
  }]

  savaPackages: Array<Package> = []

  @Input() object: WarehousePackage
  private warehousePackageSubscription: Subscription
  constructor(
    public dialog: MatDialog,
    private _warehouseCrudService: PackagesService
  ) { }

  ngOnInit() {
    this.packagesForm = new FormGroup({
      package_instance: this.package_instance
    })

    this.packagesForm.valueChanges.subscribe(() => {
      this.search()
    })

  }

  search(){
    if (this.package_instance.value === "Paquetes SAVA"){
      this.downloadSavaPackages()
    }else {
      this.downloadWarehousePackages()
    }
  }

  downloadWarehousePackages(){
    this.default_package = "Paquetes bodega"
    if (this.warehousePackageSubscription) {
      this.warehousePackageSubscription.unsubscribe()
    }

    this.warehousePackageSubscription = this._warehouseCrudService.getWarehousePackageList().subscribe(
      (result) => {
        this.warehousePackages = result
      },
      (error) => {}
    )
  }

  downloadSavaPackages(){
    this.default_package = "Paquetes SAVA"
    if (this.warehousePackageSubscription) {
      this.warehousePackageSubscription.unsubscribe()
    }
    this.warehousePackageSubscription = this._warehouseCrudService.getSavaPackageList().subscribe(
      (result) => {
        this.savaPackages = result
      },
      (error) => {}
    )
  }

  edit(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.data = {
      object: this.object
    }
    this.dialog.open(PackagesAdminDialogComponent, dialogConfig)
  }

  editSavaPackage(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.width = '40vm'
    dialogConfig.height = '95vm'
    dialogConfig.maxHeight = '100vm'
    dialogConfig.maxWidth = '80vm'
    dialogConfig.data = {
      object: this.object
    }
    this.dialog.open(PackagesSavaAdminDialogComponent, dialogConfig)
  }

  delete(packagee: WarehousePackage){
    Swal.fire({
      title: 'Estas seguro de eliminar el paquete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FEBE10',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No'
    }).then((response: any) => {
      if (response.value) {
        this.warehousePackageSubscription = this._warehouseCrudService.deleteWarehousePackage(packagee.id).subscribe(
          (result) => {
            Swal.fire(
              'Eliminado!',
              'success',
              
            )
          },
          (error) =>{
            Swal.fire({ 
              title: 'Error', 
              text: 'No se pudo eliminar paquete', 
              confirmButtonColor: '#FEBE10', 
              icon: 'error', 
              confirmButtonText: 'OK'});
          }
        )
      } else if (response.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({ 
          title: 'Cancelado', 
          text: 'El paquete no fue eliminado', 
          confirmButtonColor: '#FEBE10', 
          icon: 'error', 
          confirmButtonText: 'OK' });
      }
    })
  }

  openPackagesAdminDialog(): void {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.panelClass = "package-dialog"
    this.dialog.open(PackagesAdminDialogComponent, {
      width: '40vw', //sets width of dialog
      height:'95vh', //sets width of dialog
      maxWidth: '80vw', //overrides default width of dialog
      maxHeight: '100vh', //overrides default height of dialog
      disableClose: true //disables closing on clicking outside box. You will need to make a dedicated button to close
    });
  }


}

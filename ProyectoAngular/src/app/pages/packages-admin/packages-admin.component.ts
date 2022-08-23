import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Image } from 'src/app/models/image';
import { Package } from 'src/app/models/package';
import { WarehousePackage } from 'src/app/models/warehouse-package';
import { PackagesService } from 'src/app/services/packages.service';
import Swal from 'sweetalert2';
import { SavaPackageComponent } from '../sava-package/sava-package.component';
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
  warehousePackages: Array<WarehousePackage> = []
  savaPackages: Array<Package> = []
  imageList: Array<Image> = []
  warehousePackageFilter:Array<WarehousePackage>=[]
  savaPackageFilter:Array<Package>=[]
  emailToSearch=""
  private warehousePackageSubscription: Subscription

  constructor(
    public dialog: MatDialog,
    private _warehouseCrudService: PackagesService
  ) { }

  ngOnInit() {
    this.search()
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

  searchWarehousePackage(email:string){
    this.emailToSearch=email
    if(email=""){
      this.warehousePackageFilter=this.warehousePackages
    }else{
      this.warehousePackageFilter=this.warehousePackages.filter(WarehousePackage=> {
        return WarehousePackage.Client["email"].includes(this.emailToSearch)
      })
    }
  }

  searchSavaPackage(email:string){
    this.emailToSearch=email
    if(email=""){
      this.savaPackageFilter=this.savaPackages
    }else{
      this.savaPackageFilter=this.savaPackages.filter(SavaPackage=> {
        return SavaPackage.Client["email"].includes(this.emailToSearch)
      })
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
        this.warehousePackageFilter = result
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
        this.savaPackageFilter = result
      },
      (error) => {}
    )
  }

 /* edit(warehousePackage: WarehousePackage){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = {
      warehousePackage: warehousePackage
    }
    this.dialog.open(PackagesAdminDialogComponent, dialogConfig)
  }
*/
  editSavaPackage(savaPackage: Package){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.width = '40vm'
    dialogConfig.height = '95vm'
    dialogConfig.maxHeight = '100vm'
    dialogConfig.maxWidth = '80vm'
    dialogConfig.data = {
      savaPackage: savaPackage
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
        this.warehousePackageSubscription = this._warehouseCrudService.deleteWarehousePackage(packagee.tracking_number).subscribe(
          (result) => {
            Swal.fire(
              'Eliminado!',
              'success',
            ).then(function() {
              window.location.reload();
          })
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

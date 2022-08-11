import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { WarehousePackage } from 'src/app/models/warehouse-package';
import { WarehousePackagesService } from 'src/app/services/warehouse-packages.service';
import Swal from 'sweetalert2';
import { AdminPackagesDialogComponent } from './admin-packages-dialog/admin-packages-dialog.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  warehousePackages: Array<WarehousePackage> = [{
    id: 5,
    tracking_number: "0788566565",
    client_name: "Raquel Riofrio",
    status: "Rumbo a Ecuador",
    pounds: "20 libras",
    price: "50",
    departure_date: new Date(),
    arrival_date_destiny: new Date(),
    arrival_date_warehouse: new Date(),
    sava_code: "21555-255512-456",
    images: []
  }]
  @Input() object: WarehousePackage
  private warehousePackageSubscription: Subscription
  constructor(
    public dialog: MatDialog,
    private _warehouseCrudService: WarehousePackagesService
  ) { }

  ngOnInit() {
    this.downloadPackages()
  }

  downloadPackages(){
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

  edit(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.data = {
      object: this.object
    }
    this.dialog.open(AdminPackagesDialogComponent, dialogConfig)
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

  openAdminPackagesDialog(): void {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.panelClass = "package-dialog"
    this.dialog.open(AdminPackagesDialogComponent, {
      width: '40vw', //sets width of dialog
      height:'95vh', //sets width of dialog
      maxWidth: '80vw', //overrides default width of dialog
      maxHeight: '100vh', //overrides default height of dialog
      disableClose: true //disables closing on clicking outside box. You will need to make a dedicated button to close
    });
  }


}

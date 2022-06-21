import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AdminPackagesDialogComponent } from './admin-packages-dialog/admin-packages-dialog.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openAdminPackagesDialog(): void {
    this.dialog.open(AdminPackagesDialogComponent );
  }


}

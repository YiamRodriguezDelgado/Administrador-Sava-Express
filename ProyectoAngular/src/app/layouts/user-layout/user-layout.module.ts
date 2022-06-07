import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLayoutRoutes } from './user-layout.routing';
import { PackagesComponent } from 'src/app/pages/packages/packages.component';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( UserLayoutRoutes ),
    FormsModule,
    MatTabsModule
    // NgbModule
  ],
  declarations: [
    PackagesComponent
  ]
})
export class UserLayoutModule { }

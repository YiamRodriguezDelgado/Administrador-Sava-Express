import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLayoutRoutes } from './user-layout.routing';
import { PackagesComponent } from 'src/app/pages/packages/packages.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PictureComponent } from 'src/app/components/picture/picture.component';
import { PackageComponent } from 'src/app/components/package/package.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( UserLayoutRoutes ),
    FormsModule,
    MatTabsModule
    // NgbModule
  ],
  declarations: [
    PackagesComponent,
    PictureComponent,
    PackageComponent
  ]
})
export class UserLayoutModule { }

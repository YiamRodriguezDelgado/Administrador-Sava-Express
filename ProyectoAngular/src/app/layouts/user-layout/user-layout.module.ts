import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLayoutRoutes } from './user-layout.routing';
import { PackagesComponent } from 'src/app/pages/packages/packages.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PictureComponent } from 'src/app/components/picture/picture.component';
import { PackageComponent } from 'src/app/components/package/package.component';
import { LoginRegisterComponent } from 'src/app/pages/login-register/login-register.component';

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
    PackageComponent,
    LoginRegisterComponent
  ]
})
export class UserLayoutModule { }

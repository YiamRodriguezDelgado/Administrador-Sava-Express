import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { adminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { PackagesAdminComponent } from '../../pages/packages-admin/packages-admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    PackagesAdminComponent,
    IconsComponent,
    MapsComponent
  ]
})

export class AdminLayoutModule {}

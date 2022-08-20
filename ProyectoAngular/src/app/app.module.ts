import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { PackagesAdminDialogComponent } from './pages/packages-admin/packages-admin-dialog/packages-admin-dialog.component';
import { AdminUsersDialogComponent } from './pages/user-profile/admin-users-dialog/admin-users-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

import { PackagesSavaAdminDialogComponent } from './pages/packages-admin/packages-sava-admin-dialog/packages-sava-admin-dialog.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    MatDialogModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    NgbModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserLayoutComponent,
    HeaderComponent,
    PackagesAdminDialogComponent,
    AdminUsersDialogComponent,
    PackagesAdminDialogComponent,
    PackagesSavaAdminDialogComponent,
  ],
  providers: [
  {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
  entryComponents: [PackagesAdminDialogComponent,
    AdminUsersDialogComponent, PackagesSavaAdminDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

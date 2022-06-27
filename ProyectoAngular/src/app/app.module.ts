import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { AdminPackagesDialogComponent } from './pages/tables/admin-packages-dialog/admin-packages-dialog.component';
import { AdminUsersDialogComponent } from './pages/user-profile/admin-users-dialog/admin-users-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
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
    AdminPackagesDialogComponent,
    AdminUsersDialogComponent
  ],
  entryComponents: [AdminPackagesDialogComponent,
    AdminUsersDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

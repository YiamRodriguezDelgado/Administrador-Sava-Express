import { Routes } from '@angular/router';

import { PackagesComponent } from 'src/app/pages/packages/packages.component';
import { LoginRegisterComponent } from 'src/app/pages/login-register/login-register.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { BlockGuard } from 'src/app/guards/block.guard';
import { SentComponent } from 'src/app/pages/sent/sent.component';
import { LandingPageComponent } from 'src/app/pages/landing-page/landing-page.component';
import { WarehouseComponent } from 'src/app/pages/warehouse/warehouse.component';
import { SavaPackageComponent } from 'src/app/pages/sava-package/sava-package.component';
import { RoleGuard } from 'src/app/guards/role.guard';

export const userLayoutRoutes: Routes = [
    { path: 'paquetes',          component: PackagesComponent,canActivate: [RoleGuard], data: {expectedRole: 2}},
    { path: 'login',             component: LoginRegisterComponent, canActivate: [AuthGuard] },
    { path:'envio',              component: SentComponent,canActivate: [RoleGuard], data: {expectedRole: 2}},
    { path:'', canActivate: [AuthGuard],component:LandingPageComponent},
    { path: 'warehouse', component: WarehouseComponent,canActivate: [RoleGuard], data: {expectedRole: 2}},
    { path: 'savaPackage', component: SavaPackageComponent,canActivate: [RoleGuard], data: {expectedRole: 2} }
];

import { Routes } from '@angular/router';

import { PackagesComponent } from 'src/app/pages/packages/packages.component';
import { LoginRegisterComponent } from 'src/app/pages/login-register/login-register.component';

export const UserLayoutRoutes: Routes = [
    { path: 'paquetes',          component: PackagesComponent},
    { path: 'login',             component: LoginRegisterComponent }
];

import { Routes } from '@angular/router';

import { PackagesComponent } from 'src/app/pages/packages/packages.component';
import { LoginRegisterComponent } from 'src/app/pages/login-register/login-register.component';
import { SentComponent } from 'src/app/pages/sent/sent.component';

export const UserLayoutRoutes: Routes = [
    { path: 'paquetes',          component: PackagesComponent},
    { path: 'login',             component: LoginRegisterComponent },
    { path:'envio',              component:SentComponent}
];

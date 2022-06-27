import { Routes } from '@angular/router';

import { PackagesComponent } from 'src/app/pages/packages/packages.component';
import { LoginRegisterComponent } from 'src/app/pages/login-register/login-register.component';
import { SentComponent } from 'src/app/pages/sent/sent.component';
import { LandingPageComponent } from 'src/app/pages/landing-page/landing-page.component';

export const UserLayoutRoutes: Routes = [
    { path: 'paquetes',          component: PackagesComponent},
    { path: 'login',             component: LoginRegisterComponent },
    { path:'envio',              component:SentComponent},
    { path:'',                    component:LandingPageComponent}
];

import { Routes } from '@angular/router';

import { PackagesComponent } from 'src/app/pages/packages/packages.component';
import { LoginRegisterComponent } from 'src/app/pages/login-register/login-register.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { BlockGuard } from 'src/app/guards/block.guard';
import { SentComponent } from 'src/app/pages/sent/sent.component';

export const UserLayoutRoutes: Routes = [
    { path: 'paquetes',          component: PackagesComponent, canActivate: [BlockGuard]},
    { path: 'login',             component: LoginRegisterComponent, canActivate: [AuthGuard] },
    { path:'envio',              component: SentComponent}
];

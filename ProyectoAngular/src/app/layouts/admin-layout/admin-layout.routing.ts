import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { PackagesAdminComponent } from '../../pages/packages-admin/packages-admin.component';
import { RoleGuard } from 'src/app/guards/role.guard';

export const adminLayoutRoutes: Routes = [
    { path: 'dashboard',component: DashboardComponent,canActivate: [RoleGuard], data: {expectedRole: 1} },
    { path: 'user-profile',canActivate: [RoleGuard],   component: UserProfileComponent, data: {expectedRole: 1}},
    { path: 'packages-admin',canActivate: [RoleGuard],         component: PackagesAdminComponent, data: {expectedRole: 1}  },
    { path: 'tablesPackages',canActivate: [RoleGuard], component: PackagesAdminComponent, data: {expectedRole: 1} },
    {path:'',canActivate: [RoleGuard], data: {expectedRole: 1}}
];

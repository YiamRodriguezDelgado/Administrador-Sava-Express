import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { PackagesAdminComponent } from '../../pages/packages-admin/packages-admin.component';
import { RoleGuard } from 'src/app/guards/role.guard';


export const adminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, data: {expectedRole: 1} },
    { path: 'user-profile',   component: UserProfileComponent},
    { path: 'packages-admin',         component: PackagesAdminComponent, data: {expectedRole: 1}  },
    { path: 'icons',          component: IconsComponent, data: {expectedRole: 1}  },
    { path: 'maps',           component: MapsComponent, data: {expectedRole: 1}  },
    { path: 'tablesPackages', component: PackagesAdminComponent }
];

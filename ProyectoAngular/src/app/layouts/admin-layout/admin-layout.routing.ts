import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { RoleGuard } from 'src/app/guards/role.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [RoleGuard], data: {expectedRole: 1} },
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [RoleGuard], data: {expectedRole: 1}  },
    { path: 'tables',         component: TablesComponent, canActivate: [RoleGuard], data: {expectedRole: 1}  },
    { path: 'icons',          component: IconsComponent, canActivate: [RoleGuard], data: {expectedRole: 1}  },
    { path: 'maps',           component: MapsComponent, canActivate: [RoleGuard], data: {expectedRole: 1}  }
];

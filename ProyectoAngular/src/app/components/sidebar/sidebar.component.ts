import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 icon-color-sidebar', class: 'text-color-sidebar' },
    { path: '/user-profile', title: 'Clientes',  icon:'ni-single-02 icon-color-sidebar', class: 'text-color-sidebar' },
    { path: '/tablesPackages', title: 'Paquetes',  icon:'ni-bullet-list-67 icon-color-sidebar', class: 'text-color-sidebar' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router,private acct: AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  ngOnDestroy() {
  }
  onLogOut(): void{
    this.acct.logout();
  }
}

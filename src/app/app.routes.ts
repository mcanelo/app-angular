import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./core/dashboard/dashboard.component";

import { DASHBOARD_ROUTES } from "./core/dashboard/dashboard.routes";


const APP_ROUTES: Routes = [

    { path: 'dashboard', component: DashboardComponent, children: DASHBOARD_ROUTES},
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });


import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login'
        ,   loadComponent: () => import('./pages/login/login.component')
    },
    {
        path: 'layout'
        ,   loadComponent: () => import('./pages/layout/layout.component')
        ,   children:[{
                path: 'dashboard'
                ,   loadComponent: () => import('./pages/dashboard/dashboard.component')
            }]
    },
    {
        path: 'browse'
        ,   loadComponent: ()=> import('./browse/browse.component')
    },
    {
        path: ''
        ,   redirectTo:'login'
        ,   pathMatch: 'full'
    }
];

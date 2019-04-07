import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../components/dashboard.component';
import { HeroesComponent } from '../components/heroes.component';
import { HeroDetailComponent } from '../components/hero-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/components/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'components/dashboard',
        component: DashboardComponent
    },
    {
        path: 'components/heroes',
        component: HeroesComponent
    },
    {
        path: 'components/detail/:ID',
        component: HeroDetailComponent
    },
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
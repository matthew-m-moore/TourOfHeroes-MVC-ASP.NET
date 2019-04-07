import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { RoutingModule } from '../modules/routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from '../components/app.component';
import { DashboardComponent } from '../components/dashboard.component';
import { HeroesComponent } from '../components/heroes.component';
import { HeroDetailComponent } from '../components/hero-detail.component';
import { HeroSearchComponent } from '../components/hero-search.component';

import { HeroService } from '../services/hero.service';
import { HeroDataService } from '../services/hero-data.service';
import { HeroSearchService } from '../services/hero-search.service';
import { InMemoryDataService } from '../services/in-memory-data.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RoutingModule,
        HttpModule,
        MaterialModule,
        BrowserAnimationsModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],

    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        HeroSearchComponent,
    ],

    providers: [
        HeroService,
        HeroDataService,
    ],

    bootstrap: [
        AppComponent,
    ]
})

export class AppModule { }

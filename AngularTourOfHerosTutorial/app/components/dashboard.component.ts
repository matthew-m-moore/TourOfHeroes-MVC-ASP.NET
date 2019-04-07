import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';
import { HeroDataService } from '../services/hero-data.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: '../views/dashboard.component.html',
    styleUrls: ['../styles/dashboard.component.css'],
    moduleId: module.id
})

export class DashboardComponent implements OnInit { 
    Heroes: Hero[] = [];
    
    constructor(
        private HeroService: HeroService,
        private HeroDataService: HeroDataService,
    ) { }

    ngOnInit(): void {
        this.HeroDataService.GetHeroes().then(heroes => this.Heroes = heroes.slice(0, 4));
    }
}
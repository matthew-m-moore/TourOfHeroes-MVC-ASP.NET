import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';
import { HeroDataService } from '../services/hero-data.service';

@Component({
    selector: 'my-heroes',
    templateUrl: '../views/heroes.component.html',
    styleUrls: ['../styles/heroes.component.css'],
    moduleId: module.id
})

export class HeroesComponent implements OnInit {
    SelectedHero: Hero;
    Heroes: Hero[];

    constructor(
        private HeroService: HeroService,
        private HeroDataService: HeroDataService,
        private Router: Router
    ) { }

    Add(heroName: string): void {
        heroName = heroName.trim();
        if (!heroName) { return; }

        this.HeroDataService.CreateHero(heroName)
            .then(hero => {
                this.Heroes.push(hero);
                this.SelectedHero = null;
            });
    }

    Delete(hero: Hero): void {
        this.HeroDataService.RemoveHero(hero)
            .then(() => {
                this.Heroes = this.Heroes.filter(h => h !== hero);
                if (this.SelectedHero === hero) {
                    this.SelectedHero = null;
                }
            });
    }

    GoToDetail(): void {
        this.Router.navigate(['/components/detail', this.SelectedHero.ID],
            { queryParams: { returnUrl: this.Router.url } });
    }

    onSelect(hero: Hero): void {
        this.SelectedHero = hero;
    }

    ngOnInit(): void {
        this.HeroDataService.GetHeroes()
            .then(listOfHeros => this.Heroes = listOfHeros);
    }
}
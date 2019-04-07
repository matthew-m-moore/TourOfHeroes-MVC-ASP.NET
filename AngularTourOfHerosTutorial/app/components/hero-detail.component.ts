import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { Router } from '@angular/router';

import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';
import { HeroDataService } from '../services/hero-data.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: '../views/hero-detail.component.html',
    styleUrls: ['../styles/hero-detail.component.css'],
    moduleId: module.id
})

export class HeroDetailComponent implements OnInit {
    @Input() Hero: Hero;
    PreviousUrl: string;

    constructor(
        private HeroService: HeroService,
        private HeroDataService: HeroDataService,
        private ActivatedRoute: ActivatedRoute,
        private Router: Router
    ) { 
        ActivatedRoute.queryParams
            .subscribe((params) => {
                this.PreviousUrl = params.returnUrl;
            });
    }

    Save(): void {
        this.HeroDataService.UpdateHero(this.Hero)
            .then(() => this.GoBack());
    }

    GoBack(): void {
        this.Router.navigateByUrl(this.PreviousUrl);
    }

    ngOnInit(): void {
        this.ActivatedRoute.paramMap
            .switchMap((params: ParamMap) => this.HeroDataService.GetHero(+params.get('ID')))
            .subscribe(hero => this.Hero = hero);
    }
}
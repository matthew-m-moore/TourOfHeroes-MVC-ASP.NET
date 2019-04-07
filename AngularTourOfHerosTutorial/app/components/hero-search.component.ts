import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Hero } from '../classes/hero';
import { HeroSearchService } from '../services/hero-search.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'hero-search',
    templateUrl: '../views/hero-search.component.html',
    styleUrls: ['../styles/hero-search.component.css'],
    moduleId: module.id,
    providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
    Heroes: Observable<Hero[]>;
    private SearchTerms = new Subject<string>();

    constructor(
        private HeroSearchService: HeroSearchService,
        private Router: Router)
    { }

    Search(searchText: string): void {
        if (!searchText.trim()){
            this.SearchTerms.next('');
            return;
        }

        this.SearchTerms.next(searchText.toUpperCase());
    }

    GoToDetail(hero: Hero): void {
        let detailLink = ['/components/detail', hero.ID];
        this.Router.navigate(detailLink,
            { queryParams: { returnUrl: this.Router.url } });
    }

    ngOnInit(): void {
        this.Heroes = this.SearchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(searchText => searchText
                ? this.HeroSearchService.SearchForHeroAsync(searchText)
                : Observable.of<Hero[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }
}
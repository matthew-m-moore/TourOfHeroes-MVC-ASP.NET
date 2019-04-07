import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

import { Hero } from '../classes/hero';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class HeroSearchService {
    private WebApiUrl = 'api/heroes/search';
    private Headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private Http: Http) { }

    SearchForHero(searchTerm: string): Promise<Hero[]> {
        const url = `${this.WebApiUrl}?searchTerm=${searchTerm}`;
        return this.Http.get(url)
            .toPromise()
            .then(response => response.json() as Hero[])
            .catch(this.handleError);
    }

    SearchForHeroAsync(searchTerm: string): Observable<Hero[]> {
        const url = `${this.WebApiUrl}?searchTerm=${searchTerm}`;
        return this.Http.get(url)
            .map(response => response.json() as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
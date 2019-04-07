import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

import { Hero } from '../classes/hero';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class HeroDataService {
    private WebApiUrl = 'api/heroes';
    private Headers = new Headers({'Content-Type': 'application/json'});

    constructor(private Http: Http) { }

    GetHero(id: number): Promise<Hero> {
        const url = `${this.WebApiUrl}/${id}`;
        return this.Http.get(url)
            .toPromise()
            .then(response => response.json() as Hero)
            // .then(response => response.json().data as Hero) //<-- This is for using the in-memory data service
            .catch(this.handleError);
    }

    GetHeroes(): Promise<Hero[]> {
        return this.Http.get(this.WebApiUrl)
            .toPromise()
            .then(response => response.json() as Hero[])
            // .then(response => response.json().data as Hero[]) //<-- This is for using the in-memory data service
            .catch(this.handleError);
    }

    CreateHero(heroName: string): Promise<Hero> {
        return this.Http
            .post(this.WebApiUrl, JSON.stringify(heroName), { headers: this.Headers })
            .toPromise()
            .then(response => response.json() as Hero)
            .catch(this.handleError);
    }

    RemoveHero(hero: Hero): Promise<Hero> {
        const url = `${this.WebApiUrl}/${hero.ID}`;
        return this.Http
            .delete(url, { headers: this.Headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    UpdateHero(hero: Hero): Promise<Hero> {
        const url = `${this.WebApiUrl}/${hero.ID}`;
        return this.Http
            .put(url, JSON.stringify(hero), { headers: this.Headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

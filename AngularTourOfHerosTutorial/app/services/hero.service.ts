import { Injectable } from '@angular/core';

import { Hero } from '../classes/hero';
import { ListOfHeroes } from './list-of-heroes';

@Injectable()

export class HeroService {
    GetHero(id: number): Promise<Hero> {
        return this.GetHeroes()
            .then(heroes => heroes.find(hero => hero.ID === id));
    }

    GetHeroes(): Promise<Hero[]> {
        return Promise.resolve(ListOfHeroes);
    }

    GetHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.GetHeroes()), 2000);
        });
    }
}
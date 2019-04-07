"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var list_of_heroes_1 = require("./list-of-heroes");
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.GetHero = function (id) {
        return this.GetHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.ID === id; }); });
    };
    HeroService.prototype.GetHeroes = function () {
        return Promise.resolve(list_of_heroes_1.ListOfHeroes);
    };
    HeroService.prototype.GetHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.GetHeroes()); }, 2000);
        });
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map
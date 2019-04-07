"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_service_1 = require("../services/hero.service");
var hero_data_service_1 = require("../services/hero-data.service");
var HeroesComponent = (function () {
    function HeroesComponent(HeroService, HeroDataService, Router) {
        this.HeroService = HeroService;
        this.HeroDataService = HeroDataService;
        this.Router = Router;
    }
    HeroesComponent.prototype.Add = function (heroName) {
        var _this = this;
        heroName = heroName.trim();
        if (!heroName) {
            return;
        }
        this.HeroDataService.CreateHero(heroName)
            .then(function (hero) {
            _this.Heroes.push(hero);
            _this.SelectedHero = null;
        });
    };
    HeroesComponent.prototype.Delete = function (hero) {
        var _this = this;
        this.HeroDataService.RemoveHero(hero)
            .then(function () {
            _this.Heroes = _this.Heroes.filter(function (h) { return h !== hero; });
            if (_this.SelectedHero === hero) {
                _this.SelectedHero = null;
            }
        });
    };
    HeroesComponent.prototype.GoToDetail = function () {
        this.Router.navigate(['/components/detail', this.SelectedHero.ID], { queryParams: { returnUrl: this.Router.url } });
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.SelectedHero = hero;
    };
    HeroesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.HeroDataService.GetHeroes()
            .then(function (listOfHeros) { return _this.Heroes = listOfHeros; });
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: '../views/heroes.component.html',
        styleUrls: ['../styles/heroes.component.css'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        hero_data_service_1.HeroDataService,
        router_1.Router])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map
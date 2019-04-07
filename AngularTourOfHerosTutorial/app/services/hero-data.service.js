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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var HeroDataService = (function () {
    function HeroDataService(Http) {
        this.Http = Http;
        this.WebApiUrl = 'api/heroes';
        this.Headers = new http_2.Headers({ 'Content-Type': 'application/json' });
    }
    HeroDataService.prototype.GetHero = function (id) {
        var url = this.WebApiUrl + "/" + id;
        return this.Http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroDataService.prototype.GetHeroes = function () {
        return this.Http.get(this.WebApiUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroDataService.prototype.CreateHero = function (heroName) {
        return this.Http
            .post(this.WebApiUrl, JSON.stringify(heroName), { headers: this.Headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroDataService.prototype.RemoveHero = function (hero) {
        var url = this.WebApiUrl + "/" + hero.ID;
        return this.Http
            .delete(url, { headers: this.Headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroDataService.prototype.UpdateHero = function (hero) {
        var url = this.WebApiUrl + "/" + hero.ID;
        return this.Http
            .put(url, JSON.stringify(hero), { headers: this.Headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroDataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return HeroDataService;
}());
HeroDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroDataService);
exports.HeroDataService = HeroDataService;
//# sourceMappingURL=hero-data.service.js.map
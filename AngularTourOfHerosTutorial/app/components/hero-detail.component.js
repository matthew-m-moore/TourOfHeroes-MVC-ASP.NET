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
var core_2 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var hero_1 = require("../classes/hero");
var hero_service_1 = require("../services/hero.service");
var hero_data_service_1 = require("../services/hero-data.service");
require("rxjs/add/operator/switchMap");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(HeroService, HeroDataService, ActivatedRoute, Router) {
        var _this = this;
        this.HeroService = HeroService;
        this.HeroDataService = HeroDataService;
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        ActivatedRoute.queryParams
            .subscribe(function (params) {
            _this.PreviousUrl = params.returnUrl;
        });
    }
    HeroDetailComponent.prototype.Save = function () {
        var _this = this;
        this.HeroDataService.UpdateHero(this.Hero)
            .then(function () { return _this.GoBack(); });
    };
    HeroDetailComponent.prototype.GoBack = function () {
        this.Router.navigateByUrl(this.PreviousUrl);
    };
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ActivatedRoute.paramMap
            .switchMap(function (params) { return _this.HeroDataService.GetHero(+params.get('ID')); })
            .subscribe(function (hero) { return _this.Hero = hero; });
    };
    return HeroDetailComponent;
}());
__decorate([
    core_2.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroDetailComponent.prototype, "Hero", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        templateUrl: '../views/hero-detail.component.html',
        styleUrls: ['../styles/hero-detail.component.css'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        hero_data_service_1.HeroDataService,
        router_1.ActivatedRoute,
        router_2.Router])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map
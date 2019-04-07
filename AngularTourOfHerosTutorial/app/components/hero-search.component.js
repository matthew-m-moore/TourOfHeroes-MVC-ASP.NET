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
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var hero_search_service_1 = require("../services/hero-search.service");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var HeroSearchComponent = (function () {
    function HeroSearchComponent(HeroSearchService, Router) {
        this.HeroSearchService = HeroSearchService;
        this.Router = Router;
        this.SearchTerms = new Subject_1.Subject();
    }
    HeroSearchComponent.prototype.Search = function (searchText) {
        if (!searchText.trim()) {
            this.SearchTerms.next('');
            return;
        }
        this.SearchTerms.next(searchText.toUpperCase());
    };
    HeroSearchComponent.prototype.GoToDetail = function (hero) {
        var detailLink = ['/components/detail', hero.ID];
        this.Router.navigate(detailLink, { queryParams: { returnUrl: this.Router.url } });
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Heroes = this.SearchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (searchText) { return searchText
            ? _this.HeroSearchService.SearchForHeroAsync(searchText)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    return HeroSearchComponent;
}());
HeroSearchComponent = __decorate([
    core_1.Component({
        selector: 'hero-search',
        templateUrl: '../views/hero-search.component.html',
        styleUrls: ['../styles/hero-search.component.css'],
        moduleId: module.id,
        providers: [hero_search_service_1.HeroSearchService]
    }),
    __metadata("design:paramtypes", [hero_search_service_1.HeroSearchService,
        router_1.Router])
], HeroSearchComponent);
exports.HeroSearchComponent = HeroSearchComponent;
//# sourceMappingURL=hero-search.component.js.map
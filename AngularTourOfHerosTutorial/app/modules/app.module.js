"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var http_1 = require("@angular/http");
var routing_module_1 = require("../modules/routing.module");
var app_component_1 = require("../components/app.component");
var dashboard_component_1 = require("../components/dashboard.component");
var heroes_component_1 = require("../components/heroes.component");
var hero_detail_component_1 = require("../components/hero-detail.component");
var hero_search_component_1 = require("../components/hero-search.component");
var hero_service_1 = require("../services/hero.service");
var hero_data_service_1 = require("../services/hero-data.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            routing_module_1.RoutingModule,
            http_1.HttpModule,
            material_1.MaterialModule,
            animations_1.BrowserAnimationsModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            heroes_component_1.HeroesComponent,
            hero_detail_component_1.HeroDetailComponent,
            hero_search_component_1.HeroSearchComponent,
        ],
        providers: [
            hero_service_1.HeroService,
            hero_data_service_1.HeroDataService,
        ],
        bootstrap: [
            app_component_1.AppComponent,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
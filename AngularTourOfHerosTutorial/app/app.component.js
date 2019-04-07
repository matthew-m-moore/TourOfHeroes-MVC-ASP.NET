"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.Title = 'Tour of Heroes';
        this.Heroes = ListOfHeroes;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.SelectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'views/app.component.html',
        styleUrls: ['styles/app.component.css'],
        moduleId: module.id
    })
], AppComponent);
exports.AppComponent = AppComponent;
var ListOfHeroes = [
    { ID: 11, Name: 'Particle Man' },
    { ID: 12, Name: 'Triangle Man' },
    { ID: 13, Name: 'Universe Man' },
    { ID: 14, Name: 'Smaller Man' },
    { ID: 15, Name: 'Person Man' },
    { ID: 16, Name: 'Degraded Man' },
    { ID: 17, Name: 'Mega Man X' },
    { ID: 18, Name: 'Sergant Cooper' },
    { ID: 19, Name: '2B' },
    { ID: 20, Name: '9S' },
];
//# sourceMappingURL=app.component.js.map
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
var hero_1 = require("./classes/hero");
var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
    }
    return HeroDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroDetailComponent.prototype, "Hero", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        //templateUrl: 'views/hero-detail.component.html',
        //styleUrls: ['styles/hero-detail.component.css', 'app.component.css'],
        template: "\n    <div *ngIf=\"Hero\">\n        <h2>{{Hero.Name}} details!</h2>\n        <div>\n            <label>ID: </label>{{Hero.ID}}\n        </div>\n        <div>\n            <label>Name: </label>\n            <input [(ngModel)]=\"Hero.Name\" placeholder=\"(please type a name)\" />\n        </div>\n    </div>\n    "
    })
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map
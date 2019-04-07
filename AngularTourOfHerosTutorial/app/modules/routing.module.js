"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("../components/dashboard.component");
var heroes_component_1 = require("../components/heroes.component");
var hero_detail_component_1 = require("../components/hero-detail.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/components/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'components/dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'components/heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'components/detail/:ID',
        component: hero_detail_component_1.HeroDetailComponent
    },
];
exports.RoutingModule = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routing.module.js.map
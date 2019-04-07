"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var heroes_component_1 = require("./heroes.component");
var appRoutes = [
    {
        path: 'components/heroes',
        component: heroes_component_1.HeroesComponent
    }
];
exports.RoutingComponent = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routing.component.js.map
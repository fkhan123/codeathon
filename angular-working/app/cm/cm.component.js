System.register(["angular2/core", "angular2/router", "./cm-list.component", "./cm-detail.component", "./cm.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, cm_list_component_1, cm_detail_component_1, cm_service_1, CMComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cm_list_component_1_1) {
                cm_list_component_1 = cm_list_component_1_1;
            },
            function (cm_detail_component_1_1) {
                cm_detail_component_1 = cm_detail_component_1_1;
            },
            function (cm_service_1_1) {
                cm_service_1 = cm_service_1_1;
            }
        ],
        execute: function () {
            CMComponent = (function () {
                function CMComponent() {
                }
                return CMComponent;
            }());
            CMComponent = __decorate([
                core_1.Component({
                    template: "\n    <h2>Configuration Manager</h2>\n    <router-outlet></router-outlet>\n  ",
                    directives: [router_1.RouterOutlet],
                    providers: [cm_service_1.CMService]
                }),
                router_1.RouteConfig([
                    { path: '/', name: 'CMList', component: cm_list_component_1.CMListComponent, useAsDefault: true },
                    { path: '/:id', name: 'CMDetail', component: cm_detail_component_1.CMDetailComponent }
                ])
            ], CMComponent);
            exports_1("CMComponent", CMComponent);
        }
    };
});
//# sourceMappingURL=cm.component.js.map
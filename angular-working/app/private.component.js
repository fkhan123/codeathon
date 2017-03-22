System.register(["angular2/core", "./authentication.service", "angular2/router", "./cm/cm.component"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, authentication_service_1, router_1, cm_component_1, PrivateComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cm_component_1_1) {
                cm_component_1 = cm_component_1_1;
            }
        ],
        execute: function () {
            PrivateComponent = (function () {
                function PrivateComponent(_service) {
                    this._service = _service;
                }
                PrivateComponent.prototype.ngOnInit = function () {
                    this._service.checkCredentials();
                };
                PrivateComponent.prototype.logout = function () {
                    this._service.logout();
                };
                return PrivateComponent;
            }());
            PrivateComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    providers: [authentication_service_1.AuthenticationService],
                    template: "<div id=\"u234\" class=\"text\" style=\"top: 41px; position: absolute;top: 0%;right: 0%;\">\n  <a (click)=\"logout()\" href=\"#\">Logout</a></div>\n  \n    <h1 class=\"title\">Welcome</h1>\n    <a [routerLink]=\"['CM']\">Configuration Manager</a>\n    <a [routerLink]=\"['MTE']\">MTE Manager</a>\n    <router-outlet></router-outlet>\n  ",
                    directives: [router_1.ROUTER_DIRECTIVES]
                }),
                router_1.RouteConfig([
                    {
                        path: 'home/cm/...',
                        name: 'CM',
                        component: cm_component_1.CMComponent,
                        useAsDefault: true
                    },
                    ,
                    {
                        path: 'home/mte/...',
                        name: 'MTE',
                        component: cm_component_1.CMComponent,
                    }
                ]),
                __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
            ], PrivateComponent);
            exports_1("PrivateComponent", PrivateComponent);
        }
    };
});
//# sourceMappingURL=private.component.js.map
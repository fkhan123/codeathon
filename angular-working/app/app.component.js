System.register(["angular2/core", "angular2/router", "./login.component", "./private.component"], function (exports_1, context_1) {
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
    var core_1, router_1, login_component_1, private_component_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (private_component_1_1) {
                private_component_1 = private_component_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.setUpEvents();
                }
                AppComponent.prototype.setUpEvents = function () {
                    var _this = this;
                    this.router.subscribe(function (value) { return _this.onNext(value); });
                };
                AppComponent.prototype.onNext = function (value) {
                    //uncomment to get the stacktrace
                    //throw new Exception(""); 
                    console.log(value);
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "\n     <router-outlet></router-outlet>\n  ",
                    directives: [login_component_1.LoginComponent, router_1.ROUTER_DIRECTIVES]
                }),
                router_1.RouteConfig([
                    { path: '...', name: 'Home', component: private_component_1.PrivateComponent },
                    { path: '', name: 'Login', component: login_component_1.LoginComponent },
                ]),
                __metadata("design:paramtypes", [router_1.Router])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map
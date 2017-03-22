System.register(["angular2/core", "./cm.service", "angular2/router"], function (exports_1, context_1) {
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
    var core_1, cm_service_1, router_1, CMListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cm_service_1_1) {
                cm_service_1 = cm_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            CMListComponent = (function () {
                function CMListComponent(_service, _router, routeParams) {
                    this._service = _service;
                    this._router = _router;
                    this._selectedId = +routeParams.get('id');
                }
                CMListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('inside it');
                    //this._service.getCMs().then(cms => this.cms = cms);
                    this._service.getCMsfromservice().subscribe(function (data) { return _this.cms = data; }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                CMListComponent.prototype.isSelected = function (cm) { return cm.id === this._selectedId; };
                CMListComponent.prototype.onSelect = function (cm) {
                    this._router.navigate(['CMDetail', { id: cm.id }]);
                };
                return CMListComponent;
            }());
            CMListComponent = __decorate([
                core_1.Component({
                    template: "\n    <ul>\n      <li *ngFor=\"#cm of cms\"\n        [class.selected]=\"isSelected(cm)\"\n        (click)=\"onSelect(cm)\">\n        <span class=\"badge\">{{cm.id}}</span> {{cm.name}}\n      </li>\n    </ul>\n  ",
                    providers: [cm_service_1.CMService]
                }),
                __metadata("design:paramtypes", [cm_service_1.CMService,
                    router_1.Router,
                    router_1.RouteParams])
            ], CMListComponent);
            exports_1("CMListComponent", CMListComponent);
        }
    };
});
//# sourceMappingURL=cm-list.component.js.map
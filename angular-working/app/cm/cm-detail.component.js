System.register(["angular2/core", "./cm.service", "angular2/router", "./../dialog.service"], function (exports_1, context_1) {
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
    var core_1, cm_service_1, router_1, dialog_service_1, CMDetailComponent;
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
            },
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            }
        ],
        execute: function () {
            CMDetailComponent = (function () {
                function CMDetailComponent(_service, _router, _routeParams, _dialog) {
                    this._service = _service;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._dialog = _dialog;
                }
                CMDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._service.getCM(id).then(function (cm) {
                        if (cm) {
                            _this.editName = cm.name;
                            _this.editEnv = cm.env;
                            _this.version = cm.version;
                            _this.cm = cm;
                        }
                        else {
                            _this.gotoCM();
                        }
                    });
                };
                CMDetailComponent.prototype.routerCanDeactivate = function (next, prev) {
                    return !this.cm ||
                        this.cm.name === this.editName || this.cm.env;
                    this.editEnv ||
                        this._dialog.confirm('Discard changes?');
                };
                CMDetailComponent.prototype.cancel = function () {
                    this.editName = this.cm.name;
                    this.editEnv = this.cm.env;
                    this.gotoCM();
                };
                CMDetailComponent.prototype.save = function () {
                    this.cm.name = this.editName;
                    this.gotoCM();
                };
                CMDetailComponent.prototype.gotoCM = function () {
                    var route = ['CMList', { id: this.cm ? this.cm.id : null }];
                    this._router.navigate(route);
                };
                return CMDetailComponent;
            }());
            CMDetailComponent = __decorate([
                core_1.Component({
                    template: "\n  <div *ngIf=\"cm\">\n    <h3>\"{{editName}}\"</h3>\n    <div>\n      <label>Id: </label>{{cm.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"editName\" placeholder=\"name\"/>\n    </div>\n\t<div>\n      <label>Env: </label>\n      <input [(ngModel)]=\"editEnv\" placeholder=\"env\"/>\n    </div>\n\t<div>\n      <label>Version: </label>{{cm.version}}</div>\n      <button (click)=\"save()\">Save</button>\n    <button (click)=\"cancel()\">Cancel</button>\n  </div>\n  ",
                    styles: ['input {width: 20em}']
                }),
                __metadata("design:paramtypes", [cm_service_1.CMService,
                    router_1.Router,
                    router_1.RouteParams,
                    dialog_service_1.DialogService])
            ], CMDetailComponent);
            exports_1("CMDetailComponent", CMDetailComponent);
        }
    };
});
//# sourceMappingURL=cm-detail.component.js.map
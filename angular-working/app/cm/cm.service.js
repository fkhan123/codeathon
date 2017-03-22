System.register(["angular2/core", "angular2/http"], function (exports_1, context_1) {
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
    var core_1, http_1, CM, CMService, cms, cmsPromise, CMService_1;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            CM = (function () {
                function CM(id, name, env, version) {
                    this.id = id;
                    this.name = name;
                    this.env = env;
                    this.version = version;
                }
                return CM;
            }());
            exports_1("CM", CM);
            CMService = CMService_1 = (function () {
                function CMService(_http) {
                    this._http = _http;
                }
                CMService.prototype.getCMsfromservice = function () {
                    console.log('inside it');
                    return this._http.get('http://localhost:8088/api').map(function (res) { return res.json(); });
                };
                CMService.prototype.getCMs = function () { return cmsPromise; };
                CMService.prototype.getCM = function (id) {
                    return cmsPromise
                        .then(function (cms) { return cms.filter(function (c) { return c.id === +id; })[0]; });
                };
                CMService.prototype.addCM = function (name) {
                    name = name.trim();
                    if (name) {
                        var cm = new CM(CMService_1.nextCMId++, name, env);
                        cmPromise.then(function (cm) { return cm.push(cm); });
                    }
                };
                return CMService;
            }());
            CMService.nextCMId = 100;
            CMService = CMService_1 = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], CMService);
            exports_1("CMService", CMService);
            cms = [
                new CM(1, 'SYSTEM', 'DEV', 1.0),
                new CM(2, 'CONFIG', 'UQA', 1.1),
                new CM(3, 'APPLICATION', 'PROD', 2.5),
                new CM(4, 'DATABASE', 'UINT', 3.6)
            ];
            cmsPromise = Promise.resolve(cms);
        }
    };
});
//# sourceMappingURL=cm.service.js.map
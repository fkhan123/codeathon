System.register(["@angular/platform-browser-dynamic", "./app/mte.module"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, mte_module_1;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (mte_module_1_1) {
                mte_module_1 = mte_module_1_1;
            }
        ],
        execute: function () {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(mte_module_1.AppModule);
        }
    };
});
//# sourceMappingURL=main.js.map
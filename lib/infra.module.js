"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pipes_1 = require("./pipes");
var utility_service_1 = require("./utility.service");
var socket_1 = require("./socket");
require("./helper");
require("./validators");
var InfraModule = /** @class */ (function () {
    function InfraModule() {
    }
    InfraModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        pipes_1.PipesModule,
                        socket_1.SocketModule
                    ],
                    declarations: [],
                    providers: [utility_service_1.UtilityService],
                    exports: [
                        pipes_1.PipesModule,
                    ]
                },] },
    ];
    /** @nocollapse */
    InfraModule.ctorParameters = function () { return []; };
    return InfraModule;
}());
exports.InfraModule = InfraModule;
//# sourceMappingURL=infra.module.js.map
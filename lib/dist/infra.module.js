"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const pipes_1 = require("./pipes");
const utility_service_1 = require("./utility.service");
const socket_1 = require("./socket");
require("./helper");
require("./validators");
class InfraModule {
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
InfraModule.ctorParameters = () => [];
exports.InfraModule = InfraModule;
//# sourceMappingURL=infra.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const pipes_1 = require("./pipes");
const utility_service_1 = require("./utility.service");
const socket_1 = require("./socket");
require("./helper");
require("./validators");
let InfraModule = class InfraModule {
};
InfraModule = __decorate([
    core_1.NgModule({
        imports: [
            pipes_1.PipesModule,
            socket_1.SocketModule
        ],
        declarations: [],
        providers: [utility_service_1.UtilityService],
        exports: [
            pipes_1.PipesModule,
        ]
    })
], InfraModule);
exports.InfraModule = InfraModule;
//# sourceMappingURL=infra.module.js.map
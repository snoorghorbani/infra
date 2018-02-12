"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const pipes_1 = require("./pipes");
let PipesModule = class PipesModule {
};
PipesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        providers: [
            pipes_1.DataUnitService
        ],
        declarations: [
            pipes_1.DataUnitPipe,
            pipes_1.TimeUnitPipe,
            pipes_1.PersianDatePipe,
            pipes_1.CurrencyUnitPipe,
            pipes_1.PersianNumberPipe,
            pipes_1.TimeCounterPipe
        ],
        exports: [
            pipes_1.DataUnitPipe,
            pipes_1.TimeUnitPipe,
            pipes_1.PersianDatePipe,
            pipes_1.CurrencyUnitPipe,
            pipes_1.PersianNumberPipe,
            pipes_1.TimeCounterPipe
        ]
    })
], PipesModule);
exports.PipesModule = PipesModule;
//# sourceMappingURL=pipes.module.js.map
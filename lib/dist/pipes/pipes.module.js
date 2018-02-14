"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const pipes_1 = require("./pipes");
class PipesModule {
}
PipesModule.decorators = [
    { type: core_1.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
PipesModule.ctorParameters = () => [];
exports.PipesModule = PipesModule;
//# sourceMappingURL=pipes.module.js.map
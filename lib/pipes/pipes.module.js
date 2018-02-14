"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var pipes_1 = require("./pipes");
var PipesModule = /** @class */ (function () {
    function PipesModule() {
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
    PipesModule.ctorParameters = function () { return []; };
    return PipesModule;
}());
exports.PipesModule = PipesModule;
//# sourceMappingURL=pipes.module.js.map
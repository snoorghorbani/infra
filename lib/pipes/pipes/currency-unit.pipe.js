"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CurrencyUnitPipe = /** @class */ (function () {
    function CurrencyUnitPipe() {
    }
    CurrencyUnitPipe.prototype.transform = function (value, exponent) {
        if (!value && value != 0)
            return '';
        else if (value == 0)
            return 'رایگان';
        var suffix = 'ریال';
        return [value.toLocaleString('fa-IR'), suffix].join(' ');
    };
    CurrencyUnitPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'currencyUnit' },] },
    ];
    /** @nocollapse */
    CurrencyUnitPipe.ctorParameters = function () { return []; };
    return CurrencyUnitPipe;
}());
exports.CurrencyUnitPipe = CurrencyUnitPipe;
//# sourceMappingURL=currency-unit.pipe.js.map
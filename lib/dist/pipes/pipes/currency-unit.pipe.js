"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
class CurrencyUnitPipe {
    transform(value, exponent) {
        if (!value && value != 0)
            return '';
        else if (value == 0)
            return 'رایگان';
        let suffix = 'ریال';
        return [value.toLocaleString('fa-IR'), suffix].join(' ');
    }
}
CurrencyUnitPipe.decorators = [
    { type: core_1.Pipe, args: [{ name: 'currencyUnit' },] },
];
/** @nocollapse */
CurrencyUnitPipe.ctorParameters = () => [];
exports.CurrencyUnitPipe = CurrencyUnitPipe;
//# sourceMappingURL=currency-unit.pipe.js.map
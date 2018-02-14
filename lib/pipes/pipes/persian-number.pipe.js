"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PersianNumberPipe = /** @class */ (function () {
    function PersianNumberPipe() {
    }
    PersianNumberPipe.prototype.transform = function (value, exponent) {
        if (!value)
            return '';
        var res = '';
        for (var index = 0; index < value.length; index++) {
            res += (+value[index]).toLocaleString('fa-IR', {
                useGrouping: false
            });
        }
        return res;
    };
    PersianNumberPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'persianNumber' },] },
    ];
    /** @nocollapse */
    PersianNumberPipe.ctorParameters = function () { return []; };
    return PersianNumberPipe;
}());
exports.PersianNumberPipe = PersianNumberPipe;
//# sourceMappingURL=persian-number.pipe.js.map
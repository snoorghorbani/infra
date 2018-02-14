"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataUnitPipe = /** @class */ (function () {
    function DataUnitPipe() {
    }
    DataUnitPipe.prototype.transform = function (value, exponent) {
        if (value == 0)
            return '0 بایت';
        if (value == null)
            return 'نامحدود';
        var B = 1;
        var KB = B * 1024;
        var MB = KB * 1024;
        var GB = MB * 1024;
        var convertedValue;
        var suffix = 'بایت';
        if (value >= GB) {
            suffix = 'گیگا بایت';
            convertedValue = (value / GB).toFixed(2);
        }
        else if (value >= MB) {
            suffix = 'مگا بایت';
            convertedValue = (value / MB).toFixed(2);
        }
        else if (value >= KB) {
            suffix = 'کیلو بایت';
            convertedValue = (value / KB).toFixed(2);
        }
        else {
            suffix = 'بایت';
            convertedValue = (value).toFixed(2);
        }
        return convertedValue + ' ' + suffix;
    };
    DataUnitPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'dataUnit' },] },
    ];
    /** @nocollapse */
    DataUnitPipe.ctorParameters = function () { return []; };
    return DataUnitPipe;
}());
exports.DataUnitPipe = DataUnitPipe;
//# sourceMappingURL=data-unit.pipe.js.map
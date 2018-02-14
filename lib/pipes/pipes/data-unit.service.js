"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataUnitService = /** @class */ (function () {
    function DataUnitService() {
    }
    DataUnitService.prototype.transform = function (value, exponent) {
        debugger;
        if (value == 0)
            return '0 B';
        if (value == null)
            return 'نامحدود';
        var B = 1;
        var KB = B * 1024;
        var MB = KB * 1024;
        var GB = MB * 1024;
        var convertedValue;
        var suffix = 'B';
        if (value >= GB) {
            suffix = 'GB';
            convertedValue = (value / GB).toPrecision(3);
        }
        else if (value >= MB) {
            suffix = 'MG';
            convertedValue = (value / MB).toPrecision(3);
        }
        else if (value >= KB) {
            suffix = 'KB';
            convertedValue = (value / KB).toPrecision(3);
        }
        else {
            suffix = 'B';
            convertedValue = (value).toPrecision(3);
        }
        return convertedValue + ' ' + suffix;
    };
    DataUnitService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    DataUnitService.ctorParameters = function () { return []; };
    return DataUnitService;
}());
exports.DataUnitService = DataUnitService;
//# sourceMappingURL=data-unit.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TimeUnitPipe = /** @class */ (function () {
    function TimeUnitPipe() {
    }
    TimeUnitPipe.prototype.getDays = function (value) {
        var rate = 60 * 60 * 24;
        var count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' روز',
            remaining: value - count * rate
        };
    };
    TimeUnitPipe.prototype.getHours = function (value) {
        var rate = 60 * 60;
        var count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    };
    TimeUnitPipe.prototype.getMinuts = function (value) {
        var rate = 60;
        var count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    };
    TimeUnitPipe.prototype.getSeconds = function (value) {
        var count = Math.floor((value));
        return {
            count: count,
            value: count + ' ثانیه',
            remaining: value - count
        };
    };
    TimeUnitPipe.prototype.transform = function (value, exponent) {
        if (value === 0)
            return '0 دقیقه';
        if (!value)
            return '';
        var connector = ' و ';
        var daysData = this.getDays(value);
        var hoursData = this.getHours(daysData.remaining);
        var minutsData = this.getMinuts(hoursData.remaining);
        // let secondssData = this.getSeconds(minutsData.remaining);
        return [daysData, hoursData, minutsData]
            .filter(function (i) { return i.count; })
            .map(function (i) { return i.value; }).join(connector);
    };
    TimeUnitPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'timeUnit' },] },
    ];
    /** @nocollapse */
    TimeUnitPipe.ctorParameters = function () { return []; };
    return TimeUnitPipe;
}());
exports.TimeUnitPipe = TimeUnitPipe;
//# sourceMappingURL=time-unit.pipe.js.map
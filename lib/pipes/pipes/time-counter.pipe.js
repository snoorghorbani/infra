"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TimeCounterPipe = /** @class */ (function () {
    function TimeCounterPipe() {
    }
    TimeCounterPipe.prototype.getHours = function (value) {
        var rate = 60 * 60;
        var count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    };
    TimeCounterPipe.prototype.getMinuts = function (value) {
        var rate = 60;
        var count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    };
    TimeCounterPipe.prototype.getSeconds = function (value) {
        var count = Math.floor((value));
        return {
            count: count,
            value: count + ' ثانیه',
            remaining: value - count
        };
    };
    TimeCounterPipe.prototype.transform = function (value, exponent) {
        if (!value)
            return '';
        var connector = ' : ';
        // let daysData = this.getDays(value);
        var hoursData = this.getHours(value);
        var minutsData = this.getMinuts(hoursData.remaining);
        var secondssData = this.getSeconds(minutsData.remaining);
        return [secondssData, minutsData, hoursData]
            .map(function (i) { return i.count; }).join(connector);
    };
    TimeCounterPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'timeCounter' },] },
    ];
    /** @nocollapse */
    TimeCounterPipe.ctorParameters = function () { return []; };
    return TimeCounterPipe;
}());
exports.TimeCounterPipe = TimeCounterPipe;
//# sourceMappingURL=time-counter.pipe.js.map
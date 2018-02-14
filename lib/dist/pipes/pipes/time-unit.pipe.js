"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
class TimeUnitPipe {
    getDays(value) {
        let rate = 60 * 60 * 24;
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' روز',
            remaining: value - count * rate
        };
    }
    getHours(value) {
        let rate = 60 * 60;
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    }
    getMinuts(value) {
        let rate = 60;
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    }
    getSeconds(value) {
        let count = Math.floor((value));
        return {
            count,
            value: count + ' ثانیه',
            remaining: value - count
        };
    }
    transform(value, exponent) {
        if (value === 0)
            return '0 دقیقه';
        if (!value)
            return '';
        const connector = ' و ';
        let daysData = this.getDays(value);
        let hoursData = this.getHours(daysData.remaining);
        let minutsData = this.getMinuts(hoursData.remaining);
        // let secondssData = this.getSeconds(minutsData.remaining);
        return [daysData, hoursData, minutsData]
            .filter(i => i.count)
            .map(i => i.value).join(connector);
    }
}
TimeUnitPipe.decorators = [
    { type: core_1.Pipe, args: [{ name: 'timeUnit' },] },
];
/** @nocollapse */
TimeUnitPipe.ctorParameters = () => [];
exports.TimeUnitPipe = TimeUnitPipe;
//# sourceMappingURL=time-unit.pipe.js.map
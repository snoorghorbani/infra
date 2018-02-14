"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
class TimeCounterPipe {
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
        if (!value)
            return '';
        const connector = ' : ';
        // let daysData = this.getDays(value);
        let hoursData = this.getHours(value);
        let minutsData = this.getMinuts(hoursData.remaining);
        let secondssData = this.getSeconds(minutsData.remaining);
        return [secondssData, minutsData, hoursData]
            .map(i => i.count).join(connector);
    }
}
TimeCounterPipe.decorators = [
    { type: core_1.Pipe, args: [{ name: 'timeCounter' },] },
];
/** @nocollapse */
TimeCounterPipe.ctorParameters = () => [];
exports.TimeCounterPipe = TimeCounterPipe;
//# sourceMappingURL=time-counter.pipe.js.map
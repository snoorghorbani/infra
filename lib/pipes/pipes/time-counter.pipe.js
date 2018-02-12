"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let TimeCounterPipe = class TimeCounterPipe {
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
};
TimeCounterPipe = __decorate([
    core_1.Pipe({ name: 'timeCounter' })
], TimeCounterPipe);
exports.TimeCounterPipe = TimeCounterPipe;
//# sourceMappingURL=time-counter.pipe.js.map
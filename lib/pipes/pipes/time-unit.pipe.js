"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let TimeUnitPipe = class TimeUnitPipe {
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
        return [daysData, hoursData, minutsData /*, secondssData*/]
            .filter(i => i.count)
            .map(i => i.value).join(connector);
    }
};
TimeUnitPipe = __decorate([
    core_1.Pipe({ name: 'timeUnit' })
], TimeUnitPipe);
exports.TimeUnitPipe = TimeUnitPipe;
//# sourceMappingURL=time-unit.pipe.js.map
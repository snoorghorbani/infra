"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let DataUnitPipe = class DataUnitPipe {
    transform(value, exponent) {
        if (value == 0)
            return '0 بایت';
        if (value == null)
            return 'نامحدود';
        let B = 1;
        let KB = B * 1024;
        let MB = KB * 1024;
        let GB = MB * 1024;
        let convertedValue;
        let suffix = 'بایت';
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
    }
};
DataUnitPipe = __decorate([
    core_1.Pipe({ name: 'dataUnit' })
], DataUnitPipe);
exports.DataUnitPipe = DataUnitPipe;
//# sourceMappingURL=data-unit.pipe.js.map
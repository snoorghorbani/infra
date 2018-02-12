"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let DataUnitService = class DataUnitService {
    transform(value, exponent) {
        debugger;
        if (value == 0)
            return '0 B';
        if (value == null)
            return 'نامحدود';
        let B = 1;
        let KB = B * 1024;
        let MB = KB * 1024;
        let GB = MB * 1024;
        let convertedValue;
        let suffix = 'B';
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
    }
};
DataUnitService = __decorate([
    core_1.Injectable()
], DataUnitService);
exports.DataUnitService = DataUnitService;
//# sourceMappingURL=data-unit.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MatchValidator(destination) {
    return function (control) {
        if (!control.root.value)
            return;
        var destinationValue = control.root.value[destination];
        return (destinationValue == control.value)
            ? null
            : { key: "don't matched" };
    };
}
exports.MatchValidator = MatchValidator;
//# sourceMappingURL=match.validator.js.map
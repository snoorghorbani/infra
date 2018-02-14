"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MatchValidator(destination) {
    return (control) => {
        if (!control.root.value)
            return;
        let destinationValue = control.root.value[destination];
        return (destinationValue == control.value)
            ? null
            : { key: "don't matched" };
    };
}
exports.MatchValidator = MatchValidator;
//# sourceMappingURL=match.validator.js.map
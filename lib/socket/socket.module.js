"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var socket_service_1 = require("./socket.service");
var SocketModule = /** @class */ (function () {
    function SocketModule() {
    }
    SocketModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    providers: [
                        socket_service_1.SocketService
                    ],
                    declarations: [],
                    exports: []
                },] },
    ];
    /** @nocollapse */
    SocketModule.ctorParameters = function () { return []; };
    return SocketModule;
}());
exports.SocketModule = SocketModule;
//# sourceMappingURL=socket.module.js.map
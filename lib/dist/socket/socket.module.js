"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const socket_service_1 = require("./socket.service");
class SocketModule {
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
SocketModule.ctorParameters = () => [];
exports.SocketModule = SocketModule;
//# sourceMappingURL=socket.module.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import * as socketIo from 'socket.io-client';
var SERVER_URL = 'http://localhost:3000';
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.decorators = [
        { type: core_1.Injectable },
    ];
    // private socket:any;
    // public initSocket(): void {
    //     this.socket = socketIo(SERVER_URL);
    // }
    // public send(message: String): void {
    //     this.socket.emit('message', message);
    // }
    // public onMessage(): Observable<any> {
    //     return new Observable(observer => {
    //         this.socket.on('message', (data:any) => {
    //             observer.next(data);
    //         });
    //     });
    // }
    // public onConnect(): Observable<any> {
    //     return new Observable(observer => {
    //         this.socket.on('connect', () => observer.next());
    //     });
    // }
    // public onDisconnect(): Observable<any> {
    //     return new Observable(observer => {
    //         this.socket.on('disconnect', () => observer.next());
    //     });
    // }
    /** @nocollapse */
    SocketService.ctorParameters = function () { return []; };
    return SocketService;
}());
exports.SocketService = SocketService;
exports.SocketServiceStub = {};
//# sourceMappingURL=socket.service.js.map
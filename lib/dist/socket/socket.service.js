"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
// import * as socketIo from 'socket.io-client';
const SERVER_URL = 'http://localhost:3000';
class SocketService {
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
SocketService.ctorParameters = () => [];
exports.SocketService = SocketService;
exports.SocketServiceStub = {};
//# sourceMappingURL=socket.service.js.map
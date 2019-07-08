"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
void function () {
    return __awaiter(this, void 0, void 0, function* () {
        const app = new server_1.default();
        yield app.start();
    });
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUF1QztBQUN2QyxLQUFLOztRQUNELE1BQU0sR0FBRyxHQUFHLElBQUksZ0JBQWUsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7Q0FBQSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR29QaHlzaW9CYWNrRW5kIGZyb20gJy4vc2VydmVyJztcbnZvaWQgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXBwID0gbmV3IEdvUGh5c2lvQmFja0VuZCgpO1xuICAgIGF3YWl0IGFwcC5zdGFydCgpO1xufSgpOyJdfQ==
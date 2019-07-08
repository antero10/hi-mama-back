"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@overnightjs/core");
const logger_1 = require("../utils/logger");
let ClinicController = class ClinicController {
    add(req, res) {
        logger_1.default.info(req.body, true);
        return res.status(200).json({
            message: 'add_called',
        });
    }
};
__decorate([
    core_1.Post(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ClinicController.prototype, "add", null);
ClinicController = __decorate([
    core_1.Controller('clinic')
], ClinicController);
exports.ClinicController = ClinicController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpbmljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL0NsaW5pYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDRDQUF3RTtBQUV4RSw0Q0FBcUM7QUFHckMsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFHakIsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhO1FBQ25DLGdCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4QixPQUFPLEVBQUUsWUFBWTtTQUN4QixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQTtBQU5HO0lBREMsV0FBSSxFQUFFOzs7OzJDQU1OO0FBUlEsZ0JBQWdCO0lBRDVCLGlCQUFVLENBQUMsUUFBUSxDQUFDO0dBQ1IsZ0JBQWdCLENBUzVCO0FBVFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbGxlciwgIEdldCwgUG9zdCwgUHV0LCBEZWxldGUgfSBmcm9tICdAb3Zlcm5pZ2h0anMvY29yZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5AQ29udHJvbGxlcignY2xpbmljJylcbmV4cG9ydCBjbGFzcyBDbGluaWNDb250cm9sbGVyIHtcblxuICAgIEBQb3N0KClcbiAgICBwcml2YXRlIGFkZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgTG9nZ2VyLmluZm8ocmVxLmJvZHksIHRydWUpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogJ2FkZF9jYWxsZWQnLFxuICAgICAgICB9KTtcbiAgICB9XG59Il19
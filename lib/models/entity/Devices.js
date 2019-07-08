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
const typeorm_1 = require("typeorm");
const Clinics_1 = require("./Clinics");
let Devices = class Devices {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Devices.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Clinics_1.Clinics, Clinics => Clinics.devices),
    __metadata("design:type", Clinics_1.Clinics)
], Devices.prototype, "clinic", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Devices.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Devices.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Devices.prototype, "enable_pain_reports", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Devices.prototype, "enable_pain_assesment", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Devices.prototype, "force_device_offline", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Devices.prototype, "last_sync_time", void 0);
Devices = __decorate([
    typeorm_1.Entity()
], Devices);
exports.Devices = Devices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvZW50aXR5L0RldmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBNEU7QUFDNUUsdUNBQW9DO0FBR3BDLElBQWEsT0FBTyxHQUFwQixNQUFhLE9BQU87Q0F3Qm5CLENBQUE7QUF0QkM7SUFEQyxnQ0FBc0IsRUFBRTs7bUNBQ2Q7QUFHWDtJQURDLG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7OEJBQzdDLGlCQUFPO3VDQUFDO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs7cUNBQ0k7QUFHYjtJQURDLGdCQUFNLEVBQUU7O3VDQUNNO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOztvREFDb0I7QUFHN0I7SUFEQyxnQkFBTSxFQUFFOztzREFDc0I7QUFHL0I7SUFEQyxnQkFBTSxFQUFFOztxREFDcUI7QUFHOUI7SUFEQyxnQkFBTSxFQUFFOzhCQUNPLElBQUk7K0NBQUM7QUF2QlYsT0FBTztJQURuQixnQkFBTSxFQUFFO0dBQ0ksT0FBTyxDQXdCbkI7QUF4QlksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbiwgTWFueVRvT25lIH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBDbGluaWNzIH0gZnJvbSAnLi9DbGluaWNzJztcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgRGV2aWNlcyB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBATWFueVRvT25lKCgpID0+IENsaW5pY3MsIENsaW5pY3MgPT4gQ2xpbmljcy5kZXZpY2VzKVxuICBjbGluaWM6IENsaW5pY3M7XG5cbiAgQENvbHVtbigpXG4gIG5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKClcbiAgc3RhdHVzOiBzdHJpbmc7XG5cbiAgQENvbHVtbigpXG4gIGVuYWJsZV9wYWluX3JlcG9ydHM6IGJvb2xlYW47XG5cbiAgQENvbHVtbigpXG4gIGVuYWJsZV9wYWluX2Fzc2VzbWVudDogYm9vbGVhbjtcblxuICBAQ29sdW1uKClcbiAgZm9yY2VfZGV2aWNlX29mZmxpbmU6IGJvb2xlYW47XG5cbiAgQENvbHVtbigpXG4gIGxhc3Rfc3luY190aW1lOiBEYXRlO1xufVxuIl19
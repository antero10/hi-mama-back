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
const Devices_1 = require("./Devices");
let PatientStubs = class PatientStubs {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PatientStubs.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Clinics_1.Clinics, clinic => clinic.patientStubs),
    __metadata("design:type", Clinics_1.Clinics)
], PatientStubs.prototype, "clinic", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], PatientStubs.prototype, "active_program_start_date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], PatientStubs.prototype, "active_program_end_date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PatientStubs.prototype, "active_program_frequency", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PatientStubs.prototype, "status", void 0);
__decorate([
    typeorm_1.OneToOne(() => Devices_1.Devices),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Devices_1.Devices)
], PatientStubs.prototype, "device_assigned", void 0);
PatientStubs = __decorate([
    typeorm_1.Entity()
], PatientStubs);
exports.PatientStubs = PatientStubs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aWVudFN0dWJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9lbnRpdHkvUGF0aWVudFN0dWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQWlHO0FBQ2pHLHVDQUFvQztBQUNwQyx1Q0FBb0M7QUFLcEMsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtDQXdCeEIsQ0FBQTtBQXRCQztJQURDLGdDQUFzQixFQUFFOzt3Q0FDZDtBQUdYO0lBREMsbUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQzs4QkFDaEQsaUJBQU87NENBQUM7QUFHaEI7SUFEQyxnQkFBTSxFQUFFOzhCQUNrQixJQUFJOytEQUFDO0FBR2hDO0lBREMsZ0JBQU0sRUFBRTs4QkFDZ0IsSUFBSTs2REFBQztBQUc5QjtJQURDLGdCQUFNLEVBQUU7OEJBQ2lCLE1BQU07OERBQUM7QUFHakM7SUFEQyxnQkFBTSxFQUFFOzs0Q0FDSztBQUlkO0lBRkMsa0JBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBTyxDQUFDO0lBQ3ZCLG9CQUFVLEVBQUU7OEJBQ0ksaUJBQU87cURBQUM7QUFyQmQsWUFBWTtJQUR4QixnQkFBTSxFQUFFO0dBQ0ksWUFBWSxDQXdCeEI7QUF4Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIE1hbnlUb09uZSwgQ29sdW1uLCBPbmVUb09uZSwgSm9pbkNvbHVtbn0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBDbGluaWNzIH0gZnJvbSAnLi9DbGluaWNzJztcbmltcG9ydCB7IERldmljZXMgfSBmcm9tICcuL0RldmljZXMnO1xuXG5cblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgUGF0aWVudFN0dWJzIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBNYW55VG9PbmUoKCkgPT4gQ2xpbmljcywgY2xpbmljID0+IGNsaW5pYy5wYXRpZW50U3R1YnMpXG4gIGNsaW5pYzogQ2xpbmljcztcblxuICBAQ29sdW1uKClcbiAgYWN0aXZlX3Byb2dyYW1fc3RhcnRfZGF0ZTogRGF0ZTtcblxuICBAQ29sdW1uKClcbiAgYWN0aXZlX3Byb2dyYW1fZW5kX2RhdGU6IERhdGU7XG4gXG4gIEBDb2x1bW4oKVxuICBhY3RpdmVfcHJvZ3JhbV9mcmVxdWVuY3k6IE51bWJlcjtcblxuICBAQ29sdW1uKClcbiAgc3RhdHVzOiBzdHJpbmdcblxuICBAT25lVG9PbmUoKCkgPT4gRGV2aWNlcylcbiAgQEpvaW5Db2x1bW4oKVxuICBkZXZpY2VfYXNzaWduZWQ6IERldmljZXM7XG5cblxufSJdfQ==
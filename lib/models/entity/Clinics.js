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
const Devices_1 = require("./Devices");
const Treatments_1 = require("./Treatments");
const PorgramTemplates_1 = require("./PorgramTemplates");
const PainReports_1 = require("./PainReports");
const PatientStubs_1 = require("./PatientStubs");
let Clinics = class Clinics {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Clinics.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Clinics.prototype, "name", void 0);
__decorate([
    typeorm_1.Index({ unique: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Clinics.prototype, "subdomain", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Clinics.prototype, "address", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Clinics.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Clinics.prototype, "state_province", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Clinics.prototype, "postal_code", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Clinics.prototype, "phone_number", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Clinics.prototype, "fax_number", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Clinics.prototype, "country", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Clinics.prototype, "clinic_user_tv_api_key", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Clinics.prototype, "foto_api_key", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Clinics.prototype, "enable_pain_reports", void 0);
__decorate([
    typeorm_1.Column({
        default: 0.66,
    }),
    __metadata("design:type", Number)
], Clinics.prototype, "rep_hold_success_threshold", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Clinics.prototype, "has_insurance", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Clinics.prototype, "has_policy_holder", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Clinics.prototype, "has_primary_care", void 0);
__decorate([
    typeorm_1.OneToMany(() => Devices_1.Devices, Devices => Devices.clinic),
    __metadata("design:type", Array)
], Clinics.prototype, "devices", void 0);
__decorate([
    typeorm_1.OneToMany(() => Treatments_1.Treatments, Treatments => Treatments),
    __metadata("design:type", Array)
], Clinics.prototype, "treatments", void 0);
__decorate([
    typeorm_1.OneToMany(() => PorgramTemplates_1.ProgramTemplates, template => template.clinic),
    __metadata("design:type", Array)
], Clinics.prototype, "programTemplates", void 0);
__decorate([
    typeorm_1.OneToMany(() => PainReports_1.PainReports, pain => pain.clinic),
    __metadata("design:type", Array)
], Clinics.prototype, "painReports", void 0);
__decorate([
    typeorm_1.OneToMany(() => PatientStubs_1.PatientStubs, stubs => stubs.clinic),
    __metadata("design:type", Array)
], Clinics.prototype, "patientStubs", void 0);
Clinics = __decorate([
    typeorm_1.Entity()
], Clinics);
exports.Clinics = Clinics;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpbmljcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvZW50aXR5L0NsaW5pY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0Y7QUFFbEYsdUNBQW9DO0FBQ3BDLDZDQUEwQztBQUMxQyx5REFBc0Q7QUFDdEQsK0NBQTRDO0FBQzVDLGlEQUE4QztBQUc5QyxJQUFhLE9BQU8sR0FBcEIsTUFBYSxPQUFPO0NBd0VuQixDQUFBO0FBdEVDO0lBREMsZ0NBQXNCLEVBQUU7O21DQUNkO0FBR1g7SUFEQyxnQkFBTSxFQUFFOzhCQUNILE1BQU07cUNBQUM7QUFJYjtJQUZDLGVBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN2QixnQkFBTSxFQUFFOzhCQUNFLE1BQU07MENBQUM7QUFHbEI7SUFEQyxnQkFBTSxFQUFFOzhCQUNBLE1BQU07d0NBQUM7QUFHaEI7SUFEQyxnQkFBTSxFQUFFOzhCQUNILE1BQU07cUNBQUM7QUFHYjtJQURDLGdCQUFNLEVBQUU7OEJBQ08sTUFBTTsrQ0FBQztBQUd2QjtJQURDLGdCQUFNLEVBQUU7OEJBQ0ksTUFBTTs0Q0FBQztBQUdwQjtJQURDLGdCQUFNLEVBQUU7OEJBQ0ssTUFBTTs2Q0FBQztBQUdyQjtJQURDLGdCQUFNLEVBQUU7OEJBQ0csTUFBTTsyQ0FBQztBQUduQjtJQURDLGdCQUFNLEVBQUU7OEJBQ0EsTUFBTTt3Q0FBQztBQUdoQjtJQURDLGdCQUFNLEVBQUU7OEJBQ2UsTUFBTTt1REFBQztBQUcvQjtJQURDLGdCQUFNLEVBQUU7OEJBQ0ssTUFBTTs2Q0FBQztBQUdyQjtJQURDLGdCQUFNLEVBQUU7OEJBQ1ksT0FBTztvREFBQztBQUs3QjtJQUhDLGdCQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUM7OEJBQzBCLE1BQU07MkRBQUM7QUFHbkM7SUFEQyxnQkFBTSxFQUFFOzhCQUNNLE9BQU87OENBQUM7QUFHdkI7SUFEQyxnQkFBTSxFQUFFOzhCQUNVLE9BQU87a0RBQUM7QUFHM0I7SUFEQyxnQkFBTSxFQUFFOzhCQUNTLE9BQU87aURBQUM7QUFHMUI7SUFEQyxtQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOzt3Q0FDakM7QUFHbkI7SUFEQyxtQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7OzJDQUNoQztBQUd0QjtJQURDLG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsbUNBQWdCLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOztpREFDMUI7QUFHckM7SUFEQyxtQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOzs0Q0FDbEI7QUFHaEM7SUFEQyxtQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLDJCQUFZLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDOzs2Q0FDeEI7QUFwRWxCLE9BQU87SUFEbkIsZ0JBQU0sRUFBRTtHQUNJLE9BQU8sQ0F3RW5CO0FBeEVZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW4sIEluZGV4LCBPbmVUb01hbnl9IGZyb20gJ3R5cGVvcm0nO1xuXG5pbXBvcnQgeyBEZXZpY2VzIH0gZnJvbSAnLi9EZXZpY2VzJztcbmltcG9ydCB7IFRyZWF0bWVudHMgfSBmcm9tICcuL1RyZWF0bWVudHMnO1xuaW1wb3J0IHsgUHJvZ3JhbVRlbXBsYXRlcyB9IGZyb20gJy4vUG9yZ3JhbVRlbXBsYXRlcyc7XG5pbXBvcnQgeyBQYWluUmVwb3J0cyB9IGZyb20gJy4vUGFpblJlcG9ydHMnO1xuaW1wb3J0IHsgUGF0aWVudFN0dWJzIH0gZnJvbSAnLi9QYXRpZW50U3R1YnMnO1xuXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBDbGluaWNzIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oKVxuICBuYW1lOiBTdHJpbmc7XG5cbiAgQEluZGV4KHsgdW5pcXVlOiB0cnVlIH0pXG4gIEBDb2x1bW4oKVxuICBzdWJkb21haW46IFN0cmluZztcblxuICBAQ29sdW1uKClcbiAgYWRkcmVzczogU3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBjaXR5OiBTdHJpbmc7XG5cbiAgQENvbHVtbigpXG4gIHN0YXRlX3Byb3ZpbmNlOiBTdHJpbmc7XG5cbiAgQENvbHVtbigpXG4gIHBvc3RhbF9jb2RlOiBTdHJpbmc7XG5cbiAgQENvbHVtbigpXG4gIHBob25lX251bWJlcjogU3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBmYXhfbnVtYmVyOiBTdHJpbmc7XG5cbiAgQENvbHVtbigpXG4gIGNvdW50cnk6IFN0cmluZztcblxuICBAQ29sdW1uKClcbiAgY2xpbmljX3VzZXJfdHZfYXBpX2tleTogU3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBmb3RvX2FwaV9rZXk6IFN0cmluZztcblxuICBAQ29sdW1uKClcbiAgZW5hYmxlX3BhaW5fcmVwb3J0czogQm9vbGVhbjtcblxuICBAQ29sdW1uKHtcbiAgICBkZWZhdWx0OiAwLjY2LFxuICB9KVxuICByZXBfaG9sZF9zdWNjZXNzX3RocmVzaG9sZDogTnVtYmVyO1xuXG4gIEBDb2x1bW4oKVxuICBoYXNfaW5zdXJhbmNlOiBCb29sZWFuO1xuXG4gIEBDb2x1bW4oKVxuICBoYXNfcG9saWN5X2hvbGRlcjogQm9vbGVhbjtcblxuICBAQ29sdW1uKClcbiAgaGFzX3ByaW1hcnlfY2FyZTogQm9vbGVhbjtcblxuICBAT25lVG9NYW55KCgpID0+IERldmljZXMsIERldmljZXMgPT4gRGV2aWNlcy5jbGluaWMpXG4gIGRldmljZXM6IERldmljZXNbXTtcblxuICBAT25lVG9NYW55KCgpID0+IFRyZWF0bWVudHMsIFRyZWF0bWVudHMgPT4gVHJlYXRtZW50cylcbiAgdHJlYXRtZW50czogRGV2aWNlc1tdO1xuXG4gIEBPbmVUb01hbnkoKCkgPT4gUHJvZ3JhbVRlbXBsYXRlcywgdGVtcGxhdGUgPT4gdGVtcGxhdGUuY2xpbmljKVxuICBwcm9ncmFtVGVtcGxhdGVzOiBQcm9ncmFtVGVtcGxhdGVzW107XG5cbiAgQE9uZVRvTWFueSgoKSA9PiBQYWluUmVwb3J0cywgcGFpbiA9PiBwYWluLmNsaW5pYylcbiAgcGFpblJlcG9ydHM6IFByb2dyYW1UZW1wbGF0ZXNbXTtcblxuICBAT25lVG9NYW55KCgpID0+IFBhdGllbnRTdHVicywgc3R1YnMgPT4gc3R1YnMuY2xpbmljKVxuICBwYXRpZW50U3R1YnM6IFBhdGllbnRTdHVic1tdO1xuXG5cblxufVxuIl19
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
const Treatments_1 = require("./Treatments");
const Excersises_1 = require("./Excersises");
let PainReports = class PainReports {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PainReports.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PainReports.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], PainReports.prototype, "occurrence_time", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PainReports.prototype, "reps_completed_before_pain", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Treatments_1.Treatments, treatment => treatment.painReports),
    __metadata("design:type", Treatments_1.Treatments)
], PainReports.prototype, "treatment", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Clinics_1.Clinics, clinic => clinic.painReports),
    __metadata("design:type", Clinics_1.Clinics)
], PainReports.prototype, "clinic", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Excersises_1.Excersises, excersise => excersise.painReports),
    __metadata("design:type", Excersises_1.Excersises)
], PainReports.prototype, "excersise", void 0);
PainReports = __decorate([
    typeorm_1.Entity()
], PainReports);
exports.PainReports = PainReports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFpblJlcG9ydHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL2VudGl0eS9QYWluUmVwb3J0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUE0RTtBQUM1RSx1Q0FBb0M7QUFDcEMsNkNBQTBDO0FBQzFDLDZDQUEwQztBQUkxQyxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0NBMEJ2QixDQUFBO0FBdkJHO0lBREMsZ0NBQXNCLEVBQUU7O3VDQUNkO0FBSVg7SUFEQyxnQkFBTSxFQUFFOzsyQ0FDTTtBQUlmO0lBREMsZ0JBQU0sRUFBRTs4QkFDUSxJQUFJO29EQUFDO0FBR3RCO0lBREMsZ0JBQU0sRUFBRTs4QkFDbUIsTUFBTTsrREFBQztBQUduQztJQURDLG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQVUsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQ3JELHVCQUFVOzhDQUFDO0FBR3RCO0lBREMsbUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs4QkFDL0MsaUJBQU87MkNBQUM7QUFHaEI7SUFEQyxtQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUFVLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDOzhCQUNyRCx1QkFBVTs4Q0FBQztBQXZCYixXQUFXO0lBRHZCLGdCQUFNLEVBQUU7R0FDSSxXQUFXLENBMEJ2QjtBQTFCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgQ29sdW1uLCBNYW55VG9PbmUgfSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IENsaW5pY3MgfSBmcm9tICcuL0NsaW5pY3MnO1xuaW1wb3J0IHsgVHJlYXRtZW50cyB9IGZyb20gJy4vVHJlYXRtZW50cyc7XG5pbXBvcnQgeyBFeGNlcnNpc2VzIH0gZnJvbSAnLi9FeGNlcnNpc2VzJztcblxuXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBQYWluUmVwb3J0cyB7XG4gIFxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgICBpZDogbnVtYmVyO1xuXG5cbiAgICBAQ29sdW1uKClcbiAgICBzdGF0dXM6IHN0cmluZztcblxuXG4gICAgQENvbHVtbigpXG4gICAgb2NjdXJyZW5jZV90aW1lOiBEYXRlO1xuXG4gICAgQENvbHVtbigpXG4gICAgcmVwc19jb21wbGV0ZWRfYmVmb3JlX3BhaW46IE51bWJlcjtcblxuICAgIEBNYW55VG9PbmUoKCkgPT4gVHJlYXRtZW50cywgdHJlYXRtZW50ID0+IHRyZWF0bWVudC5wYWluUmVwb3J0cylcbiAgICB0cmVhdG1lbnQ6IFRyZWF0bWVudHM7XG5cbiAgICBATWFueVRvT25lKCgpID0+IENsaW5pY3MsIGNsaW5pYyA9PiBjbGluaWMucGFpblJlcG9ydHMpXG4gICAgY2xpbmljOiBDbGluaWNzO1xuXG4gICAgQE1hbnlUb09uZSgoKSA9PiBFeGNlcnNpc2VzLCBleGNlcnNpc2UgPT4gZXhjZXJzaXNlLnBhaW5SZXBvcnRzKVxuICAgIGV4Y2Vyc2lzZTogRXhjZXJzaXNlcztcblxuXG59XG4iXX0=
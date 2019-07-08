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
const Programs_1 = require("./Programs");
const PainReports_1 = require("./PainReports");
let Treatments = class Treatments {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Treatments.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Treatments.prototype, "start_date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Treatments.prototype, "end_date", void 0);
__decorate([
    typeorm_1.Column({
        default: 0,
    }),
    __metadata("design:type", Number)
], Treatments.prototype, "sessions_completed", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Treatments.prototype, "program_ended_message_to_patient", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Treatments.prototype, "enable_pain_assessment", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Treatments.prototype, "enable_pain_reports", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Treatments.prototype, "force_device_offline", void 0);
__decorate([
    typeorm_1.OneToMany(() => Programs_1.Programs, program => program.treatment),
    __metadata("design:type", Array)
], Treatments.prototype, "programs", void 0);
__decorate([
    typeorm_1.OneToMany(() => PainReports_1.PainReports, pain => pain.treatment),
    __metadata("design:type", Array)
], Treatments.prototype, "painReports", void 0);
Treatments = __decorate([
    typeorm_1.Entity()
], Treatments);
exports.Treatments = Treatments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJlYXRtZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvZW50aXR5L1RyZWF0bWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBNEU7QUFDNUUseUNBQW9DO0FBQ3BDLCtDQUEwQztBQUcxQyxJQUFjLFVBQVUsR0FBeEIsTUFBYyxVQUFVO0NBa0N2QixDQUFBO0FBaENDO0lBREMsZ0NBQXNCLEVBQUU7O3NDQUNkO0FBR1g7SUFEQyxnQkFBTSxFQUFFOzhCQUNHLElBQUk7OENBQUM7QUFHakI7SUFEQyxnQkFBTSxFQUFFOzhCQUNDLElBQUk7NENBQUM7QUFLZjtJQUhDLGdCQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQztLQUNYLENBQUM7OEJBQ2tCLE1BQU07c0RBQUM7QUFHM0I7SUFEQyxnQkFBTSxFQUFFOzhCQUN5QixNQUFNO29FQUFDO0FBR3pDO0lBREMsZ0JBQU0sRUFBRTs4QkFDZSxPQUFPOzBEQUFDO0FBR2hDO0lBREMsZ0JBQU0sRUFBRTs4QkFDWSxPQUFPO3VEQUFDO0FBRzdCO0lBREMsZ0JBQU0sRUFBRTs4QkFDYSxPQUFPO3dEQUFDO0FBRzlCO0lBREMsbUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzs7NENBQ3BDO0FBR3BCO0lBREMsbUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7K0NBQzNCO0FBL0JkLFVBQVU7SUFEdkIsZ0JBQU0sRUFBRTtHQUNLLFVBQVUsQ0FrQ3ZCO0FBbENhLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW4sIE9uZVRvTWFueSB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHtQcm9ncmFtc30gZnJvbSAnLi9Qcm9ncmFtcyc7XG5pbXBvcnQge1BhaW5SZXBvcnRzfSBmcm9tICcuL1BhaW5SZXBvcnRzJztcblxuQEVudGl0eSgpXG5leHBvcnQgIGNsYXNzIFRyZWF0bWVudHMge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbigpXG4gIHN0YXJ0X2RhdGU6IERhdGU7XG5cbiAgQENvbHVtbigpXG4gIGVuZF9kYXRlOiBEYXRlO1xuXG4gIEBDb2x1bW4oe1xuICAgIGRlZmF1bHQ6IDAsXG4gIH0pXG4gIHNlc3Npb25zX2NvbXBsZXRlZDogTnVtYmVyO1xuXG4gIEBDb2x1bW4oKVxuICBwcm9ncmFtX2VuZGVkX21lc3NhZ2VfdG9fcGF0aWVudDogU3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBlbmFibGVfcGFpbl9hc3Nlc3NtZW50OiBCb29sZWFuO1xuXG4gIEBDb2x1bW4oKVxuICBlbmFibGVfcGFpbl9yZXBvcnRzOiBCb29sZWFuO1xuXG4gIEBDb2x1bW4oKVxuICBmb3JjZV9kZXZpY2Vfb2ZmbGluZTogQm9vbGVhbjtcblxuICBAT25lVG9NYW55KCgpID0+IFByb2dyYW1zLCBwcm9ncmFtID0+IHByb2dyYW0udHJlYXRtZW50KVxuICBwcm9ncmFtczogUHJvZ3JhbXNbXVxuXG4gIEBPbmVUb01hbnkoKCkgPT4gUGFpblJlcG9ydHMsIHBhaW4gPT4gcGFpbi50cmVhdG1lbnQpXG4gIHBhaW5SZXBvcnRzOiBQYWluUmVwb3J0c1tdXG5cbiAgXG59XG4iXX0=
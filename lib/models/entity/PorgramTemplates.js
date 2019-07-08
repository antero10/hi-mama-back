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
const Programs_1 = require("./Programs");
let ProgramTemplates = class ProgramTemplates {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProgramTemplates.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProgramTemplates.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProgramTemplates.prototype, "frequency", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProgramTemplates.prototype, "default_reps_per_set", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProgramTemplates.prototype, "default_hold_time", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Clinics_1.Clinics, clinic => clinic.programTemplates),
    __metadata("design:type", Clinics_1.Clinics)
], ProgramTemplates.prototype, "clinic", void 0);
__decorate([
    typeorm_1.OneToOne(() => Programs_1.Programs),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Programs_1.Programs)
], ProgramTemplates.prototype, "program", void 0);
ProgramTemplates = __decorate([
    typeorm_1.Entity()
], ProgramTemplates);
exports.ProgramTemplates = ProgramTemplates;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9yZ3JhbVRlbXBsYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvZW50aXR5L1BvcmdyYW1UZW1wbGF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0c7QUFDbEcsdUNBQW9DO0FBQ3BDLHlDQUFzQztBQUl0QyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQTBCNUIsQ0FBQTtBQXhCQztJQURDLGdDQUFzQixFQUFFOzs0Q0FDZDtBQUlYO0lBREMsZ0JBQU0sRUFBRTs7OENBQ0k7QUFJYjtJQURDLGdCQUFNLEVBQUU7OEJBQ0UsTUFBTTttREFBQztBQUdsQjtJQURDLGdCQUFNLEVBQUU7OEJBQ2EsTUFBTTs4REFBQztBQUc3QjtJQURDLGdCQUFNLEVBQUU7OEJBQ1UsTUFBTTsyREFBQztBQUcxQjtJQURDLG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQzs4QkFDcEQsaUJBQU87Z0RBQUM7QUFJaEI7SUFGQyxrQkFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFRLENBQUM7SUFDeEIsb0JBQVUsRUFBRTs4QkFDSixtQkFBUTtpREFBQztBQXZCUCxnQkFBZ0I7SUFENUIsZ0JBQU0sRUFBRTtHQUNJLGdCQUFnQixDQTBCNUI7QUExQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW4sIE1hbnlUb09uZSwgSm9pbkNvbHVtbiwgT25lVG9PbmUgfSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IENsaW5pY3MgfSBmcm9tICcuL0NsaW5pY3MnO1xuaW1wb3J0IHsgUHJvZ3JhbXMgfSBmcm9tICcuL1Byb2dyYW1zJztcblxuXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBQcm9ncmFtVGVtcGxhdGVzIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIFxuICBAQ29sdW1uKClcbiAgbmFtZTogc3RyaW5nO1xuXG5cbiAgQENvbHVtbigpXG4gIGZyZXF1ZW5jeTogTnVtYmVyO1xuXG4gIEBDb2x1bW4oKVxuICBkZWZhdWx0X3JlcHNfcGVyX3NldDogTnVtYmVyO1xuXG4gIEBDb2x1bW4oKVxuICBkZWZhdWx0X2hvbGRfdGltZTogTnVtYmVyO1xuICBcbiAgQE1hbnlUb09uZSgoKSA9PiBDbGluaWNzLCBjbGluaWMgPT4gY2xpbmljLnByb2dyYW1UZW1wbGF0ZXMpXG4gIGNsaW5pYzogQ2xpbmljcztcblxuICBAT25lVG9PbmUoKCkgPT4gUHJvZ3JhbXMpXG4gIEBKb2luQ29sdW1uKClcbiAgcHJvZ3JhbTogUHJvZ3JhbXM7XG5cblxufVxuIl19
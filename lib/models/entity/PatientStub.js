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
const PainsItems_1 = require("./PainsItems");
let PatientStubs = class PatientStubs {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PatientStubs.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToMany(() => PainsItems_1.PainsItems, items => items.pain),
    __metadata("design:type", PainsItems_1.PainsItems)
], PatientStubs.prototype, "items", void 0);
PatientStubs = __decorate([
    typeorm_1.Entity()
], PatientStubs);
exports.PatientStubs = PatientStubs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aWVudFN0dWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL2VudGl0eS9QYXRpZW50U3R1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUFtRTtBQUNuRSw2Q0FBd0M7QUFHeEMsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtDQU14QixDQUFBO0FBSkM7SUFEQyxnQ0FBc0IsRUFBRTs7d0NBQ2Q7QUFHWDtJQURDLG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7OEJBQzFDLHVCQUFVOzJDQUFBO0FBTE4sWUFBWTtJQUR4QixnQkFBTSxFQUFFO0dBQ0ksWUFBWSxDQU14QjtBQU5ZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBPbmVUb01hbnl9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHtQYWluc0l0ZW1zfSBmcm9tICcuL1BhaW5zSXRlbXMnO1xuXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBQYXRpZW50U3R1YnMge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQE9uZVRvTWFueSgoKSA9PiBQYWluc0l0ZW1zLCBpdGVtcyA9PiBpdGVtcy5wYWluKVxuICBpdGVtczogUGFpbnNJdGVtc1xufSJdfQ==
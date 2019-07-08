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
const Treatments_1 = require("./Treatments");
const Excersises_1 = require("./Excersises");
let Programs = class Programs {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Programs.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Treatments_1.Treatments, treatment => treatment.programs),
    __metadata("design:type", Treatments_1.Treatments)
], Programs.prototype, "treatment", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Programs.prototype, "program_group_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Programs.prototype, "start_date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Programs.prototype, "end_date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Programs.prototype, "frequency", void 0);
__decorate([
    typeorm_1.OneToMany(() => Excersises_1.Excersises, excersise => excersise.program),
    __metadata("design:type", Array)
], Programs.prototype, "excersises", void 0);
Programs = __decorate([
    typeorm_1.Entity()
], Programs);
exports.Programs = Programs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3JhbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL2VudGl0eS9Qcm9ncmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUF1RjtBQUN2Riw2Q0FBMEM7QUFDMUMsNkNBQXdDO0FBR3hDLElBQWEsUUFBUSxHQUFyQixNQUFhLFFBQVE7Q0FzQnBCLENBQUE7QUFwQkM7SUFEQyxnQ0FBc0IsRUFBRTs7b0NBQ2Q7QUFHWDtJQURDLG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQVUsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7OEJBQ2xELHVCQUFVOzJDQUFDO0FBR3RCO0lBREMsZ0JBQU0sRUFBRTs7a0RBQ2dCO0FBR3pCO0lBREMsZ0JBQU0sRUFBRTs4QkFDRyxJQUFJOzRDQUFDO0FBR2pCO0lBREMsZ0JBQU0sRUFBRTs4QkFDQyxJQUFJOzBDQUFDO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOzhCQUNFLE1BQU07MkNBQUM7QUFHbEI7SUFEQyxtQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUFVLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDOzs0Q0FDcEM7QUFwQmIsUUFBUTtJQURwQixnQkFBTSxFQUFFO0dBQ0ksUUFBUSxDQXNCcEI7QUF0QlksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbiwgTWFueVRvT25lLCBPbmVUb01hbnkgfSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IFRyZWF0bWVudHMgfSBmcm9tICcuL1RyZWF0bWVudHMnO1xuaW1wb3J0IHtFeGNlcnNpc2VzfSBmcm9tICcuL0V4Y2Vyc2lzZXMnO1xuXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBQcm9ncmFtcyB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBATWFueVRvT25lKCgpID0+IFRyZWF0bWVudHMsIHRyZWF0bWVudCA9PiB0cmVhdG1lbnQucHJvZ3JhbXMpXG4gIHRyZWF0bWVudDogVHJlYXRtZW50cztcblxuICBAQ29sdW1uKClcbiAgcHJvZ3JhbV9ncm91cF9pZDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBzdGFydF9kYXRlOiBEYXRlO1xuXG4gIEBDb2x1bW4oKVxuICBlbmRfZGF0ZTogRGF0ZTtcblxuICBAQ29sdW1uKClcbiAgZnJlcXVlbmN5OiBOdW1iZXI7XG4gIFxuICBAT25lVG9NYW55KCgpID0+IEV4Y2Vyc2lzZXMsIGV4Y2Vyc2lzZSA9PiBleGNlcnNpc2UucHJvZ3JhbSlcbiAgZXhjZXJzaXNlczogRXhjZXJzaXNlc1tdXG4gIFxufVxuIl19
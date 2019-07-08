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
const Pains_1 = require("./Pains");
let PainItems = class PainItems {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PainItems.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PainItems.prototype, "index", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PainItems.prototype, "level", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Pains_1.Pains, pain => pain.items),
    __metadata("design:type", Pains_1.Pains)
], PainItems.prototype, "pain", void 0);
PainItems = __decorate([
    typeorm_1.Entity()
], PainItems);
exports.PainItems = PainItems;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFpbkl0ZW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9lbnRpdHkvUGFpbkl0ZW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQTJFO0FBRTNFLG1DQUE4QjtBQUc5QixJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFTO0NBWXJCLENBQUE7QUFWQztJQURDLGdDQUFzQixFQUFFOztxQ0FDZDtBQUdYO0lBREMsZ0JBQU0sRUFBRTs4QkFDRixNQUFNO3dDQUFBO0FBR2I7SUFEQyxnQkFBTSxFQUFFOzhCQUNGLE1BQU07d0NBQUE7QUFHYjtJQURDLG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs4QkFDckMsYUFBSzt1Q0FBQTtBQVhBLFNBQVM7SUFEckIsZ0JBQU0sRUFBRTtHQUNJLFNBQVMsQ0FZckI7QUFaWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgQ29sdW1uLCBNYW55VG9PbmV9IGZyb20gJ3R5cGVvcm0nO1xuXG5pbXBvcnQge1BhaW5zfSBmcm9tICcuL1BhaW5zJztcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgUGFpbkl0ZW1zIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oKVxuICBpbmRleDogTnVtYmVyXG5cbiAgQENvbHVtbigpXG4gIGxldmVsOiBOdW1iZXJcblxuICBATWFueVRvT25lKCgpID0+IFBhaW5zLCBwYWluID0+IHBhaW4uaXRlbXMpXG4gIHBhaW46IFBhaW5zXG59Il19
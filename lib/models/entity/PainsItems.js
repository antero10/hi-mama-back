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
let PainsItems = class PainsItems {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PainsItems.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PainsItems.prototype, "index", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PainsItems.prototype, "level", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Pains_1.Pains, pain => pain.items),
    __metadata("design:type", Pains_1.Pains)
], PainsItems.prototype, "pain", void 0);
PainsItems = __decorate([
    typeorm_1.Entity()
], PainsItems);
exports.PainsItems = PainsItems;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFpbnNJdGVtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvZW50aXR5L1BhaW5zSXRlbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBMkU7QUFFM0UsbUNBQThCO0FBRzlCLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7Q0FZdEIsQ0FBQTtBQVZDO0lBREMsZ0NBQXNCLEVBQUU7O3NDQUNkO0FBR1g7SUFEQyxnQkFBTSxFQUFFOzhCQUNGLE1BQU07eUNBQUE7QUFHYjtJQURDLGdCQUFNLEVBQUU7OEJBQ0YsTUFBTTt5Q0FBQTtBQUdiO0lBREMsbUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOzhCQUNyQyxhQUFLO3dDQUFBO0FBWEEsVUFBVTtJQUR0QixnQkFBTSxFQUFFO0dBQ0ksVUFBVSxDQVl0QjtBQVpZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW4sIE1hbnlUb09uZX0gZnJvbSAndHlwZW9ybSc7XG5cbmltcG9ydCB7UGFpbnN9IGZyb20gJy4vUGFpbnMnO1xuXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBQYWluc0l0ZW1zIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oKVxuICBpbmRleDogTnVtYmVyXG5cbiAgQENvbHVtbigpXG4gIGxldmVsOiBOdW1iZXJcblxuICBATWFueVRvT25lKCgpID0+IFBhaW5zLCBwYWluID0+IHBhaW4uaXRlbXMpXG4gIHBhaW46IFBhaW5zXG59Il19
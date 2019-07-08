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
const PainItems_1 = require("./PainItems");
let Pains = class Pains {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Pains.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToMany(() => PainItems_1.PainItems, items => items.pain),
    __metadata("design:type", Array)
], Pains.prototype, "items", void 0);
Pains = __decorate([
    typeorm_1.Entity()
], Pains);
exports.Pains = Pains;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFpbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL2VudGl0eS9QYWlucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUFtRTtBQUNuRSwyQ0FBc0M7QUFHdEMsSUFBYSxLQUFLLEdBQWxCLE1BQWEsS0FBSztDQU1qQixDQUFBO0FBSkM7SUFEQyxnQ0FBc0IsRUFBRTs7aUNBQ2Q7QUFHWDtJQURDLG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQVMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7O29DQUM5QjtBQUxQLEtBQUs7SUFEakIsZ0JBQU0sRUFBRTtHQUNJLEtBQUssQ0FNakI7QUFOWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgT25lVG9NYW55fSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7UGFpbkl0ZW1zfSBmcm9tICcuL1BhaW5JdGVtcyc7XG5cbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIFBhaW5zIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBPbmVUb01hbnkoKCkgPT4gUGFpbkl0ZW1zLCBpdGVtcyA9PiBpdGVtcy5wYWluKVxuICBpdGVtczogUGFpbkl0ZW1zW11cbn0iXX0=
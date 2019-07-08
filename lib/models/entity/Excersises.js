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
let Excersises = class Excersises {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Excersises.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Excersises.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Excersises.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Excersises.prototype, "key", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Excersises.prototype, "tags", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Excersises.prototype, "related_cdn_links_image", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Excersises.prototype, "related_cdn_links_video", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Excersises.prototype, "related_cdn_links_icon", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Programs_1.Programs, program => program.excersises),
    __metadata("design:type", Programs_1.Programs)
], Excersises.prototype, "program", void 0);
__decorate([
    typeorm_1.OneToMany(() => PainReports_1.PainReports, pain => pain.excersise),
    __metadata("design:type", Array)
], Excersises.prototype, "painReports", void 0);
Excersises = __decorate([
    typeorm_1.Entity()
], Excersises);
exports.Excersises = Excersises;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjZXJzaXNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvZW50aXR5L0V4Y2Vyc2lzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBdUY7QUFDdkYseUNBQW9DO0FBQ3BDLCtDQUE0QztBQUc1QyxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBaUN0QixDQUFBO0FBL0JDO0lBREMsZ0NBQXNCLEVBQUU7O3NDQUNkO0FBR1g7SUFEQyxnQkFBTSxFQUFFOzhCQUNILE1BQU07d0NBQUM7QUFHYjtJQURDLGdCQUFNLEVBQUU7OEJBQ0ksTUFBTTsrQ0FBQztBQUdwQjtJQURDLGdCQUFNLEVBQUU7OEJBQ0osTUFBTTt1Q0FBQTtBQUdYO0lBREMsZ0JBQU0sRUFBRTs4QkFDSCxNQUFNO3dDQUFBO0FBR1o7SUFEQyxnQkFBTSxFQUFFOzhCQUNnQixNQUFNOzJEQUFBO0FBRy9CO0lBREMsZ0JBQU0sRUFBRTs4QkFDZ0IsTUFBTTsyREFBQTtBQUcvQjtJQURDLGdCQUFNLEVBQUU7OEJBQ2UsTUFBTTswREFBQTtBQUc5QjtJQURDLG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7OEJBQ2hELG1CQUFROzJDQUFBO0FBR2pCO0lBREMsbUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7K0NBQzFCO0FBN0JoQixVQUFVO0lBRHRCLGdCQUFNLEVBQUU7R0FDSSxVQUFVLENBaUN0QjtBQWpDWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgQ29sdW1uLCBNYW55VG9PbmUsIE9uZVRvTWFueSB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHtQcm9ncmFtc30gZnJvbSAnLi9Qcm9ncmFtcyc7XG5pbXBvcnQgeyBQYWluUmVwb3J0cyB9IGZyb20gJy4vUGFpblJlcG9ydHMnOyBcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgRXhjZXJzaXNlcyB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKClcbiAgbmFtZTogU3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBkZXNjcmlwdGlvbjogU3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBrZXk6IFN0cmluZ1xuXG4gIEBDb2x1bW4oKVxuICB0YWdzOiBTdHJpbmdcblxuICBAQ29sdW1uKClcbiAgcmVsYXRlZF9jZG5fbGlua3NfaW1hZ2U6IFN0cmluZ1xuXG4gIEBDb2x1bW4oKVxuICByZWxhdGVkX2Nkbl9saW5rc192aWRlbzogU3RyaW5nXG5cbiAgQENvbHVtbigpXG4gIHJlbGF0ZWRfY2RuX2xpbmtzX2ljb246IFN0cmluZ1xuIFxuICBATWFueVRvT25lKCgpID0+IFByb2dyYW1zLCBwcm9ncmFtID0+IHByb2dyYW0uZXhjZXJzaXNlcylcbiAgcHJvZ3JhbTogUHJvZ3JhbXNcblxuICBAT25lVG9NYW55KCgpID0+IFBhaW5SZXBvcnRzLCBwYWluID0+IHBhaW4uZXhjZXJzaXNlKVxuICBwYWluUmVwb3J0czogUGFpblJlcG9ydHNbXTtcbiAgXG5cblxufVxuIl19
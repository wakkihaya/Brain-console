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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrainwavesController = void 0;
const common_1 = require("@nestjs/common");
const brainwaves_service_1 = require("../services/brainwaves.service");
let BrainwavesController = class BrainwavesController {
    constructor(brainwavesService) {
        this.brainwavesService = brainwavesService;
    }
    getBrainwaves() {
        return this.brainwavesService.getBrainwaves();
    }
    getBrainwave(params) {
        return this.brainwavesService.getBrainwave(params.id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BrainwavesController.prototype, "getBrainwaves", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BrainwavesController.prototype, "getBrainwave", null);
BrainwavesController = __decorate([
    common_1.Controller('brainwaves'),
    __metadata("design:paramtypes", [brainwaves_service_1.BrainwavesService])
], BrainwavesController);
exports.BrainwavesController = BrainwavesController;
//# sourceMappingURL=brainwaves.controller.js.map
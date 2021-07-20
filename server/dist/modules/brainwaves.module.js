"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrainwavesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const brainwaves_controller_1 = require("../controllers/brainwaves.controller");
const brainwaves_service_1 = require("../services/brainwaves.service");
const brainwaves_entity_1 = require("../entities/brainwaves.entity");
let BrainwavesModule = class BrainwavesModule {
};
BrainwavesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([brainwaves_entity_1.Brainwaves])],
        providers: [brainwaves_service_1.BrainwavesService],
        controllers: [brainwaves_controller_1.BrainwavesController],
    })
], BrainwavesModule);
exports.BrainwavesModule = BrainwavesModule;
//# sourceMappingURL=brainwaves.module.js.map
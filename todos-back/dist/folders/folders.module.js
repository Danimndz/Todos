"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoldersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const todos_controller_1 = require("../todos/todos.controller");
const todos_module_1 = require("../todos/todos.module");
const folder_entity_1 = require("./folder.entity");
const folders_controller_1 = require("./folders.controller");
const folders_service_1 = require("./folders.service");
let FoldersModule = class FoldersModule {
};
FoldersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([folder_entity_1.Folder]), todos_module_1.TodosModule],
        controllers: [folders_controller_1.FoldersController],
        providers: [folders_service_1.FoldersService],
        exports: [folders_service_1.FoldersService],
    })
], FoldersModule);
exports.FoldersModule = FoldersModule;
//# sourceMappingURL=folders.module.js.map
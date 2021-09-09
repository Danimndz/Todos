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
exports.FoldersController = void 0;
const common_1 = require("@nestjs/common");
const todo_entity_1 = require("../todos/todo.entity");
const todos_module_1 = require("../todos/todos.module");
const todos_service_1 = require("../todos/todos.service");
const folder_entity_1 = require("./folder.entity");
const folders_service_1 = require("./folders.service");
let FoldersController = class FoldersController {
    constructor(folderService, todoService) {
        this.folderService = folderService;
        this.todoService = todoService;
    }
    async postF(name, id) {
        const todos = id ? await this.todoService.getMany(id) : null;
        const folder = new folder_entity_1.Folder();
        folder.name = name;
        folder.todos = todos;
        return this.folderService.postF(folder);
    }
    async getAllF() {
        return this.folderService.getAllF();
    }
};
__decorate([
    (0, common_1.Post)('/postFolder'),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], FoldersController.prototype, "postF", null);
__decorate([
    (0, common_1.Get)('/getFolders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FoldersController.prototype, "getAllF", null);
FoldersController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [folders_service_1.FoldersService,
        todos_service_1.TodosService])
], FoldersController);
exports.FoldersController = FoldersController;
//# sourceMappingURL=folders.controller.js.map
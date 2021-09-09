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
exports.TodosController = void 0;
const common_1 = require("@nestjs/common");
const folder_entity_1 = require("../folders/folder.entity");
const todo_entity_1 = require("./todo.entity");
const todos_service_1 = require("./todos.service");
let TodosController = class TodosController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async all() {
        const res = await this.todoService.all();
        return this.todoService.all();
    }
    async create(content, folderId) {
        const folder = folderId
            ? await this.todoService.getFolderId(folderId)
            : null;
        const todo = new todo_entity_1.Todos();
        todo.content = content;
        todo.folder = folder;
        todo.done = 0;
        return this.todoService.create(todo);
    }
    async get(id) {
        return this.todoService.get(id);
    }
    async update(id, content, done) {
        await this.todoService.update(id, {
            content,
            done,
        });
        return this.all();
    }
    async delete(id) {
        await this.todoService.remove(id);
        return this.all();
    }
    async postF(name, id) {
        const todos = id ? await this.todoService.getMany(id) : null;
        const folder = new folder_entity_1.Folder();
        folder.name = name;
        folder.todos = todos;
        return this.todoService.postF(folder);
    }
    async getAllF() {
        return this.todoService.getAllF();
    }
    async getFbyId(id) {
        return this.todoService.getFbyId(id);
    }
    async delFolder(id) {
        return this.todoService.DelF(id);
    }
};
__decorate([
    (0, common_1.Get)('/getTodos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "all", null);
__decorate([
    (0, common_1.Post)('/addTodo'),
    __param(0, (0, common_1.Body)('content')),
    __param(1, (0, common_1.Body)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/getTodo/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "get", null);
__decorate([
    (0, common_1.Put)('/updateTodo/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('content')),
    __param(2, (0, common_1.Body)('done')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('deleteTodo/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('/postFolder'),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "postF", null);
__decorate([
    (0, common_1.Get)('/getFolders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "getAllF", null);
__decorate([
    (0, common_1.Get)('/getFolder/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "getFbyId", null);
__decorate([
    (0, common_1.Delete)('/deleteFolder/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "delFolder", null);
TodosController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [todos_service_1.TodosService])
], TodosController);
exports.TodosController = TodosController;
//# sourceMappingURL=todos.controller.js.map
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
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const folder_entity_1 = require("../folders/folder.entity");
const typeorm_2 = require("typeorm");
const todo_entity_1 = require("./todo.entity");
let TodosService = class TodosService {
    constructor(todosRepository, folderRepository) {
        this.todosRepository = todosRepository;
        this.folderRepository = folderRepository;
    }
    async all() {
        return this.todosRepository.find({ relations: ['folder'] });
    }
    async create(todo) {
        return this.todosRepository.save(todo);
    }
    async get(id) {
        return this.todosRepository.findOne({ idTodo: id });
    }
    async getMany(id) {
        let arr = [];
        for (const x in id) {
            let value = await this.todosRepository.findOne(id[x]);
            arr.push(value);
        }
        return arr;
    }
    async update(id, data) {
        return this.todosRepository.update(id, data);
    }
    async remove(id) {
        return this.todosRepository.delete({ idTodo: id });
    }
    async postF(folder) {
        return this.folderRepository.save(folder);
    }
    async getAllF() {
        return this.folderRepository.find({ relations: ['todos'] });
    }
    async getFolderId(id) {
        return this.folderRepository.findOne({ idFolder: id });
    }
    async getFbyId(id) {
        return this.folderRepository.findOne({ idFolder: id }, { relations: ['todos'] });
    }
    async DelF(id) {
        return this.folderRepository.delete({ idFolder: id });
    }
};
TodosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(todo_entity_1.Todos)),
    __param(1, (0, typeorm_1.InjectRepository)(folder_entity_1.Folder)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TodosService);
exports.TodosService = TodosService;
//# sourceMappingURL=todos.service.js.map
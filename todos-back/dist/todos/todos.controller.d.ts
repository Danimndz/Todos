import { Folder } from 'src/folders/folder.entity';
import { Todos } from './todo.entity';
import { TodosService } from './todos.service';
export declare class TodosController {
    private readonly todoService;
    constructor(todoService: TodosService);
    all(): Promise<Todos[]>;
    create(content: string, folderId?: number): Promise<Todos>;
    get(id: number): Promise<Todos>;
    update(id: number, content: string, done: number): Promise<Todos[]>;
    delete(id: number): Promise<Todos[]>;
    postF(name: string, id?: number[]): Promise<Folder[]>;
    getAllF(): Promise<Folder[]>;
    getFbyId(id: number): Promise<Folder>;
    delFolder(id: number): Promise<any>;
}

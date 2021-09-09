import { Folder } from 'src/folders/folder.entity';
import { Repository } from 'typeorm';
import { Todos } from './todo.entity';
export declare class TodosService {
    private readonly todosRepository;
    private readonly folderRepository;
    constructor(todosRepository: Repository<Todos>, folderRepository: Repository<Folder>);
    all(): Promise<Todos[]>;
    create(todo: any): Promise<Todos>;
    get(id: number): Promise<Todos>;
    getMany(id: number[]): Promise<Todos[]>;
    update(id: number, data: any): Promise<any>;
    remove(id: number): Promise<any>;
    postF(folder: any): Promise<Folder[]>;
    getAllF(): Promise<Folder[]>;
    getFolderId(id: number): Promise<Folder>;
    getFbyId(id: number): Promise<Folder>;
    DelF(id: number): Promise<any>;
}

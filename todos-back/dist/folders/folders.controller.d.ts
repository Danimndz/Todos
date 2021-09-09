import { TodosService } from 'src/todos/todos.service';
import { Folder } from './folder.entity';
import { FoldersService } from './folders.service';
export declare class FoldersController {
    private readonly folderService;
    private todoService;
    constructor(folderService: FoldersService, todoService: TodosService);
    postF(name: string, id?: number[]): Promise<Folder[]>;
    getAllF(): Promise<Folder[]>;
}

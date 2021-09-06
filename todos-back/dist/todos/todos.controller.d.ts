import { Todos } from './todo.entity';
import { TodosService } from './todos.service';
export declare class TodosController {
    private readonly todoService;
    constructor(todoService: TodosService);
    all(): Promise<Todos[]>;
    create(content: string, done: number): Promise<Todos>;
    get(id: number): Promise<Todos>;
    update(id: number, content: string, done: number): Promise<Todos[]>;
    delete(id: number): Promise<Todos[]>;
}

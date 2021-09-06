import { Repository } from 'typeorm';
import { Todos } from './todo.entity';
export declare class TodosService {
    private readonly todosRepository;
    constructor(todosRepository: Repository<Todos>);
    all(): Promise<Todos[]>;
    create(data: any): Promise<Todos>;
    get(id: number): Promise<Todos>;
    update(id: number, data: any): Promise<any>;
    remove(id: number): Promise<any>;
}

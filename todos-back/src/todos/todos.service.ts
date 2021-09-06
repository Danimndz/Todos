import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todos } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todos)
    private readonly todosRepository: Repository<Todos>,
  ) {}
  async all(): Promise<Todos[]> {
    return this.todosRepository.find();
  }

  async create(data): Promise<Todos> {
    return this.todosRepository.save(data);
  }

  async get(id: number): Promise<Todos> {
    return this.todosRepository.findOne({ idTodo: id });
  }

  async update(id: number, data): Promise<any> {
    return this.todosRepository.update(id, data);
  }

  async remove(id: number): Promise<any> {
    return this.todosRepository.delete({ idTodo: id });
  } 
}

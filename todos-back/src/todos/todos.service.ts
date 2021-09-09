import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Folder } from 'src/folders/folder.entity';
import { Repository } from 'typeorm';
import { Todos } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todos)
    private readonly todosRepository: Repository<Todos>,
    @InjectRepository(Folder)
    private readonly folderRepository: Repository<Folder>,
  ) {}
  async all(): Promise<Todos[]> {
    return this.todosRepository.find({ relations: ['folder'] });
  }

  async create(todo): Promise<Todos> {
    return this.todosRepository.save(todo);
  }

  async get(id: number): Promise<Todos> {
    return this.todosRepository.findOne({ idTodo: id });
  }

  async getMany(id: number[]): Promise<Todos[]> {
    let arr: Todos[] = [];
    for (const x in id) {
      let value = await this.todosRepository.findOne(id[x]);
      arr.push(value);
    }
    return arr;
  }

  async update(id: number, data): Promise<any> {
    return this.todosRepository.update(id, data);
  }

  async remove(id: number): Promise<any> {
    return this.todosRepository.delete({ idTodo: id });
  }
  ///folders-----------------------------------------------//
  async postF(folder): Promise<Folder[]> {
    return this.folderRepository.save(folder);
  }
  // async updateF(id: number, folder: Folder): Promise<any> {
  //   return this.folderRepository.update(id, folder);
  // }
  async getAllF(): Promise<Folder[]> {
    return this.folderRepository.find({ relations: ['todos'] });
  }

  async getFolderId(id: number): Promise<Folder> {
    return this.folderRepository.findOne({ idFolder: id });
  }

  async getFbyId(id: number): Promise<Folder> {
    return this.folderRepository.findOne(
      { idFolder: id },
      { relations: ['todos'] },
    );
  }

  async DelF(id: number): Promise<any> {
    return this.folderRepository.delete({ idFolder: id });
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { fips } from 'crypto';
import { Folder } from 'src/folders/folder.entity';
import { Todos } from './todo.entity';
import { TodosService } from './todos.service';

@Controller('')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}
  @Get('/getTodos')
  async all(): Promise<Todos[]> {
    const res = await this.todoService.all();
    return this.todoService.all();
  }

  @Post('/addTodo')
  async create(
    @Body('content') content: string,
    @Body('folder') folderId?: number,
  ) {
    const folder = folderId
      ? await this.todoService.getFolderId(folderId)
      : null;
    const todo = new Todos();
    todo.content = content;
    todo.folder = folder;
    todo.done = 0;
    return this.todoService.create(todo);
  }

  @Get('/getTodo/:id')
  async get(@Param('id') id: number) {
    return this.todoService.get(id);
  }

  @Put('/updateTodo/:id')
  async update(
    @Param('id') id: number,
    @Body('content') content: string,
    @Body('done') done: number,
  ) {
    await this.todoService.update(id, {
      content,
      done,
    });
    return this.all();
  }

  @Delete('deleteTodo/:id')
  async delete(@Param('id') id: number) {
    await this.todoService.remove(id);
    return this.all();
  }

  //FOLDERS------------------------------------------------------
  @Post('/postFolder')
  async postF(@Body('name') name: string, @Body('id') id?: number[]) {
    const todos = id ? await this.todoService.getMany(id) : null;
    const folder = new Folder();
    folder.name = name;
    folder.todos = todos;
    return this.todoService.postF(folder);
  }

  @Get('/getFolders')
  async getAllF(): Promise<Folder[]> {
    return this.todoService.getAllF();
  }

  ///PENDIENTE---------------------------------------------------
  // @Put('/updateFolder/:id')
  // async updateFolder(
  //   @Param('id') id: number,
  //   @Body('name') name: string,
  //   @Body('ids') ids?: number[],
  // ) {
  //   const newFolder = new Folder();
  //   const folder = await this.todoService.getFbyId(id);
  //   if (ids !== undefined) {
  //     let todosArr: Todos[] = [];
  //     const todos = await this.todoService.getMany(ids);
  //     folder.todos.forEach((todo) => todosArr.push(todo));
  //     todos.forEach((todo) => todosArr.push(todo));
  //     newFolder.todos = todosArr;
  //   } else {
  //     newFolder.todos = folder.todos;
  //   }
  //   newFolder.name = name;

  //   return this.todoService.updateF(id, newFolder);
  // }
  ///-----------------------------------------------------------------

  @Get('/getFolder/:id')
  async getFbyId(@Param('id') id: number) {
    return this.todoService.getFbyId(id);
  }
  @Delete('/deleteFolder/:id')
  async delFolder(@Param('id') id: number) {
    return this.todoService.DelF(id);
  }
}

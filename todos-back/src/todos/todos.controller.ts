import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todos } from './todo.entity';
import { TodosService } from './todos.service';

@Controller('')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}
  @Get('/getTodos')
  async all(): Promise<Todos[]> {
    return this.todoService.all();
  }
  @Post('/addTodo')
  async create(@Body('content') content: string, @Body('done') done: number) {
    return this.todoService.create({ content, done });
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
}

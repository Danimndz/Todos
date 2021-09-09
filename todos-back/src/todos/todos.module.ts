import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Folder } from 'src/folders/folder.entity';
import { Todos } from './todo.entity';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todos, Folder])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}

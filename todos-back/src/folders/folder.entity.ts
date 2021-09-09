import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Todos } from '../todos/todo.entity';

@Entity()
export class Folder {
  @PrimaryGeneratedColumn()
  idFolder: number;
  @Column()
  name: string;
  @OneToMany((type) => Todos, (todo: Todos) => todo.folder, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  todos: Todos[];
}

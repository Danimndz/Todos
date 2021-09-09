import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Folder } from '../folders/folder.entity';

@Entity()
export class Todos {
  @PrimaryGeneratedColumn()
  idTodo: number;
  @Column()
  content: string;
  @Column()
  done: number;

  @ManyToOne((type) => Folder, (folder: Folder) => folder.todos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  folder: Folder;
}

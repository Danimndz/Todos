import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todos {
  @PrimaryGeneratedColumn()
  idTodo: number;
  @Column()
  content: string;
  @Column()
  done: number;
}

@Entity()
export class Folders {
  @PrimaryGeneratedColumn()
  idFolder: number;
  @Column()
  name: string;
}

// @Entity()
// export class Folders_todos {
//   @PrimaryGeneratedColumn()
//   id: number;
//   @Column()
//   idTodo: number;
//   @Column()
//   idFolder: number;
// }

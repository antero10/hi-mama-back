import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany} from 'typeorm';
import {Sessions } from './Sessions';

@Entity()
export class Teachers {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public first_name: String

  @Column()
  public last_name: String


  @Column({
    unique: true
  })
  public pin_code: number

  @OneToMany(() => Sessions, session => session.teacher)
  public sessions: Sessions[];
}

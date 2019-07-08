import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import {Sessions} from './Sessions';

@Entity()
export class SessionsItems {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public check_time: Date

  @Column()
  public status: string

  @ManyToOne(() => Sessions, session => session.items)
  public session: Sessions;



}

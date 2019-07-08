import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import {Teachers} from './Teachers';
import {SessionsItems} from './SessionsItems';

@Entity()
export class Sessions {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
     type: 'datetime'
  })
  public start_date: Date

  @Column({
     type: 'datetime'
  })
  public end_date: Date

  @ManyToOne(() => Teachers, teacher => teacher.sessions)
  public teacher: Teachers;

  @OneToMany(() => SessionsItems, item => item.session)
  public items: SessionsItems[];


}

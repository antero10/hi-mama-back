import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany} from 'typeorm';
import {Sessions } from './Sessions';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public email: string;

  @Column()
  public password: string;
  
}

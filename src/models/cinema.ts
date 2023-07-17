import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Seat } from './seat';

@Table
export class Cinema extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  totalSeats!: number;

  @HasMany(() => Seat)
  seats!: Seat[];
}

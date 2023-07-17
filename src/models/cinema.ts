import { Table, Column, Model,DataType,HasMany } from 'sequelize-typescript';

@Table
export class Cinema extends Model<Cinema> {
  @Column(DataType.INTEGER)
  totalSeats!: number;
}

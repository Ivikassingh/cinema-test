import { Model, Column, Table, DataType, ForeignKey } from 'sequelize-typescript';
import { Cinema } from './cinema';

@Table
export class Seat extends Model<Seat> {
  @Column(DataType.INTEGER)
  seatNumber!: number;
  @Column(DataType.BOOLEAN)
  isPurchased!: boolean;
  @ForeignKey(() => Cinema)
  @Column(DataType.INTEGER)
  cinemaId!: number;
}

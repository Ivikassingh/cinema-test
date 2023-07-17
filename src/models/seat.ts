import { Table, Column, Model, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Cinema } from './cinema';

@Table
export class Seat extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @ForeignKey(() => Cinema)
  @Column
  cinemaId!: number;

  @Column
  seatNumber!: number;

  @Column
  isPurchased!: boolean;

  @BelongsTo(() => Cinema)
  cinema!: Cinema;
}

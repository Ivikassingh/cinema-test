
import { Sequelize } from 'sequelize-typescript';
import { Cinema } from './cinema';
import { Seat } from './seat';


const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 32768,
  database: 'postgres',
  username: 'postgres',
  password: 'postgrespw',
  models: [Cinema,Seat], // Path to your model files
});


sequelize.sync();

export default sequelize;
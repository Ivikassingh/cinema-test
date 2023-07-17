import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 32768,
  database: 'postgres',
  username: 'postgres',
  password: 'postgrespw',
  models: [__dirname + '/models'], // Path to your model files
});

export default sequelize;

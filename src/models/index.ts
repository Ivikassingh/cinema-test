import sequelize from '../config/db';
import { Cinema } from './cinema';
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Failed to synchronize database:', error);
  });
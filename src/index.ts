import express, { Application,Request, Response } from 'express';
import sequelize  from './config/db';
const app:Application = express();
const port = 3000;
// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1` })
})

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    // The database exists
  })
  .catch((error:any) => {
    console.error('Unable to connect to the database:', error);
    // The database does not exist or there was an error connecting
  });
try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
} catch (error:any) {
    console.log(`Error occurred: ${error.message}`)
}
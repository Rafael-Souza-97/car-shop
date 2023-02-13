import express from 'express';
import carsRoutes from './Routes/cars.routes';

const app = express();

app.use(express.json());

app.use('/cars', carsRoutes);

export default app;

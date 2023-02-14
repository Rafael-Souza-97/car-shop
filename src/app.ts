import express from 'express';
import carsRoutes from './Routes/cars.routes';
import motorcyclesRoutes from './Routes/motorcycles.routes';

const app = express();

app.use(express.json());

app.use('/cars', carsRoutes);
app.use('/motorcycles', motorcyclesRoutes);

export default app;

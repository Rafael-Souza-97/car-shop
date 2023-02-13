import { Router } from 'express';
import CarsController from '../Controllers/cars.controllers';

const carsRouter = Router();

carsRouter.post('/', (req, res, next) => new CarsController().create(req, res, next));

export default carsRouter;
import { Router } from 'express';
import CarsController from '../Controllers/cars.controllers';

const carsRouter = Router();

carsRouter.post('/', (req, res, next) => new CarsController().create(req, res, next));
carsRouter.get('/', (req, res, next) => new CarsController().getAllCars(req, res, next));
carsRouter.get('/:id', (req, res, next) => new CarsController().getById(req, res, next));
carsRouter.put('/:id', (req, res, next) => new CarsController().updateCarById(req, res, next));

export default carsRouter;
import { Router } from 'express';
import MotorcycleController from '../Controllers/motorcycles.controller';

const motorcyclesRouter = Router();

motorcyclesRouter.post('/', (req, res, next) => new MotorcycleController()
  .createMotorcycle(req, res, next));
motorcyclesRouter.get('/', (req, res, next) => new MotorcycleController()
  .getAllMotorcycles(req, res, next));
motorcyclesRouter.get('/:id', (req, res, next) => new MotorcycleController()
  .getMotorcycleById(req, res, next));
motorcyclesRouter.put('/:id', (req, res, next) => new MotorcycleController()
  .updateMotorcycleById(req, res, next));

export default motorcyclesRouter;

import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import MotorcycleService from '../Services/motorcycles.service';

const OK_STATUS = 200;
const CREATED_STATUS = 201;
const NOT_FOUND_STATUS = 404;
const UNPROCESSABLE_ENTITY_STATUS = 422;

export default class MotorcycleController {
  constructor(
    private motorcycleService = new MotorcycleService(),
  ) {}
  
  public async createMotorcycle(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;
      const newMotorcycle = await this.motorcycleService.createMotorcycle(body);

      return res.status(CREATED_STATUS).json(newMotorcycle);
    } catch (error) {
      next(error);
    }
  }  
  
  public async getAllMotorcycles(_req: Request, res: Response, next: NextFunction) {
    try {
      const allMotorcycles = await this.motorcycleService.getAllMotorcycles();

      return res.status(OK_STATUS).json(allMotorcycles);
    } catch (error) {
      next(error);
    }
  }

  public async getMotorcycleById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      if (!isValidObjectId(id)) {
        return res.status(UNPROCESSABLE_ENTITY_STATUS).json({ message: 'Invalid mongo id' });
      }

      const motorcycle = await this.motorcycleService.getMotorcycleById(req.params.id);

      if (motorcycle === undefined) {
        return res.status(NOT_FOUND_STATUS).json({ message: 'Motorcycle not found' });
      }

      return res.status(OK_STATUS).json(motorcycle);
    } catch (error) {
      next(error);
    }
  }

  public async updateMotorcycleById(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;
      const { id } = req.params;

      if (!isValidObjectId(id)) {
        return res.status(UNPROCESSABLE_ENTITY_STATUS).json({ message: 'Invalid mongo id' });
      }
    
      const updatedMotorcycle = await this.motorcycleService
        .updateMotorcycleById(id, body);
      
      if (!updatedMotorcycle) {
        return res.status(NOT_FOUND_STATUS).json({ message: 'Motorcycle not found' });
      }

      return res.status(OK_STATUS).json(updatedMotorcycle);
    } catch (error) {
      next(error);
    }
  }
}

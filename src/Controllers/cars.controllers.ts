import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import CarsService from '../Services/cars.service';

const OK_STATUS = 200;
const CREATED_STATUS = 201;
const NOT_FOUND_STATUS = 404;
const UNPROCESSABLE_ENTITY_STATUS = 422;

export default class CarController {
  constructor(
    private carService = new CarsService(),
  ) {}
  
  public async createCar(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;
      const newCar = await this.carService.createCar(body);

      return res.status(CREATED_STATUS).json(newCar);
    } catch (error) {
      next(error);
    }
  }  
  
  public async getAllCars(_req: Request, res: Response, next: NextFunction) {
    try {
      const allCars = await this.carService.getAllCars();

      return res.status(OK_STATUS).json(allCars);
    } catch (error) {
      next(error);
    }
  }

  public async getCarById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      if (!isValidObjectId(id)) {
        return res.status(UNPROCESSABLE_ENTITY_STATUS).json({ message: 'Invalid mongo id' });
      }

      const car = await this.carService.getCarById(req.params.id);

      if (car === undefined) return res.status(NOT_FOUND_STATUS).json({ message: 'Car not found' });

      return res.status(OK_STATUS).json(car);
    } catch (error) {
      next(error);
    }
  }

  public async updateCarById(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;
      const { id } = req.params;

      if (!isValidObjectId(id)) {
        return res.status(UNPROCESSABLE_ENTITY_STATUS).json({ message: 'Invalid mongo id' });
      }
    
      const updatedCar = await this.carService.updateCarById(id, body);
      
      if (!updatedCar) return res.status(NOT_FOUND_STATUS).json({ message: 'Car not found' });

      return res.status(OK_STATUS).json(updatedCar);
    } catch (error) {
      next(error);
    }
  }
}

import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import CarsService from '../Services/cars.service';

const OK_STATUS = 200;
const CREATED_STATUS = 201;

export default class CarController {
  constructor(
    private carService = new CarsService(),
  ) {}
  
  public async create(req: Request, res: Response, next: NextFunction) {
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

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      if (!isValidObjectId(req.params.id)) {
        return res.status(422).json({ message: 'Invalid mongo id' });
      }
      const car = await this.carService.getCarById(req.params.id);

      if (car === undefined) return res.status(404).json({ message: 'Car not found' });

      return res.status(OK_STATUS).json(car);
    } catch (error) {
      next(error);
    }
  }
}

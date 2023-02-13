import { NextFunction, Request, Response } from 'express';
import CarsService from '../Services/cars.service';

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
}

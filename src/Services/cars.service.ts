import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';

export default class CarService {
  constructor(
    private model = new CarODM(),
  ) {}

  private createCarDomain(car: ICar) {
    if (car) return new Car(car);

    return null;
  }

  public async createCar(car: ICar) {
    const newCar = await this.model.create(car);

    return this.createCarDomain(newCar);
  }
}
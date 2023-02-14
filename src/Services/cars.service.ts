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

  public async getAllCars() {
    const allCars = await this.model.getAllCars();

    return allCars.map((car) => this.createCarDomain(car));
  }

  public async getCarById(id: string) {
    const cars = await this.model.getById(id);

    if (cars === null) return undefined;
  
    return this.createCarDomain(cars as ICar);
  }
}
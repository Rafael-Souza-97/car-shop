import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motocycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor({
    id,
    buyValue,
    color,
    model,
    year,
    status,
    category,
    engineCapacity,
  }: IMotorcycle) {
    super({ id, buyValue, color, model, year, status });
    this.category = category;
    this.engineCapacity = engineCapacity;
  }

  public setCategory(category: string) {
    this.category = category;
  }

  public getCategory() {
    return this.category;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}

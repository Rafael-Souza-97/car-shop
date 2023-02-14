import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor({
    id,
    buyValue,
    color,
    model,
    year,
    status,
    doorsQty,
    seatsQty,
  }: ICar) {
    super({ id, buyValue, color, model, year, status });
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  public setdoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getdoorsQty() {
    return this.doorsQty;
  }

  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}

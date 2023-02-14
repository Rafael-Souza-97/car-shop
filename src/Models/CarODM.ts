import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    super(schema, 'cars');
  }

  public async getAllCars(): Promise<ICar[]> { 
    return this.model.find(); 
  }

  public async getById(id: string): Promise<ICar | null> {
    const carById = await this.model.findOne({ _id: id });

    return carById;
  }

  public async updateCarById(id: string, body: ICar): Promise<ICar | null> {
    const updatedCar = await this.model.findByIdAndUpdate({ _id: id }, { ...body }, { new: true });

    return updatedCar;
  }
}

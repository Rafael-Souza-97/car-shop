import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });

    super(schema, 'motorcycles');
  }

  public async getAllMotorcycles(): Promise<IMotorcycle[]> { 
    return this.model.find(); 
  }

  public async getMotorcycleById(id: string): Promise<IMotorcycle | null> {
    const motorcycleById = await this.model.findOne({ _id: id });

    return motorcycleById;
  }

  public async updateMotorcycleById(id: string, body: IMotorcycle): Promise<IMotorcycle | null> {
    const updatedMotorcycle = await this.model
      .findByIdAndUpdate({ _id: id }, { ...body }, { new: true });

    return updatedMotorcycle;
  }
}

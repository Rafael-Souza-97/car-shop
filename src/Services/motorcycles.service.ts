import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';

export default class MotorcycleService {
  constructor(
    private model = new MotorcycleODM(),
  ) {}

  private createMotorcycleDomain(motorcycle: IMotorcycle) {
    if (motorcycle) return new Motorcycle(motorcycle);

    return null;
  }

  public async createMotorcycle(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);

    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAllMotorcycles() {
    const allMotorcycles = await this.model.getAllMotorcycles();

    return allMotorcycles.map((motorcycle: IMotorcycle) => this.createMotorcycleDomain(motorcycle));
  }

  public async getMotorcycleById(id: string) {
    const motorcycles = await this.model.getMotorcycleById(id);

    if (motorcycles === null) return undefined;
  
    return this.createMotorcycleDomain(motorcycles as IMotorcycle);
  }

  public async updateMotorcycleById(id: string, body: IMotorcycle) {
    const updatedMotorcycle = await this.model.updateMotorcycleById(id, body);
  
    return this.createMotorcycleDomain(updatedMotorcycle as IMotorcycle);
  }
}

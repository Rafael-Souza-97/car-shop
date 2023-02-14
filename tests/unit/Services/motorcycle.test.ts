import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/motorcycles.service';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleDomain from '../../../src/Domains/Motorcycle';

const motorcycleMock: IMotorcycle = {
  id: '63ebe2e04d27c66c68536004',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcyclesMock: IMotorcycle[] = [
  {
    id: '63ebe2e04d27c66c68536004',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '63ebe4f84d27c66c68536006',
    model: 'Hayabusa',
    year: 2005,
    color: 'White',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
];

describe('Teste Motorcycles', function () {
  afterEach(function () { sinon.restore(); });

  it('Deveria ser possível adcionar um Motorcyclero', async function () {
    const Motorcycle: MotorcycleDomain = new MotorcycleDomain({
      id: '63ebe2e04d27c66c68536004', ...motorcycleMock,
    });

    sinon.stub(Model, 'create').resolves(Motorcycle);

    const service = new MotorcycleService();
    const response = await service.createMotorcycle(motorcycleMock);

    expect(response).to.be.deep.equal(Motorcycle);   
  });

  it('Deveria ser possível retornar todos os Motorcycleros', async function () {
    const allMotorcycles: MotorcycleDomain[] = motorcyclesMock
      .map((motorcycle) => new MotorcycleDomain(motorcycle));

    sinon.stub(Model, 'find').resolves(motorcyclesMock);

    const service = new MotorcycleService();
    const response = await service.getAllMotorcycles();

    expect(response).to.be.deep.equal(allMotorcycles);    
  });

  it('Deveria ser possível retornar o Motorcyclero com seu ID', async function () {
    const Motorcycle: MotorcycleDomain = new MotorcycleDomain({ ...motorcycleMock });

    sinon.stub(Model, 'findOne').resolves(motorcycleMock);

    const service = new MotorcycleService();
    const response = await service.getMotorcycleById('63ebe2e04d27c66c68536004');

    expect(response).to.be.deep.equal(Motorcycle);    
  });

  it('Deveria falhar se receber um id errado', async function () {
    sinon.stub(Model, 'findOne').resolves(null);

    const service = new MotorcycleService();
    const response = await service.getMotorcycleById('63ebe2e04d27c66c68536004');

    expect(response).to.be.deep.equal(undefined);    
  });
});

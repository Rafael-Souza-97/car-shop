import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/cars.service';
import ICar from '../../../src/Interfaces/ICar';
import CarDomain from '../../../src/Domains/Car';

const carMock: ICar = {
  id: '63ebe2e04d27c66c68536004',
  model: 'Astra',
  year: 2011,
  color: 'Black',
  status: true,
  buyValue: 30000,
  doorsQty: 4,
  seatsQty: 5,
};

const carsMock: ICar[] = [
  {
    id: '63ebe2e04d27c66c68536004',
    model: 'Astra',
    year: 2011,
    color: 'Black',
    status: true,
    buyValue: 30000,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '63ebe4f84d27c66c68536006',
    model: 'BMW M5 CS',
    year: 2022,
    color: 'Black',
    buyValue: 1000000,
    doorsQty: 4,
    seatsQty: 4,
  },
];

describe('Teste Cars', function () {
  afterEach(function () { sinon.restore(); });

  it('Deveria ser possível adcionar um carro', async function () {
    const car: CarDomain = new CarDomain({ id: '63ebe2e04d27c66c68536004', ...carMock });

    sinon.stub(Model, 'create').resolves(car);

    const service = new CarService();
    const response = await service.createCar(carMock);

    expect(response).to.be.deep.equal(car);   
  });

  it('Deveria ser possível retornar todos os carros', async function () {
    const allCars: CarDomain[] = carsMock.map((car) => new CarDomain(car));

    sinon.stub(Model, 'find').resolves(carsMock);

    const service = new CarService();
    const response = await service.getAllCars();

    expect(response).to.be.deep.equal(allCars);    
  });

  it('Deveria ser possível retornar o carro com seu ID', async function () {
    const car: CarDomain = new CarDomain({ ...carMock });

    sinon.stub(Model, 'findOne').resolves(carMock);

    const service = new CarService();
    const response = await service.getCarById('63ebe2e04d27c66c68536004');

    expect(response).to.be.deep.equal(car);    
  });

  it('Deveria falhar se receber um id errado', async function () {
    sinon.stub(Model, 'findOne').resolves(null);

    const service = new CarService();
    const response = await service.getCarById('63ebe2e04d27c66c68536004');

    expect(response).to.be.deep.equal(undefined);    
  });
});

import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../app';


import { Response } from 'superagent';
import CpfModel from '../model/CpfModel';
import * as cpfMocks from './mocks/cpf.mocks';
// import connection from '../model/connection';

chai.use(chaiHttp);

const { expect } = chai;

describe('Cpf tests', () => {
  let chaiHttpResponse: Response;

  it('1. Add a new CPF correctly', async () => {
    //arrange
    sinon.stub(CpfModel.prototype, 'add').resolves(1)

    //act
    chaiHttpResponse = await chai
       .request(app)
       .post('/cpf')
       .send(cpfMocks.validCpfBody);
    console.log(chaiHttpResponse);

    //assert
    expect(chaiHttpResponse.status).to.be.equal(200);
  });

});
import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../app';


import { Response } from 'superagent';
import * as cpfMocks from './mocks/cpf.mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Cpf tests', () => {
  let chaiHttpResponse: Response;

  it('1. Add a new CPF correctly', async () => {
    //arrange

    //act
    chaiHttpResponse = await chai
       .request(app)
       .post('/cpf')
       .send(cpfMocks.validCpfBody);

    //assert
    expect(chaiHttpResponse.status).to.be.equal(200);
  });

});
import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import CpfModel from '../model/CpfModel';
import * as cpfMocks from './mocks/cpf.mocks';
import { RowDataPacket } from 'mysql2';
import app from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('**CPF TESTS**', () => {
	let chaiHttpResponse: Response;

	describe('1. When the correct input is sent', () => {
		afterEach(sinon.restore);

		it('a. Should add a new CPF correctly', async () => {
			//arrange
			sinon.stub(CpfModel.prototype, 'add').resolves(1);

			//act
			chaiHttpResponse = await chai
				.request(app)
				.post('/cpf')
				.send(cpfMocks.validNewCpfBody);

			//assert
			expect(chaiHttpResponse.status).to.be.equal(201);
		});

		it('b. Should check a CPF correctly', async () => {
			//arrange
			sinon
				.stub(CpfModel.prototype, 'findOne')
				.resolves(cpfMocks.checkCpfOutput as RowDataPacket);

			//act
			chaiHttpResponse = await chai
				.request(app)
				.get(`/cpf/${cpfMocks.validCpfBody.cpf}`);

			//assert
			expect(chaiHttpResponse.status).to.be.equal(200);
			expect(chaiHttpResponse.body).to.be.deep.equal(cpfMocks.checkCpfOutput);
		});

		it('c. Should delete a CPF correctly', async () => {
			//arrange
			sinon.stub(CpfModel.prototype, 'remove').resolves(1);

			//act
			chaiHttpResponse = await chai
				.request(app)
				.delete(`/cpf/${cpfMocks.validCpfBody.cpf}`);

			//assert
			expect(chaiHttpResponse.status).to.be.equal(200);
		});

		it('d. Should find all CPFs added to the list correctly', async () => {
			//arrange
			sinon
				.stub(CpfModel.prototype, 'findAll')
				.resolves(cpfMocks.findAllOutput as RowDataPacket[]);

			//act
			chaiHttpResponse = await chai.request(app).get('/cpf');

			//assert
			expect(chaiHttpResponse.status).to.be.equal(200);
			expect(chaiHttpResponse.body).to.be.deep.equal(cpfMocks.findAllOutput);
		});

		it('e. Should return an exception message when trying to add a CPF that already exists', async () => {
			//arrange
			sinon
				.stub(CpfModel.prototype, 'findOne')
				.resolves(cpfMocks.checkCpfOutput as RowDataPacket);

			//act
			chaiHttpResponse = await chai
				.request(app)
				.post('/cpf')
				.send(cpfMocks.validCpfBody);

			//assert
			expect(chaiHttpResponse.status).to.be.equal(409);
			expect(chaiHttpResponse.body).to.be.deep.equal(
				cpfMocks.existsExceptionOutput
			);
		});

		it('f. Should return an exception message when trying to find a non existent CPF', async () => {
			//arrange
			sinon.stub(CpfModel.prototype, 'findOne').resolves();

			//act
			chaiHttpResponse = await chai.request(app).get('/cpf/12345678901');

			//assert
			expect(chaiHttpResponse.status).to.be.equal(404);
			expect(chaiHttpResponse.body).to.be.deep.equal(
				cpfMocks.notFoundExceptionOutput
			);
		});

		it('g. Should return an exception message when trying to remove a non existent CPF', async () => {
			//arrange
			sinon.stub(CpfModel.prototype, 'remove').resolves(0);

			//act
			chaiHttpResponse = await chai.request(app).delete('/cpf/12345678901');

			//assert
			expect(chaiHttpResponse.status).to.be.equal(404);
			expect(chaiHttpResponse.body).to.be.deep.equal(
				cpfMocks.notFoundExceptionOutput
			);
		});
	});

	describe('2. When the wrong input is sent', () => {
		afterEach(sinon.restore);

		it('a. Should return an exception message when the CPF sent has less than 11 chars', async () => {
			//arrange

			//act
			chaiHttpResponse = await chai
				.request(app)
				.post('/cpf')
				.send(cpfMocks.invalidLengthCpfBody);

			//assert
			expect(chaiHttpResponse.status).to.be.equal(406);
			expect(chaiHttpResponse.body).to.be.deep.equal(
				cpfMocks.invalidExceptionOutput
			);
		});

		it('b. Should return an exception message when the CPF sent has all chars repeated', async () => {
			//arrange
			// sinon.stub(CpfModel.prototype, 'add').resolves(1);

			//act
			chaiHttpResponse = await chai
				.request(app)
				.post('/cpf')
				.send(cpfMocks.invalidCharsCpfBody);

			//assert
			expect(chaiHttpResponse.status).to.be.equal(406);
			expect(chaiHttpResponse.body).to.be.deep.equal(
				cpfMocks.invalidExceptionOutput
			);
		});
	});
});

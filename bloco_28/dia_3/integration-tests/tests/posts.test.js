const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const app = require('../app');
const { getConnection } = require('./connectionMock');
const { MongoClient } = require('mongodb');

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /api/posts', () => {
  describe('quando o token não é informado', () => {
    let response;

    before(async () => {
      response = await chai.request(app).get('/api/posts');
    });

    it('retorna status HTTP 401', () => {
      expect(response).to.have.status(401);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('o objeto de resposta contém uma propriedade `error`', () => {
      expect(response.body).to.have.property('error').which.is.a('string');
    });
  });

  describe('quando os posts são retornados com sucesso', () => {
    let response;
    let connectionMock;

    before(async () => {
      connectionMock = await getConnection();
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      await connectionMock
        .db('jwt_exercise')
        .collection('users')
        .insertOne({ username: 'user-ok', password: 'password-ok' });
      
      const token = await chai
        .request(app)
        .post('/api/login')
        .send({ username: 'user-ok', password: 'password-ok' })
        .then((response) => response.body.message);

      response = await chai
        .request(app)
        .get('/api/posts')
        .set('authorization', token);
    });

    after(async () => {
      MongoClient.connect.restore();

      await connectionMock
        .db('jwt_exercises')
        .collection('users')
        .deleteOne({ username: 'user-ok' });
    });

    it('retorna status HTTP 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um array no body', () => {
      expect(response.body).to.be.an('array');
    });

    it('os itens do array contém as propriedades de um post', () => {
      expect(response.body[0]).to.have.property('title').which.is.a('string');
      expect(response.body[0]).to.have.property('content').which.is.a('string');
    });
  });
});

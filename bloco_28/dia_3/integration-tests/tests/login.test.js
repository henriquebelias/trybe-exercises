const chai = require('chai');
const sinon = require('sinon');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../app');
const { getConnection } = require('./connectionMock');
const { MongoClient } = require('mongodb');

const { expect } = chai;

describe('POST /api/login', () => {
  describe('quando username e password não são informados', () => {
    let response;

    before(async () => {
      response = await chai.request(app).post('/api/login').send({});
    });

    it('retorna status HTTP 401', () => {
      expect(response).to.have.status(401);
    });

    it('retorne um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('objeto de resposta possui uma propriedade chamada `message`', () => {
      expect(response.body).to.have.a.property('message');
    });

    it('A propriedade `message` possui uma mensagem de erro adequada', () => {
      expect(response.body.message).to.be.equal(
        'É necessário usuário e senha para fazer login'
      );
    });
  });

  describe('quando o username não existe no banco', () => {
    let connectionMock;
    let response;

    before(async () => {
      connectionMock = await getConnection();
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      response = await chai.request(app).post('/api/login').send({
        username: 'user-fake',
        password: 'password-fake',
      });
    });

    after(() => {
      MongoClient.connect.restore();
    });

    it('retorna status HTTP 401', () => {
      expect(response).to.have.status(401);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('objeto de resposta tem propriedade `message`', () => {
      expect(response.body).to.have.property('message');
    });

    it('A propriedade `message` possui uma mensagem de erro adequada', () => {
      expect(response.body.message).to.equal(
        'Usuário não existe ou senha inválida'
      );
    });
  });

  describe('quando o login é realizado com sucesso', () => {
    let connectionMock;
    let response;

    before(async () => {
      connectionMock = await getConnection();
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      await connectionMock.db('jwt_exercise').collection('users').insertOne({
        username: 'user-ok',
        password: 'password-ok',
      });

      response = await chai.request(app).post('/api/login').send({
        username: 'user-ok',
        password: 'password-ok',
      });
    });

    after(async () => {
      MongoClient.connect.restore();
      await connectionMock
        .db('jwt_exercise')
        .collection('users')
        .deleteOne({ username: 'user-ok' });
    });

    it('retorna status HTTP 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('objeto de resposta tem propriedade `message`', () => {
      expect(response.body).to.have.property('message');
    });

    it('A propriedade `message` não é vazia', () => {
      expect(response.body.message).to.not.be.empty;
    });
  });
});

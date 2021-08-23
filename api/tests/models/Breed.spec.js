const { Breed, Temperament, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Breed model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Breed.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Breed.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Breed.create({ name: 'Pug' });
      });
      it("should not duplicate already existing name", ()=> {
        Breed.create({name: "pug"});
        Breed.create({name: "pug"});
      })
    });
  });
});

describe('Temperament model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Temperament.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Breed.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Breed.create({ name: 'Hyper-active' });
      });
      it("should not duplicate already existing name", ()=> {
        Breed.create({name: "Hyper-active"});
        Breed.create({name: "Hyper-active"});
      })
    });
  });
});
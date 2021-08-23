/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, Breed, Temperament, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
  height: "2 - 6",
  weight: "20 - 25", 
  life_span:"10 - 12"
};

describe('Breed routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Breed.sync({ force: true })
    .then(() => Breed.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
  });
  describe('GET /dogs/:id', () => {
    it('should get 200', () =>
      agent.get('/dogs/1').expect(200)
    );
    it("should get 404 when id does not exists in database", ()=>
      agent.get("/dogs/22553").expect(404)
    )
  });
  describe("Get /dogs?name=Pug", () => {
    it("should get 200", () =>
    agent.get("/dogs?name=Pug").expect(200))
  })
  describe("Post /dog", ()=> {
    it("should add dog", ()=>{
      agent.post("/dog").send({name: "nuevo perro", height: "2-5", weight: "20 - 25", life_span:"10 - 12"}).expect(200)
    })
    it("should not add a dog, if it already exist in the database", ()=>{
      agent.post("/dog").send({name: "nuevo perro", height: "2-5", weight: "20 - 25", life_span:"10 - 12"})
      agent.post("/dog").send({name: "nuevo perro", height: "2-5", weight: "20 - 25", life_span:"10 - 12"}).expect(200, "That breead already exists in the database")
    })
  })
  describe("Get /dog", ()=> {
    it("should get temperaments in database", ()=>{
      agent.get("/temperament").expect(200)
    })
  })
});


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe("Get Flights", () => {

    it("get all flights", (done) => {
        chai.request('http://localhost:3001/flight')
            .get("/")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('Object');
                done();
            })
    })
})

describe("Get Flights", () => {

    it("get flight by name", (done) => {
        chai.request('http://localhost:3001/flight')
            .get("/V101")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('Object');
                done();
            })
    })
})

describe("Get Flights", () => {

    it("get flight by name", (done) => {
        chai.request('http://localhost:3001/flight')
            .get("/V101")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('Object');
                done();
            })
    })
})


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
const { bulkWrite } = require('../../User/Model/User');
let should = chai.should();

chai.use(chaiHttp);

describe("delete Flight", () => {

    it("delete existing flight", (done) => {
        chai.request('http://localhost:3001/flight')
            .delete("/Z103")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('Object');
                done();
            })
    }),

        it("delete non-existing flight", (done) => {
            chai.request('http://localhost:3001/flight')
                .delete("/Z111")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('Object');
                    done();
                })
        }),

        it("test path without passing flightname", (done) => {
            chai.request('http://localhost:3001/flight')
                .delete("/")
                .end((err, response) => {
                    response.should.have.status(404);

                    done();
                })
        })

})
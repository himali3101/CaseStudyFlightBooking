


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe("Search Flights", () => {

    it("positive test for Searching flight", (done) => {

        chai.request('http://localhost:3002/flight')
            .post("/search")
            .send({
                from: "Banglore",
                to: "Dubai",
                departureDate: "2020-08-31"
            })
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('Object');
                done();
            })
    })

    it("negative test for searching flight", (done) => {

        chai.request('http://localhost:3002/flight')
            .post("/search")
            .send({
                from: "Hyd",
                to: "Dubai",
                departureDate: "2020-08-01"
            })
            .end((err, response) => {
                response.should.have.status(404);
                response.body.should.be.a('Object');
                done();
            })
    }),

        it("negative test for searching flight without passing request body", (done) => {

            chai.request('http://localhost:3002/flight')
                .post("/search")
                .send({

                })
                .end((err, response) => {
                    response.should.have.status(500);
                    response.body.should.be.a('Object');
                    done();
                })
        }),

        it("negative test for searching flight without passing some parameters", (done) => {

            chai.request('http://localhost:3002/flight')
                .post("/search")
                .send({
                    from: "Banglore",
                    to: "Dubai"
                })
                .end((err, response) => {
                    response.should.have.status(500);
                    response.body.should.be.a('Object');
                    done();
                })
        })


})




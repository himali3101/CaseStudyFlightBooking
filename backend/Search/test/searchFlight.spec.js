


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe("Get Flights", () => {

    it("get all flights", (done) => {

        dDate = "31-08-2020";
        console.log(dDate)
        chai.request('http://localhost:3002/flight')
            .post("/search")
            .send({
                from: "Banglore",
                to: "Dubai",
                departureDate: dDate
            })
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('Object');
                done();
            })
    })
})




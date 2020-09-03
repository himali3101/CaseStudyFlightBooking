
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
const { bulkWrite } = require('../../User/Model/User');
let should = chai.should();

chai.use(chaiHttp);

describe("Book Flight", () => {

    it("book a flight", (done) => {
        chai.request('http://localhost:3003/book')
            .post("/flight")
            .send({
                "flightName": "Z201",
                "from": "Mumbai",
                "to": "dubai",
                "departureDate": "2020-08-28",
                "departureTime": "01:20",
                "arrivaleDate": "2020-08-28",
                "arrivaleTime": "05:30",
                "totalSeats": 40,
                "remainingSeats": 40,
                "fare": 4000,
                "email": "himaligunjal31@gmail.com"
            })
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('Object');
                done();
            })
    }),
        it("book a flight with 0 remaining seats", (done) => {
            chai.request('http://localhost:3003/book')
                .post("/flight")
                .send({
                    "flightName": "Z201",
                    "from": "Mumbai",
                    "to": "dubai",
                    "departureDate": "2020-08-28",
                    "departureTime": "01:20",
                    "arrivaleDate": "2020-08-28",
                    "arrivaleTime": "05:30",
                    "totalSeats": 40,
                    "remainingSeats": 0,
                    "fare": 4000,
                    "email": "himaligunjal31@gmail.com"
                })
                .end((err, response) => {
                    response.should.have.status(409);
                    response.body.should.be.a('Object');
                    done();
                })
        }),
        it("book a flight with flight name not registered", (done) => {
            chai.request('http://localhost:3003/book')
                .post("/flight")
                .send({
                    "flightName": "Z111",
                    "from": "Mumbai",
                    "to": "dubai",
                    "departureDate": "2020-08-28",
                    "departureTime": "01:20",
                    "arrivaleDate": "2020-08-28",
                    "arrivaleTime": "05:30",
                    "totalSeats": 40,
                    "remainingSeats": 40,
                    "fare": 4000,
                    "email": "himaligunjal31@gmail.com"
                })
                .end((err, response) => {
                    response.should.have.status(500);
                    response.body.should.be.a('Object');
                    done();
                })
        })

})
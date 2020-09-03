
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
const { bulkWrite } = require('../../User/Model/User');
let should = chai.should();

chai.use(chaiHttp);

describe("add Flight", () => {

    it("add flight", (done) => {
        chai.request('http://localhost:3001/flight')
            .post("/add")
            .send({
                "flightName": "Z301",
                "from": "Pune",
                "to": "BAnglore",
                "departureDate": '2020-09-04',
                "departureTime": "4:00am",
                "arrivaleDate": '2020-09-04',
                "arrivaleTime": "1:00pm",
                "fare": "20,000",
                "totalSeats": 40,
                "remainingSeats": 40
            })
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('Object');
                done();
            })
    }),

        it("add flight without passing body", (done) => {
            chai.request('http://localhost:3001/flight')
                .post("/add")
                .send({

                })
                .end((err, response) => {
                    response.should.have.status(500);
                    response.body.should.be.a('Object');
                    done();
                })
        }),

        it("add flight with passing extra parameters", (done) => {
            chai.request('http://localhost:3001/flight')
                .post("/add")
                .send({
                    "flightName": "Z302",
                    "from": "Pune",
                    "to": "BAnglore",
                    "departureDate": '2020-09-04',
                    "departureTime": "4:00am",
                    "arrivaleDate": '2020-09-04',
                    "arrivaleTime": "1:00pm",
                    "fare": "20,000",
                    "totalSeats": 40,
                    "remainingSeats": 40,
                    "extraParameters": "Extra"
                })
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('Object');
                    done();
                })
        }),

        it("add flight without some required parameters", (done) => {
            chai.request('http://localhost:3001/flight')
                .post("/add")
                .send({
                    "flightName": "Z303",
                    "from": "Pune",
                    "to": "BAnglore",
                    "departureDate": '2020-09-04',
                    "departureTime": "4:00am"

                })
                .end((err, response) => {
                    response.should.have.status(500);
                    response.body.should.be.a('Object');
                    done();
                })
        })


})


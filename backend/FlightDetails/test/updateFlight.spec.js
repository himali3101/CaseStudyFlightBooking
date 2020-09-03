let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
const { bulkWrite } = require('../../User/Model/User');
let should = chai.should();

chai.use(chaiHttp);

describe("Update Flight", () => {

    it("update existing flight", (done) => {
        chai.request('http://localhost:3001/flight')
            .put("/update/Z201")
            .send({
                "flightName": "Z201",
                "from": "Mumbai",
                "to": "BAnglore",
                "departureDate": '2020-09-04',
                "departureTime": "4:00am",
                "arrivaleDate": '2020-09-04',
                "arrivaleTime": "1:00pm",
                "fare": "20,000",
                "totalSeats": 50,
                "remainingSeats": 50
            })
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('Object');
                done();
            })
    })
})
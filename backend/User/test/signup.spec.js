let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);


describe("Signup function", () => {

    it("test successful signup", (done) => {

        let user = {
            email: "testUser3@gmail.com",
            password: "testUser"
        }

        chai.request('http://localhost:9000/user')
            .post("/signup")
            .send(user)
            .end((err, response) => {
                response.should.have.status(201);
                response.body.should.be.a('Object');

                done();
            })

    });

    it("test signup already registered email", (done) => {

        let user = {
            email: "testUser@gmail.com",
            password: "testUser"
        }

        chai.request('http://localhost:9000/user')
            .post("/signup")
            .send(user)
            .end((err, response) => {
                response.should.have.status(409);
                response.body.should.be.a('Object');

                done();
            })

    });

    it("test signup for empty request body", (done) => {

        let user = {

        }

        chai.request('http://localhost:9000/user')
            .post("/signup")
            .send(user)
            .end((err, response) => {
                response.should.have.status(500);
                response.body.should.be.a('Object');

                done();
            })

    });



});

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);


describe("login function", () => {

    it("test successfulLogin", (done) => {

        let user = {
            email: "virat@gmail.com",
            password: "virat"
        }

        chai.request('http://localhost:9000/user')
            .post("/login")
            .send(user)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('Object');

                done();
            })

    });

    it("test login for registered user with wrong password", (done) => {

        let user = {
            email: "virat@gmail.com",
            password: "virat123"
        }

        chai.request('http://localhost:9000/user')
            .post("/login")
            .send(user)
            .end((err, response) => {
                response.should.have.status(401);
                response.body.should.be.a('Object');

                done();
            })

    });

    it("test unregistered user", (done) => {

        let user = {
            email: "tanvi@gmail.com",
            password: "tanvi213"
        }

        chai.request('http://localhost:9000/user')
            .post("/login")
            .send(user)
            .end((err, response) => {
                response.should.have.status(404);
                response.body.should.be.a('Object');

                done();
            })

    });


});

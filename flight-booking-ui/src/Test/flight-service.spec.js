
import React from 'react';
import { shallow } from 'enzyme';
// Our Dependencies
import { expect } from '../utils/chai';
import FlgihtService from '../Service/flight.service'

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe("Get Flights", () => {

    it("get all flights", (test) => {
        chai.request('http://localhost:3001')
            .get("/flight/")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
    })
})

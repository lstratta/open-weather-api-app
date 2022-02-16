const { expect, request, assert } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();

chai.use(chaiHttp);

const server = require('../server/server');

describe('Test Suite', () => {
    
    describe('Testing getting data from Open Weather API', () => {

        it('TEST 1: Can make a GET request to server', async () => {

            const res = await chai.request(server)
                            .get('/')
                            .send();

            console.log("RES" + res.body)
            
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('string').eql('Page found')
        }),

        it('TEST 2: Can make get request to Open Weather API for current day data', async () => {

            res = await chai.request(server)
                    .get('/current-weather')
                    .send();

            expect(res).to.have.status(200);
            (res.body).should.have.property('coord');
        })
    })
})
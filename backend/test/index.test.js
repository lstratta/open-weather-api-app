const { expect, request, assert } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();

chai.use(chaiHttp);

const server = require('../server/server');

describe('Test Suite', () => {
    
    describe('Testing getting data from Open Weather API', () => {

        it('TEST 1: Can make a GET request to backend server', async () => {

            const res = await chai.request(server)
                            .get('/')
                            .send();
            
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('string').eql('Page found')
        })

        it('TEST 2: Can make GET request to OpenWeather API for current day data at specific location', async () => {

            res = await chai.request(server)
                    .get('/current-weather/london/uk/metric')
                    .send();

            expect(res).to.have.status(200);
            (res.body).should.have.property('coord');
        })

        
 
    })

    describe(`Testing error handling`, () => {

        xit(`TEST 1: Incorrect input handled correctly`, () => {

        })

    })

    describe(`Testing database integration`, () => {

        xit(`TEST 1: /GET test on / route should return sampleData`, async () => {

            const res = await chai.request(server)
                .get(`/`)
                .send();

            expect(res).to.have.status(200);
        })
    })
})
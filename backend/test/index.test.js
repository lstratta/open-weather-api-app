const { expect, request, assert } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();

chai.use(chaiHttp);

const server = require('../server/server');

describe('Test Suite', () => {
    
    describe('Testing getting data from OpenWeather API', () => {

        it('TEST 1: Can make a GET request to backend server', async () => {

            const res = await chai.request(server)
                            .get('/')
                            .send();
            
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('string').eql('Page found')
        })

        xit('TEST 2: Can make GET request to OpenWeather API for current day data at specific location', async () => {

            res = await chai.request(server)
                    .get('/current-weather/london/uk/metric')
                    .send();

            expect(res).to.have.status(200);
            (res.body).should.have.property('coord');
        })

        

        // TEST 4 Inputs are sanit
 
    })

    describe(`Testing error handling`, () => {

        xit ('TEST 1: An incorrect city name returns a 404 status code', async() => {

            res = await chai.request(server)
                .get('/current-weather/lnodon/metric')
                .then( res => {
                    expect(res).to.have.status(404);
                    expect(res.body).to.have.property("error").eql("That location hasn't been found");
                 })
                 .catch( err => {
                    throw err;
                 });
        })

    })

    describe(`Testing user inputs are sanitised`, async => {

        xit('TEST 1: User inputs are only allowed to be alphabetical characters', () => {

        })
    })

    describe(`Testing database integration`, () => {

        xit(`TEST 1: GET request should return sampleData`, async () => {

            const res = await chai.request(server)
                .get(`/`)
                .send();

            expect(res).to.have.status(200);
        })
    })
})
const express = require('express');
const axios = require('axios');
require('dotenv').config( { path: `ENV_VARIABLES/.env.${process.env.NODE_ENV}` })

const router = express.Router();

router.route('/').get(async(req, res) => {
    res.status(200).json("Page found");
})

router.route('/current-weather/:your-location').get( async (req, res) => {


})

router.route('/current-weather/:city/:units').get( async (req, res) => {

    // sanitise inputs

    // make request
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${process.env.API_KEY}&units=${req.params.units}`)
        .then(data => {
            res.send(data.data);
        })
        .catch(err => {
            res.status(404).send({error: "That location hasn't been found"});
        });
})       

router.route('/current-weather/:city/:country/:units/').get( async (req, res) => {

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city},${req.params.country}&appid=${process.env.API_KEY}&units=${req.params.units}`)
        .then(data => {
            res.send(data.data);
        })
        .catch(err => {
            console.log(err)
        });
})       



module.exports = router;
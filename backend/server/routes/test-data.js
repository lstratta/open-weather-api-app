const express = require('express');

const router = express.Router();

const testData = require('../../test/test-data.json');

router.route('/').get( (req, res) => {

    res.json(testData);
})

module.exports = router;
const express = require('express');
const router = express.Router();
const verify = require('./verifytoken');

router.get('/', verify, (req, res) => { //added verify middleware
    res.json({testdata: 'Test'});
});

module.exports = router;
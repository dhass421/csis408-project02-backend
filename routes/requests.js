const express = require('express');
const router = express.Router();
const { getRequests } = require("../controllers/requestsController");

router
    .route('/')
    .get(getRequests);

module.exports = router;
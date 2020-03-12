const express = require('express');
const router = express.Router();
const { getRequests, createRequest, approveRequest, deleteRequest } = require("../controllers/requestsController");

router
    .route('/')
    .get(getRequests)
    .post(createRequest)
    

router
    .route('/:id')
    .put(approveRequest)
    .delete(deleteRequest);


module.exports = router;
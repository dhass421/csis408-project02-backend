// @desc    Get all requests
// @route   GET /api/requests
// @access   Public
exports.getRequests = (req, res, next) => {
    res.send('GET requests');
}

// @desc    Create new request
// @route   POST /api/requests
// @access   Public
exports.createRequest = (req, res, next) => {
    res.send('POST request');
}

// @desc    Update request approval status
// @route   PATCH /api/requests/:id
// @access   Public
exports.approveRequest = (req, res, next) => {
    res.send('PATCH request');
}

// @desc    Delete request
// @route   DELETE /api/requests/:id
// @access   Public
exports.deleteRequest = (req, res, next) => {
    res.send('DELETE request');
}
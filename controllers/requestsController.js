const Request = require('../models/Request');

// @desc    Get all requests
// @route   GET /api/requests
// @access   Public
exports.getRequests = async (req, res, next) => {
    try {
        const requests = await Request.find();
        return res.status(200).json({
            success: true,
            count: requests.length,
            data: requests
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc    Create new request
// @route   POST /api/requests
// @access   Public
exports.createRequest = async (req, res, next) => {

    try {
        const { message, category, approvalStatus } = req.body;

        const request = await Request.create(req.body);
    
        return res.status(201).json({
            success: true,
            data: request
        });      
    } catch (error) {

        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);

            res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });  
        }
    }
}

// @desc    Update request approval status
// @route   PATCH /api/requests/:id
// @access   Public
exports.approveRequest = async(req, res, next) => {
    
    const data = req.body;
    const id = req.params.id;

    const request = await Request.update({_id: id}, {$set: data});

    return res.status(201).json({
        success: true,
        data: request
    });   
}

// @desc    Delete request
// @route   DELETE /api/requests/:id
// @access   Public
exports.deleteRequest = async (req, res, next) => {
    try {
        const request = await Request.findById(req.params.id);
        if(!request) {
            return res.status(404).json({
                success: false,
                error: 'No request found'
            });
        }

        await request.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });        
    }
}
const ErrorResponse = require('../utils/ErrorResponse')

function errorHandler (err, req, res, next) {
    const {statusCode = 500, message = 'Somthing went wrong'} = err

    // console.error(err)
    res.status(statusCode).json(
        {
            success: false,
            statusCode,
            message
        }
    )
}

module.exports = errorHandler

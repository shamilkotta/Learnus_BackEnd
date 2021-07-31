const ErrorResponse = require('../utils/ErrorResponse')

function errorHandler (err, req, res, next) {
    let {statusCode = 500, message = 'Somthing went wrong'} = err

    if (statusCode === 404) {
        message = 'Not found'
    }
    if (statusCode === 401) {
        message = 'Unauthorized'
    }

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

const { validationResult, buildCheckFunction } = require('express-validator')
const ErrorResponse = require('../utils/ErrorResponse')
const check = buildCheckFunction(['headers', 'cookies'])

module.exports.authorize = [
    check('x-auth-token').isJWT(),
    (req, res, next)=> {
        const err = validationResult(req).array()
        if (err.length > 0) {
            next(new ErrorResponse(401))
        }else {
            next()
        }
    },
    (req, res, next)=> {
        console.log('sexond')
        next()
    }
]
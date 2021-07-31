const { validationResult, buildCheckFunction } = require('express-validator')
const ErrorResponse = require('../utils/ErrorResponse')
const check = buildCheckFunction(['headers', 'cookies'])
const jwt = require('jsonwebtoken')

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
        try {
            const token = req.cookies['x-auth-token']
            req.user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
            next()
        } catch (error) {
            res.clearCookie('x-auth-token')
            next(new ErrorResponse(401))
        }
    }
]
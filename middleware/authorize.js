const { validationResult, buildCheckFunction } = require('express-validator')
const ErrorResponse = require('../utils/ErrorResponse')
const check = buildCheckFunction(['headers'])
const jwt = require('jsonwebtoken')

const  authorize = [
    (req, res, next)=> {
        if (req.headers.authorization) {   
            req.headers.authorization = req.headers.authorization.replace('Bearer ', '')
        }
        next()
    },
    check('authorization').isJWT(),
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
            const token = req.headers.authorization
            req.user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
            next()
        } catch (error) {
            next(new ErrorResponse(401))
        }
    }
]

const authorizeAdmin = [
    ...authorize,
    (req, res, next)=> {
        if (req.user.isAdmin) {
            next()
        }else {
            next(new ErrorResponse(401))
        }
    }
]

module.exports = {
    authorize,
    authorizeAdmin
}
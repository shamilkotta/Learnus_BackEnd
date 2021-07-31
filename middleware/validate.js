const { validationResult, matchedData, checkSchema } = require("express-validator")
const { signupSchema, loginSchema } = require("../schema/indexSchema")
const ErrorResponse = require("../utils/ErrorResponse")

const result = (req, res, next)=> {
    const err = validationResult(req).array()
    if (err.length > 0) {
        next(new ErrorResponse(400, err[0].msg))
    }else {
        const validData = matchedData(req, {onlyValidData: true, includeOptionals: false})
        req.body= validData
        next()
    }
}

module.exports = {
    signupValidation: [
        checkSchema(signupSchema),
        result
    ],

    loginValidation: [
        checkSchema(loginSchema),
        result
    ]
}


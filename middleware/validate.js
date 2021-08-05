const { validationResult, matchedData, checkSchema, body } = require("express-validator")
const { signupSchema, loginSchema } = require("../schema")
const { newCourseSchema } = require("../schema/admin")
const ErrorResponse = require("../utils/ErrorResponse")

const result = (req, res, next)=> {
    const err = validationResult(req).array()
    if (err.length > 0) {
        next(new ErrorResponse(400, err[0].msg))
    }else {
        data = matchedData(req, {onlyValidData: true, includeOptionals: false})
        if (data['authorization']) {
            delete data['authorization']
        }
        req.validData = data
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
    ],

    newCourseValidation: [
        body('course__code').toUpperCase(),
        checkSchema(newCourseSchema),
        result
    ],
}


const { validationResult, matchedData } = require("express-validator")
const ErrorResponse = require("../utils/ErrorResponse")

module.exports = function validate(req, res, next) {
    const err = validationResult(req).array()
    if (err.length > 0) {
        next(new ErrorResponse(400, err[0].msg))
    }else {
        const validData = matchedData(req, {onlyValidData: true, includeOptionals: false})
        req.body= validData
        next()
    }
}
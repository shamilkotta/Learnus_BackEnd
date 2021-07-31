const ErrorResponse = require("../utils/ErrorResponse")
const bcrypt = require('bcrypt')
const { doSignup, doLogin } = require("../helpers/indexHelper")
const jwt = require('jsonwebtoken')

module.exports = {
    signupController: async (req, res, next)=> {
        let { name, email, password } = req.validData
        const salt = parseInt(process.env.HASH_SALT) || 10

        password = await bcrypt.hash(password, salt)
        doSignup({name, email, password}).then(async (data)=> {
            const token = await jwt.sign({email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '45s'})
            res.status(200).cookie("x-auth-token", token, {httpOnly: true}).json({success: true, message: 'Successfuly registered'})
        }).catch(next)
    },

    loginController: (req, res, next)=> {
        const { email, password } = req.validData

        doLogin({email, password}).then(async (data)=>{
            if (data) {
                const token = await jwt.sign({email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '45s'})
                res.status(200).cookie("x-auth-token", token, {httpOnly: true}).json({success: true, message: 'Successfuly logined'})
            }else {
                next(new ErrorResponse(400, 'Invalid Password'))
            }
        }).catch(next)
    },

    logoutController: (req, res, next)=> {
        res.clearCookie('x-auth-token')
        res.status(200).json({success: true, message: 'Successfuly logouted'})
    },

    coursesController: (req, res, next)=> {
        res.status(200).json({success: true, message: 'get courses'})
    },

    courseController: (req, res, next)=> {

    },

    cartController: (req, res, next)=> {
        console.log(req.user)
        res.status(200).json({success: true, message: req.user})   
    }
}
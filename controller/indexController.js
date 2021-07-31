const ErrorResponse = require("../utils/ErrorResponse")
const bcrypt = require('bcrypt')
const { doSignup, doLogin } = require("../helpers/indexHelper")

module.exports = {
    signupController: async (req, res, next)=> {
        let { name, email, password } = req.body
        const salt = parseInt(process.env.SALT) || 10
        password = await bcrypt.hash(password, salt)
        doSignup({name, email, password}).then((data)=>{
            res.status(200).json({success: true, message: 'submited'})
        }).catch(next)
    },

    loginController: (req, res, next)=> {
        const { email, password } = req.body
        doLogin({email, password}).then((data)=>{
            if (data) {
                res.status(200).json({success: true, message: 'authorized'})
            }else {
                next(new ErrorResponse(400, 'Invalid Password'))
            }
        }).catch(next)
    },

    coursesController: (req, res, next)=> {

        res.status(200).json({success: true, message: 'get courses'})
    },

    courseController: (req, res, next)=> {

    },

    cartController: (req, res, next)=> {
        res.status(200).json({success: true, message: 'get courses'})   
    }
}
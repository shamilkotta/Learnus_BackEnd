const ErrorResponse = require("../utils/ErrorResponse")
const bcrypt = require('bcrypt')
const { doSignup, doLogin, getCourse } = require("../helpers")

module.exports = {
    signupController: async (req, res, next)=> {
        try {
            let { username, email, password } = req.validData
            const salt = parseInt(process.env.HASH_SALT) || 10
            password = await bcrypt.hash(password, salt)
            doSignup({username, email, password}).then(({data, token})=> {
                res.status(200).json({success: true, message: 'Successfuly registered', 'x-auth-token': token})
            }).catch(next)
        } catch (err) {
            next(err)
        }
        
    },

    loginController: (req, res, next)=> {
        try {
            const { username, password } = req.validData
            doLogin({username, password}).then(({data, token})=>{
                if (data) {
                    res.status(200).json({success: true, message: 'Successfuly logined', 'x-auth-token': token})
                    // res.status(200).cookie("x-auth-token", token, {httpOnly: true}).json({success: true, message: 'Successfuly logined'})
                }else {
                    next(new ErrorResponse(400, 'Invalid Password'))
                }
            }).catch(next)
        } catch (err) {
            next(err)
        }
        
    },

    logoutController: (req, res, next)=> {
        res.clearCookie('x-auth-token')
        res.status(200).json({success: true, message: 'Successfuly logouted'})
    },

    coursesController: (req, res, next)=> {
        res.status(200).json({success: true, message: 'get courses'})
    },

    courseController: (req, res, next)=> {
        const course__code = req.params.id
        getCourse(course__code).then((course)=> {
            res.status(200).json({message: 'success', course,})
        }).catch(next)
    }
}
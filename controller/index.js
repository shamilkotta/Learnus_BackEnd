const ErrorResponse = require("../utils/ErrorResponse")
const bcrypt = require('bcrypt')
const { doSignup, doLogin, getCourse, getAllCourses } = require("../helpers")

module.exports = {
    signupController: async (req, res, next)=> {
        try {
            let { username, email, password } = req.validData
            const salt = parseInt(process.env.HASH_SALT) || 10
            password = await bcrypt.hash(password, salt)
            doSignup({username, email, password}).then(({data, token})=> {
                res.status(201).json({success: true, message: 'Successfully registered', 'x-auth-token': token})
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
                    res.status(200).json({success: true, message: 'successfully logged in', 'x-auth-token': token})
                    // res.status(200).cookie("x-auth-token", token, {httpOnly: true}).json({success: true, message: 'Successfuly logined'})
                }else {
                    next(new ErrorResponse(400, 'Invalid Password'))
                }
            }).catch(next)
        } catch (err) {
            next(err)
        }
        
    },

    coursesController: (req, res, next)=> {
        getAllCourses().then((courses)=> {
            res.status(200).json({success: true, message: `${courses.length} courses found`, courses,})
        }).catch(next)
    },

    courseController: (req, res, next)=> {
        const course__code = req.params.id
        getCourse(course__code).then((course)=> {
            res.status(200).json({success: true, message: `${course__code} found`, course,})
        }).catch(next)
    }
}
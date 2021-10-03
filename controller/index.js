const ErrorResponse = require("../utils/ErrorResponse")
const bcrypt = require('bcrypt')
const { doSignup, doLogin, getCourse, getAllCourses } = require("../helpers")
const ObjectId = require('mongodb').ObjectId

module.exports = {
    signupController: async (req, res, next)=> {
        try {
            let { username, email, password } = req.validData
            const salt = parseInt(process.env.HASH_SALT) || 10
            password = await bcrypt.hash(password, salt)
            doSignup({username, email, password}).then(({data, token})=> {
                res.status(201).json({success: true, message: 'Successfully registered', token})
            }).catch(next)
        } catch (err) {
            next(err)
        }
        
    },

    loginController: (req, res, next)=> {
        const { username, password } = req.validData
        doLogin({username, password}).then(({data, token})=>{
            if (data) {
                res.status(200).json({success: true, message: 'successfully logged in', token})
                // res.status(200).cookie("x-auth-token", token, {httpOnly: true}).json({success: true, message: 'Successfuly logined'})
            }else {
                next(new ErrorResponse(400, 'Invalid Password'))
            }
        }).catch(next)
    },

    coursesController: (req, res, next)=> {
        getAllCourses().then((courses)=> {
            res.status(200).json({success: true, message: `${courses.length} courses found`, courses,})
        }).catch(next)
    },

    courseController: (req, res, next)=> {
        const id = req.params.id
        const match = {}
        if (id.length <= 5) {
            match.course__code = id
            match.status = 'Active'
        }else {
            match._id = ObjectId(id)
        }
        getCourse(match).then((course)=> {
            res.status(200).json({success: true, message: `${id} found`, course,})
        }).catch(next)
    }
}
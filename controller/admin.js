const ErrorResponse = require("../utils/ErrorResponse")
const ObjectId = require('mongodb').ObjectId
const { putCourse, saveCourse, getAllUsers, getUser, getAllCourses } = require("../helpers/admin")

module.exports = {
    usersController: (req, res, next)=>{
        getAllUsers().then((users)=> {
            res.status(200).json({success: true, message: `${users.length} users found`, users})
        }).catch(next)
    },

    userController: (req, res, next)=>{
        const username = req.params.id
        getUser(username).then((user)=> {
            res.status(200).json({success: true, message: `${username} found`, user})
        }).catch(next)
    },
    
    coursesController: (req, res, next)=> {
        getAllCourses().then((courses)=> {
            res.status(200).json({success: true, message: `${courses.length} courses found`, courses,})
        }).catch(next)
    },

    saveCourseController: (req, res, next)=> {
        req.body.status = 'Draft'
        const match = {}
        if (req.body.id) {
            match._id= ObjectId(req.body.id)
        }else {
            match.course__code= '164$8026092a7ff9119e3'
        }
        delete req.body['id']
        saveCourse(req.body, match).then(response=> {
            res.status(200).json({success: true, message: 'successfully saved to draft', id: response.upsertedId})
        }).catch(next)
    },

    putCourseController: (req, res, next)=> {
        let courseData = { ...req.validData }
        courseData.status = 'Paused'
        const id = ObjectId(req.body.id)
        if (req.body.course__content.length == 0) {
            return next(new ErrorResponse(400, 'Course content cannot be empty'))
        }
        courseData.course__content = req.body.course__content
        putCourse(courseData, id).then((response)=> {
            res.status(200).json({success: true, message: 'Course Updated'})
        }).catch(next)
    },
}

const { postNewCourse, getAllUsers, getUser } = require("../helpers/admin")

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

    newCourseController: (req, res, next)=> {
        let courseData = { ...req.validData }
        courseData.course__content = req.body.course__content
        postNewCourse(courseData).then(({data, input})=> {
            res.status(200).json({success: true, message: 'New Course added'})
        }).catch(next)
    },

    addContentController: (req, res, next)=> {
        res.status(200)
    },
}

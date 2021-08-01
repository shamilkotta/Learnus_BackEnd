const { postNewCourse } = require("../helpers/admin")

module.exports = {
    users: (req, res, next)=>{
        res.status(200).json({message: 'this is admin', data: req.user})
    },

    newCourse: (req, res, next)=> {
        let courseData = { ...req.validData }
        courseData.course__content = req.body.course__content
        postNewCourse(courseData).then(({data, input})=> {
            res.status(200).json({message: 'hoi', some: {...input}})
        }).catch(next)
    },

    addContent: (req, res, next)=> {
        res.status(200)
    },
}

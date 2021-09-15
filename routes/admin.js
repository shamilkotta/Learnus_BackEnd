const express = require('express');
const {
    usersController,
    userController,
    putCourseController,
    saveCourseController,
    coursesController,
    deleteCourseController,
} = require('../controller/admin');
const { newCourseValidation } = require('../middleware/validate');
const router = express.Router()

/* GET admin api(s). */
router.get('/users', usersController) 
router.get('/user/:id', userController)

router.get('/courses', coursesController)

router.put('/save-course', saveCourseController)
router.put('/put-course',newCourseValidation, putCourseController)

router.delete('/delete-course/:id', deleteCourseController)

// router.get('/course-content/:id')
// router.post('/add-course-content', addContentController)

module.exports = router;
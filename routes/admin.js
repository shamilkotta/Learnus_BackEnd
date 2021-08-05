const express = require('express');
const {
    usersController,
    userController,
    newCourseController,
    saveCourseController,
    addContentController,
    courseController,
    coursesController,
    getEditCourseController,
    postEditCourseController
} = require('../controller/admin');
const { newCourseValidation } = require('../middleware/validate');
const router = express.Router()

/* GET admin api(s). */
router.get('/users', usersController)
router.get('/user/:id', userController)

router.get('/courses', coursesController)
router.get('/course/:id', courseController)

router.get('/course-content/:id')

router.post('/save-new-course', saveCourseController)
router.post('/new-course',newCourseValidation, newCourseController)
router.post('/add-course-content', addContentController)

router.get('/edit-course/:id', getEditCourseController)
router.post('/edit-course', postEditCourseController)

router.delete('/course/:id')

module.exports = router;
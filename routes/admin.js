const express = require('express');
const {
    usersController,
    userController,
    newCourseController,
    addContentController
} = require('../controller/admin');
const { newCourseValidation } = require('../middleware/validate');
const router = express.Router()

/* GET admin api(s). */
router.get('/users', usersController)
router.get('/user/:id', userController)
router.post('/new-course',newCourseValidation, newCourseController)
router.post('/add-course-content', addContentController)

module.exports = router;
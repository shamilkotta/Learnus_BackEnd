const express = require('express');
const { users, newCourse, addContent } = require('../controller/admin');
const { newCourseValidation } = require('../middleware/validate');
const router = express.Router()

/* GET admin api(s). */
router.get('/users', users)
router.post('/new-course',newCourseValidation, newCourse)
router.post('/add-course-content', addContent)

module.exports = router;
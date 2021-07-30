const express = require('express');
const { users, newCourse, addContent } = require('../controller/adminController');
const router = express.Router()

/* GET admin api(s). */
router.get('/users', users)
router.post('/new-course', newCourse)
router.post('/add-course-content', addContent)

module.exports = router;
const express = require('express');
const {
    loginController,
    signupController,
    coursesController,
    courseController,
} = require('../controller');
const { signupValidation, loginValidation } = require('../middleware/validate');
const router = express.Router();

/* ROUTE index api(s). */

router.post('/signup', signupValidation, signupController)
router.post('/login', loginValidation, loginController)

router.get('/courses', coursesController)
router.get('/course/:id', courseController)

module.exports = router;

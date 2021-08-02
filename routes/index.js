const express = require('express');
const {
    loginController,
    signupController,
    logoutController,
    coursesController,
    courseController,
} = require('../controller');
const { signupValidation, loginValidation } = require('../middleware/validate');
const router = express.Router();

/* ROUTE index api(s). */

router.post('/signup', signupValidation, signupController)
router.post('/login', loginValidation, loginController)

router.get('/course/:id', courseController)
router.get('/courses', coursesController)

module.exports = router;

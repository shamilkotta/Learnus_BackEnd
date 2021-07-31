const express = require('express');
const {
    loginController,
    coursesController,
    signupController,
    cartController,
    courseController
} = require('../controller/indexController');
const { signupValidation, loginValidation } = require('../middleware/validate');
const { authorize } = require('../middleware/authorize');
const router = express.Router();

/* GET index api(s). */

router.post('/signup', signupValidation, signupController)
router.post('/login', loginValidation, loginController)

router.get('/courses', coursesController)
router.get('/course/:id', courseController)

router.get('/cart', authorize, cartController)

module.exports = router;

const express = require('express');
const { checkSchema } = require('express-validator');
const { signupSchema, loginSchema } = require('../schema/indexSchema');
const { login, courses, signup, cart, course } = require('../controller/indexController');
const validate = require('../middleware/validate');
const router = express.Router();

/* GET index api(s). */

router.post('/signup',checkSchema(signupSchema), validate, signup)
router.post('/login',checkSchema(loginSchema),validate, login)
router.get('/courses', courses)
router.get('/course/:id', course)
router.get('/cart', cart)

module.exports = router;

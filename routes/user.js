var express = require('express');
const { profile, cart, myCourses } = require('../controller/userController');
var router = express.Router();

/* GET users api(s). */
router.get('/profile', profile)
router.get('/cart', cart)
router.get('/user-courses', myCourses)

module.exports = router;

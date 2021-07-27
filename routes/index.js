var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('api calls');
});

router.post('/register', (req, res)=> {
  res.send('success')
})

router.post('/login', (req, res)=> {
  res.send('success')
})

module.exports = router;

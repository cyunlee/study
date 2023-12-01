const express = require('express');
const router = express.Router();
const controller = require('../controller/Cpractice');

//Get /practice2
router.get('/', controller.main);
//controller에 main이라고 만들어준다.


module.exports = router;
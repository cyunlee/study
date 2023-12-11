const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

//GET
//페이지 이동

router.get('/', controller.main);

router.get('/signup', controller.get_signup);

router.get('/signin', controller.get_signin);

//회원가입 요청
router.post('/register', controller.post_signup);

//로그인 요청
router.post('/login', controller.post_signin);

module.exports = router;



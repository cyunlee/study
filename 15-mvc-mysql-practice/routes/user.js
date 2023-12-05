// //각 경로들의 get, post 등 여러 요청에 따라 controller의 어떤 핸들러 함수를 동작시킬지 라우팅한다.

// //라우터를 먼저 만들어준다.
// const express = require('express');
// const router = express.Router();
// const controller = require('../controller/Cuser');

// //localhost:PORT/user가 기본경로

// //Get /user - 메인페이지
// rotuer.get('/', controller.main);
// //index페이지로 접근할 때는 /user가 기본경로
// //controller에 main이라는 함수 만들어주기

// //Get /user/signup - 회원가입 페이지
// rotuer.get('/signup', controller.get_signup);

// //Get /user/signin - 로그인 페이지
// rotuer.get('/signin', controller.get_signin);

// //각각에 대한 애들을 렌더해주기
// //렌더를 하려면 컨트롤러에서 해야 함 (req, res)에 관한 처리는 다 컨트롤러에서 한다

// // POST /user/signup - 회원가입 요청
// router.post('/signup', controller.post_signup);

// // POST /user/signin - 로그인 요청
// router.post('/signin', controller.post_signin);

// // POST /user/profile - 회원정보 수정 페이지 요청
// router.post('/profile', controller.post_profile);

// // PATCH /user/profile/edit - 회원정보 수정 요청
// router.patch('/profile/edit', controller.edit_profile);

// //DELETE /user/profile/delete - 회원 탈퇴 요청
// router.delete('/profile/delete', controller.delete_profile);

// module.exports = router;
// //라우터 내보내기

const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

// localhost:PORT/user 기본 경로

// GET /user - 메인 페이지
router.get('/', controller.main);
// GET /user/signup - 회원가입 페이지 
router.get('/signup', controller.get_signup);
// GET /user/signin - 로그인 페이지 
router.get('/signin', controller.get_signin);

// POST /user/signup - 회원가입 요청
router.post('/signup', controller.post_signup);

// POST /user/signin - 로그인 요청
router.post('/signin', controller.post_signin);

// POST /user/profile - 회원정보 수정 페이지 요청
router.post('/profile', controller.post_profile);

// PATCH /user/profile/edit - 회원정보 수정 요청
router.patch('/profile/edit', controller.edit_profile);

// DELTE /user/profile/delete - 회원 탈퇴 요청
router.delete('/profile/delete', controller.delete_profile);

module.exports = router;

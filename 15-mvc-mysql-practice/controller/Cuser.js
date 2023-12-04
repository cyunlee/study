const User = require('../model/User');

exports.main = (req,res) => {
    res.render('index');
};

exports.get_signup = (req,res)=>{
    res.render('signup');
}

exports.get_signin = (req,res)=>{
    res.render('signin');
}

//각각의 페이지로 렌더하는 응답 및 요청은 컨트롤러에서 처리한다

//라우터에서 컨트롤러로 요청이 간다.

// 회원가입 요청
exports.post_signup = (req,res)=>{
    // 뷰 (요청) -> 라우터(라우트 폴더) -> 컨트롤러(컨트롤러 파일) -> 모델(모델 파일) -> DB -> 모델 -> 컨트롤러 -> 뷰 
    console.log('post_signup > ', req.body);

    User.post_signup(req.body, (result) => {
        //result: rows
        //rows를 result로 받음
        res.send(result);
        //프론트에서 이 값을 쓸지 안쓸지는 모르지만 result를 보내준다
    })

}


// 그 이후에 처리해야 할 작업은? DB에 회원 정보를 넣는 것이다.

// 뷰 요청 -> 라우트 만들기 -> 컨트롤러 해당 메소드 만들기 -> 컨트롤러에서 요청과 응답 -> 모델에서 처리해서 받아서 쓰기

//회원가입을 하려면 모델 측에다가 req.body를 넘겨줘야한다.

// 로그인 요청
exports.post_signin = (req, res) => {
    console.log(req.body);
    User.post_signin(req.body, (result)=>{
        //result: rows [{}]
        if(result.length > 0) res.send({isLogin: true, userInfo: result[0]});
        else res.send({isLogin: false});
    })
    res.send();
}

//회원정보 수정 페이지 요청
exports.post_profile = (req, res) => {
    console.log(req.body);
    User.post_profile(req.body.userid, (result) => {
        //result: rows [{}]
        if(result.length > 0) res.render('profile', {data: result[0]})
    })
}

//회원정보 수정 요청
exports.edit_profile = (req, res)=>{
    console.log(req.body);
    User.edit_profile(req.body, (result)=>{
        res.send('회원정보 수정 성공!')
    })
}

//회원 탈퇴 요청
exports.delete_profile = (req, res)=>{
    console.log(req.body); // {id: ~}
    User.delete_profile(req.body.id, (result) => {
        res.send({deletedId: req.body.id});
    })
}
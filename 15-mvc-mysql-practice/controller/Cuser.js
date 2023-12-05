//[Before]
// const User = require('../model/User');

//[After]
//우선 모델을 가져와야 한다.
//models: models/index에서 export한 db객체
const models = require('../models/index'); //인덱스는 생략 가능
const User = models.User;

//GET / 
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

    //[After]
    User.create({
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw,
    
    }).then((result)=>{
        console.log('create >', result);
        res.send(result);
    })

}


// 그 이후에 처리해야 할 작업은? DB에 회원 정보를 넣는 것이다.

// 뷰 요청 -> 라우트 만들기 -> 컨트롤러 해당 메소드 만들기 -> 컨트롤러에서 요청과 응답 -> 모델에서 처리해서 받아서 쓰기

//회원가입을 하려면 모델 측에다가 req.body를 넘겨줘야한다.

// 로그인 요청
exports.post_signin = (req, res) => {
    // console.log(req.body);
    // User.post_signin(req.body, (result)=>{
    //     //result: rows [{}]
    //     if(result.length > 0) res.send({isLogin: true, userInfo: result[0]});
    //     else res.send({isLogin: false});
    // })
    // res.send();

    //[After]
    //SELECT * FROM user WHERE userid = ? and pw = ?
    // User.findOne().then((result)=>{
    //     console.log('findAll >', result);
    //     res.send(result);
    // })
    User.findOne({
        where: {
            userid: req.body.userid,
            pw: req.body.pw,
        }
    }).then((result)=>{
        console.log('findOne >', result);

        //result
        //id, pw 일치: {}
        //불일치: null

        if(result){
            res.send({isLogin: true, userInfo: result})
        }else{
            res.send({isLogin: false});
        }
    })
}

//회원정보 수정 페이지 요청
exports.post_profile = (req, res) => {
    console.log(req.body);
    //[Before]
    // User.post_profile(req.body.userid, (result) => {
    //     //result: rows [{}]
    //     if(result.length > 0) res.render('profile', {data: result[0]})
    // })
    // User.findAll().then((result)=>{
    //     console.log('findAll >', result);
    // }).then((result)=>{
    //     console.log('findOne >', result);
        
    // })
    //[After]
    //SELECT * FROM user WHERE userid = ? LIMIT 1
    User.findOne({
        where: {userid: req.body.userid}
    }).then((result)=>{
        console.log('findOne >', result);
        if(result){
            res.render('profile', {data: result})
        }
    })
}

//회원정보 수정 요청
exports.edit_profile = (req, res)=>{
    console.log(req.body);
    // User.edit_profile(req.body, (result)=>{
    //     res.send('회원정보 수정 성공!')
    // })

    //[After]
    //UPDATE user SET name = ?, pw = ?, where id = ?
    User.update({
        name: req.body.name,
        pw: req.body.pw
    },
    {
        where: {
            id: req.body.id,
        }
    }.then((result)=>{
        console.log('update >', result);
        res.send('회원정보 수정 성공!');
    })
    )
}

//회원 탈퇴 요청
exports.delete_profile = (req, res)=>{
    console.log(req.body); // {id: ~}
    // User.delete_profile(req.body.id, (result) => {
    //     res.send({deletedId: req.body.id});
    // })
    User.destroy({
        where: {id: req.body.id}
    }).then((result)=>{
        console.log('destroy >', result);
        res.send('삭제 성공!');
    })
}

// User.create({
//     userid: '?',
//     id: '?',
//     pw: '?',

// }).then((result)=>{
//     console.log('create >', result);
// })

// User.findAll().then((result)=>{
//     console.log('findAll >', result);
// })

// User.findAll().then((result)=>{
//     console.log('findAll >', result);
// })

// User.update({
//     name: req.body.name,
//     pw: req.body.pw
// },
// {
//     where: {
//         id: req.body.id,
//     }
// }.then((result)=>{
//     console.log('update >', result);
// })
// )


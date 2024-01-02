
const {User} = require('../models/index');
const bcrypt = require('bcrypt');

//GET
//페이지 이동

exports.main = (req,res) => {
    res.render('index');
};

exports.get_signup = (req,res)=>{
    res.render('signup');
}

exports.get_signin = (req,res)=>{
    res.render('signin');
}

exports.post_signup= async (req, res)=>{
    //res.send(req.body);
    //회원가입 요청시 비밀번호는 암호화한 값으로 DB에 추가
    //응답은 {result: true}
    try{
        const {pw, name, userid} = req.body;
        const hash = await bcrypt.hash(pw, saltRounds); //비밀번호 암호화
        await User.create({name, userid, pw: hash});
        res.send({result: true});
    }catch(err){
        console.error(err);
        res.send('Internal Server Error!');
    }
   


}

exports.post_signin= async(req,res)=>{
    try{
        const {userid, pw} = req.body;
        const user = await User.findOne({
            where: {userid},
        });

        if(user){
            //입력된 비밀번호를 암호화하여 기존 데이터와 비교
            const result = await bcrypt.compare(pw, user.pw);

            if(result){
                res.send({result: true, data: user});
            }else {
                res.send({result: false, message: '비밀번호가 틀렸습니다'});
            }
        }else{
            res.send({result: false, message: '존재하는 사용자가 없습니다'});
        }
    }catch (err){
        console.error(err);
        res.send('Internal Server Error!');
    }
    
}


const saltRounds = 11;

const models = require('../models/index');
const User = models.User;

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

exports.post_signup=(req, res)=>{
    console.log(req.body);
    // res.send(req.body);
}

exports.post_signin=(req,res)=>{
    console.log(req.body);
    // res.send(req.body);
}
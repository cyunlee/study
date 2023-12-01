const Visitor = require('../model/Visitor');

//Get /
exports.main = (req, res)=>{
    res.render('index');
}

//POST /visitor
exports.post_visitor = (req,res)=>{
    console.log(req.body);
    const{name, commet} = req.body;
    Visitor.postVisitor(req.body, () => {
        console.log(result);
        res.send({id: result, name, comment});
    })
}

//GET / visitor
exports.getVisitors = (req, res)=>{
    //[Before]
    // console.log(Visitor.getVisitors());
    // res.render('visitor', {data: 
    
    // Visitor.getVisitors()});

    //[After]
    Visitor.getVisitors((result)=>{
        console.log('Cvisitor.js >', result);
        res.render('visitor', {data: result});
    })
}
//[BEFORE]
//const Visitor = require('../model/Visitor`);

//[After]
//models: models/index에서 export한 db 객체 
const models = require('../models/index');
const Visitor = models.Visitor;

//[After]
//SELECT * FROM visitor
Visitor.findAll().then((result) => {
    console.log('findAll > ', result); 
})
//전체를 다 찾을 때는 findAll을 하면 됨

//[{}, {} ..]

//[After]
Visitor.create({})

Visitor.findOne({
    where: {id: req.params.id}
}).then((result)=>{
    console.log('findOne >', result);
})

//[After]
Visitor.update({
    name: req.body.name,
    comment: req.body.comment
},
{
    where: {
        id: req.body.id,

    }
}.then((result)=>{
    console.log('update >', result)
}))

Visitor.destroy({
    where: {id: req.body.id}
}).then((result)=>{
    console.log('destroy>', result);
    res.send('삭제 성공!');
})


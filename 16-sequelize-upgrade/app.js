const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models/index');

const indexRouter = require('./routes');
app.use('/', indexRouter);

app.get('*', (req,res)=>{
    res.render('404 error');
})

db.sequelize.sync({force: false}).then(()=>{

    //force: false => 테이블이 없으면 생성
    //force: true => 테이블 무조건 생성 (만약 DB가 있다면 다 삭제하고 다시 생성 -> prod 사용 x )
    app.listen(PORT, () => {
        console.log("http://localhost:${PORT");
    })
}).catch((err)=>{
    console.log(err);
})

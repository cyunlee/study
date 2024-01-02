const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models/');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require('./routes/user');
app.use('/', userRouter);

db.sequelize.sync({force: false}).then(()=>{

    //force: false => 테이블이 없으면 생성
    //force: true => 테이블 무조건 생성 (만약 DB가 있다면 다 삭제하고 다시 생성 -> prod 사용 x )
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
})

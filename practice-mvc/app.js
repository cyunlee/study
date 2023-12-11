const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const userInfo = {
    realId: 'helloworld',
    reqlPw: '1234',
    name: '홍길동',
    age: 20,
}
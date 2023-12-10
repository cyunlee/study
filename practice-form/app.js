const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/axios', (req, res)=>{
    res.send(req.query);
})

app.get('/practice1', (req, res) => {
    res.render('practice1');
})

app.get('/result1', (req, res)=>{
    console.log(req.query);
    //res.send('get 요청 성공!');

    res.render('prResult', {title: 'Get 요청', userInfo: req.query});
})

app.get('/practice2', (req, res)=> {
    res.render('practice2');
})

app.post('/result2', (req, res)=>{
    console.log(req.body);
    // res.send('post 요청 성공!');
    res.render('prResult', {title: 'Post 요청', userInfo: req.body});
})

app.listen(PORT, () => {
    console.log(`server is opening ${PORT}`);
})
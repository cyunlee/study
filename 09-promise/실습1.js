// 기존 callback 함수 코드
/*
function call(name, cb) {
    setTimeout(function () {
        console.log(name);
        cb(name);
    }, 1000);
}

function back(cb) {
    setTimeout(function () {
        console.log('back');
        cb('back');
    }, 1000);
}

function hell(cb) {
    setTimeout(function () {
        cb('callback hell');
    }, 1000);
}

// call -> back -> hell 순서로 실행
call('kim', function (name) {
    console.log(name + '반가워');
    back(function (txt) {
        console.log(txt + '을 실행했구나');
        hell(function (message) {
            console.log('여기는 ' + message);
        });
    });
});
*/

// promise로 변경!
function callPromise(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(name); // kim
            resolve(name);
        }, 1000);
    })
}

function backPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('back');
            resolve('back');
        }, 1000);
    })
}

function hellPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('callback hell');
        }, 1000);
    })
}

// 함수 호출
async function exec() {
    let user = await callPromise("kim");
    console.log(user+"반가워");
    let excute = await backPromise("back");
    console.log(excute+"을 실행했구나");
    let here = await hellPromise("callback hell");
    console.log("여기는", here);
}

exec();
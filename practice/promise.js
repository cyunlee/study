function callPromise(name){
    return new Promise(function (resolve, reject){
        setTimeout(function () {
            console.log(name);
            resolve(name);
        }, 1000);
    })
}

function backPromise(){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('back');
            resolve('back');
        }, 1000);
    })
}

function hellPromise() {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            resolve('callback hell');
        }, 1000);
    })
}

callPromise('kim')
    .then(function (name){
        console.log(`${name} 반가워!`);
        return backPromise();
    }).then(function(txt){
        console.log(`${txt}을 실행했구나!`)
        return hellPromise
    }).then(function(msg){
        console.log(msg);
    });
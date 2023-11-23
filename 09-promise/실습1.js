function call(name){
    return new Promise((resolve, reject)=> setTimeout(function(){
        console.log(name);
        resolve(name);
    },1000));
}

function back() {
    return new Promise((resolve, reject) => setTimeout(function(){
        console.log('back');
        resolve('back');
    }, 1000));
    
}

function hell(){
    return new Promise((resolve, reject)=>setTimeout(function () {
        resolve('callback hell');
    }, 1000));
    
}

// call('kim')
    // .then((name)=>{
    //     console.log(name + '반가워');
    //     return back();
    // }).then((txt)=>{
    //     console.log(txt + '을 실행했구나');
    //     return hell();
    // }).then((message)=>{
    //     console.log('여기는 ' + message);
    // });

async function exec() {
    let user = await callPromise("kim");
    console.log(user+"반가워");
    let execute = await backPromise("back");
    console.log(execute+"을 실행했구나");
    let here=await hellPromise("callback hell");
    console.log("여기는 ",here );
}

exec();

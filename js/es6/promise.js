function test(){
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("第一个网络请求返回结果");
            // reject("第一个网络请求失败结果")
        },1000)
    }).then(data =>{
        console.log(data);
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve("第二个网络请求返回结果");
                // reject("第二个网络请求失败结果")
            },1000)
        })
    }).then(data => {
        console.log(data);
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve("第三个网络请求返回结果");
                // reject("第三个网络请求失败结果")
            },1000)
        })
    }).then(data => {
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}

function test1(){
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("第一个网络请求返回结果");
            // reject("第一个网络请求失败结果")
        },1000)
    }).then(data =>{
        console.log(data);
        return Promise.resolve("代码2")
       
    }).then(data => {
        console.log(data);
        return Promise.resolve("代码3")
    }).then(data => {
        console.log(data);
        return Promise.reject("代码错误")
    }).catch((err)=>{
        console.log(err);
    })
}
///Promise.resolve 简写
function test2(){
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("第一个网络请求返回结果");
            // reject("第一个网络请求失败结果")
        },1000)
    }).then(data =>{
        console.log(data);
        return "代码2"
       
    }).then(data => {
        console.log(data);
        return "代码3"
    }).then(data => {
        console.log(data);
        return Promise.reject("代码错误")
    }).catch((err)=>{
        console.log(err);
    })
}
function test3(){
    var promise1 = Promise.resolve(3);
    var promise2 = 42;
    var promise3 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'foo');
    });

    Promise.all([promise1, promise2, promise3]).then(function(values) {
        console.log(values);
    });
}
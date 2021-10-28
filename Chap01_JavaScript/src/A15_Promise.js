
function sleep(ms) {
    const wakeUp = Date.now() + ms;
    while(Date.now() < wakeUp) {}
};

function normalFunc() {
    console.log('start');

    sleep(1000);

    console.log('end');
}
// normalFunc();
// console.log('');

function timeoutFunc() {
    console.log('start');

    setTimeout( () => {
        console.log('결과 확인');
        let result = 100;

        setTimeout(() => {
            console.log('abc');
            console.log(result / 2);
        }, 2000)
    }, 2000);

    console.log('end');
}
// timeoutFunc();

function promiseFunc(ms) {
    const promise = new Promise( (resolve, reject) => {

        if(ms < 1000) reject('Error');

        setTimeout(() => {
            // Ajax 요청에 2초 걸려서 데이터가 Success가 온다면..
            resolve('Success');
        }, ms)
    });

    return promise;
}

promiseFunc(1300)
.then( resp => {
    console.log(resp);
    const data = resp;

    // 성공한 뒤에 실행할 메서드(Ajax) 요청
    // return Ajax 요청(data)
})
.then( resp => {
    console.log('위 then이 요청한 Ajax가 성공한 경우 실행')
})
.catch( error => {
    console.log(error)
});

console.log('END')
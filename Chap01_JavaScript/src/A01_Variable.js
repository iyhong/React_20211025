
// 변수.
var nickname = 'NolBu';
console.log('Nickname: ' + nickname + ', typeof: ' + typeof(nickname));

// Error로 표시되지 않고 재 사용.
var nickname = 'HungBu';
console.log('Nickname: ' + nickname + ', typeof: ' + typeof(nickname));

// 자유롭게 타입이 다른 값을 할당할 수 있다.
nickname = 30;
console.log('Nickname: ' + nickname + ', typeof: ' + typeof(nickname));

nickname = new Date();
console.log('Nickname: ' + nickname + ', typeof: ' + typeof(nickname));

// var로 선언된 변수는 함수 이외의 { }의 범위가 존재하지 않음.
if(true) {
    var nickname = 'BangJa';
    console.log('IF IN => Nickname: ' + nickname + ', typeof: ' + typeof(nickname));
}
console.log('IF OUT => Nickname: ' + nickname + ', typeof: ' + typeof(nickname));

for(var i = 0; i < 3; i++) { }
console.log('i: ' + i + ', typeof: ' + typeof(i));
console.log('');


// ES6(ECMA2015)
let age = 20;
console.log('age: ' + age + ', typeof: ' + typeof(age));

// let로 선언된 변수는 재 선언이 안된다 => Error
// let age = 30;

// 타입 변경은 var과 같이 허용.
age = 'HangDan';
console.log('age: ' + age + ', typeof: ' + typeof(age));


// { } 스코프를 갖는다.
if(true) {
    // 지역변수 선언된 변수의 { } 내부에서만 유효한 변수가 된다.
    let age = 100;
    console.log('IF IN => age: ' + age + ', typeof: ' + typeof(age));
}
console.log('IF OUT => age: ' + age + ', typeof: ' + typeof(age));

for(let k = 0; k < 3; k++) { };
// console.log('FOR OUT => k: ' + k + ', typeof: ' + typeof(k));    // Error

// var로 선언하든 let로 선언하던, let로 선언된 변수는 재 선언 불가
// var age = 200;
console.log('');


// const => 상수.
const MY_PI = 3.1415;
console.log('MY_PI: ' + MY_PI + ', typeof: ' + typeof(MY_PI));

// 상수는 초기화 이후에 값을 변경할 수 없음. 따라서 선언과 함께 초기화를 할 필요가 있다.
// MY_PI = 100;

const obj = { name: 'NolBu', age: 30 };
// obj = { name: 'NolBu', age: 30 };        // 동일한 값이라도 변경은 안됨
obj.name = 'HungBu';
console.log(obj);

const ary = [10, 20];
// ary = [10, 20];
ary[0] = 100;
console.log(ary);


// var, let의 선언되는 위치가 다르다
var A = 10;
let A1 = 20;                // TDZ (일시적 사각지대에 선언됨)
console.log(window);        // node로는 확인 안됨.

var alert = 'Hello World';

(function() {
    // 함수 내부에서만 사용되는 지역변수
    var A2 = 100;
    let A3 = 101;
    var alert = 'Inner Alert'

    console.log(A2, A3, alert);
})();

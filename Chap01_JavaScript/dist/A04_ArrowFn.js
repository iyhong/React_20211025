"use strict";

(function () {
  // 함수 리터럴. 함수 표현식
  var onAdd = function onAdd(x, y) {
    console.log("".concat(x, " + ").concat(y, " = ").concat(x + y));
  };

  var onMin = function onMin(x, y) {
    return "".concat(x, " - ").concat(y, " = ").concat(x - y);
  };

  onAdd(10, 20);
  console.log(onMin(10, 20));
  console.log(''); // ES6. 
  // 함수 리터럴 방식만 변경 가능
  // function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다

  var onMulti = function onMulti(x, y) {
    console.log("".concat(x, " * ").concat(y, " = ").concat(x * y));
  };

  onMulti(10, 20); // Arrow 함수 내부에 리턴 구문 딱 1줄만 있는 경우는 {}와 return을 생략하고 한줄에 기술할 수 있다.

  var onDiv = function onDiv(x, y) {
    return "".concat(x, " / ").concat(y, " = ").concat(x / y);
  };

  console.log(onDiv(10, 2)); // Arrow 함수가 한 줄로 기술되어 있을때 => 가 값이 아닌 경우는 실행

  var onDouble = function onDouble(x, y) {
    return console.log("".concat(x, " ** ").concat(y, " = ").concat(Math.pow(x, y)));
  };

  onDouble(2, 3); // 매개변수가 없는 경우는 () 생략할 수 없음

  var noParam = function noParam() {
    return Math.pow(3, 3);
  };

  console.log(noParam()); // 매개변수가 1개인 경우는 ()를 생략할 수 있음. 1개 이상이면 반드시 매개변수를 ()로 묶어야 한다.

  var oneParam = function oneParam(x) {
    return Math.pow(3, x);
  };

  console.log(oneParam(3)); // Arrow 함수 이외의 함수에도 매개변수의 기본값을 설정할 수 있다.

  var initFunc = function initFunc() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return "".concat(x, " + ").concat(y, " = ").concat(x + y);
  };

  console.log(initFunc());
  console.log(initFunc(10, 20));
})();
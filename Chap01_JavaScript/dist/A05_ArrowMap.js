"use strict";

(function () {
  // 일반 함수. 
  function fn() {
    console.log('funcion');
  }

  fn();
  /* 이런 식으로는 사용불가
  fn() => {
   }
  */

  var ary = [10, 11, 100, 101, 1000]; // 익명함수(이름이 없는 함수)
  // ary의 각 값을 *2 해서 20, 22.. 형태의 새로운 배열을 생성

  var newAry = [];

  for (var i = 0; i < ary.length; i++) {
    var value = ary[i] * 2;
    newAry.push(value);
  }

  console.log(ary, newAry); // map => 순환 객체
  // 배열의 값을 1개씩 익명함수의 매개변수 item에 대입하고 함수를 실행 

  var mapAry = ary.map(function (item) {
    return item * 2;
  });
  console.log(ary, mapAry); // filter => 걸러낼 목적으로 사용. 리턴값이 true면 해당 값을 리턴

  var filterAry = ary.filter(function (item) {
    return item % 2 === 0;
  });
  console.log(ary, filterAry);
})();
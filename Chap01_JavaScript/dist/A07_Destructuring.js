"use strict";

(function () {
  var obj = {
    name: 'NolBu',
    age: 30
  };
  var ary = ['A', 'B', 'C'];
  console.log(obj, ary); // obj의 key 값과 동일한 이름의 변수에 값을 대입해 준다.
  // let name = 'ABC';        // 이 변수가 있으면 동일한 이름으로 변수 선언 안됨 => let

  var name = obj.name,
      age = obj.age;
  console.log(name, age); // 이미 선언된 변수가 있으면 Alias를 이용

  var nickname = obj.name,
      num = obj.age;
  console.log(nickname, num); // 추후에 추가될 수 있는 변수의 기본 값을 지정

  var x = obj.name,
      _obj$age = obj.age,
      y = _obj$age === void 0 ? 0 : _obj$age,
      _obj$z = obj.z,
      z = _obj$z === void 0 ? 100 : _obj$z;
  console.log(x, y, z); // 배열도 가능
  // Alias 설정이 안됨.

  var a = ary[0],
      b = ary[1],
      c = ary[2],
      _ary$ = ary[3],
      d = _ary$ === void 0 ? 10 : _ary$;
  console.log(a, b, c, d);
})();
"use strict";

(function () {
  // 함수 기반의 Class 선언
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.info = function () {
    return "".concat(this.name, "\uC758 \uB098\uC774\uB294 ").concat(this.age, "\uC785\uB2C8\uB2E4.");
  };

  var nolbu = new Person('놀부', 30);
  console.log(nolbu.name);
  console.log(nolbu.info());
  var hungbu = new Person('흥부', 20);
  console.log(hungbu.name);
  console.log(hungbu.info());
  console.log(nolbu);
  console.log(hungbu);
})();
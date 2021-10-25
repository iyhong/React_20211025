"use strict";

// ES6
(function () {
  var name = 'NolBu';
  console.log('My Name is ' + name);
  console.log("My Name is ".concat(name));
  var obj = {
    name: 'HungBu',
    age: 25,
    child: ['one', 'two'],
    info: {
      tel: '010-1234-5678',
      add: 'Seoul'
    },
    toString: function toString() {
      console.log(this.name + '님의 나이는 ' + this.age + '세 입니다');
      console.log("".concat(this.name, "\uB2D8\uC758 \uB098\uC774\uB294 ").concat(this.age, "\uC138 \uC785\uB2C8\uB2E4")); // ES6 - tempate 문자열

      console.log("".concat(this.name, "\uB2D8\uC758 \uC804\uBC88\uC740 ").concat(this.info.tel, "\uC774\uACE0\n        \uC8FC\uC18C\uB294 ").concat(this.info.add, "\uC785\uB2C8\uB2E4."));
    }
  };
  obj.toString();
})();
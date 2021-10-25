"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "info",
    value: function info() {
      return "".concat(this.name, "\uB2D8\uC758 \uB098\uC774\uB294 ").concat(this.age, "\uC785\uB2C8\uB2E4");
    }
  }]);

  return Person;
}();

var nolbu = new Person('놀부', 30);
console.log(nolbu.name);
console.log(nolbu.info());
var hungbu = new Person('흥부', 20);
console.log(hungbu.name);
console.log(hungbu.info());
console.log(nolbu);
console.log(hungbu);
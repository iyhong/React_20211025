"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Jumsu = /*#__PURE__*/function () {
  function Jumsu(name, kor, eng) {
    _classCallCheck(this, Jumsu);

    this._name = name;
    this._kor = kor;
    this._eng = eng;
  } // 일반 메서드


  _createClass(Jumsu, [{
    key: "onTotal",
    value: function onTotal() {
      return this._kor + this._eng;
    }
  }, {
    key: "display",
    value: function display() {
      console.log("".concat(this._name, "\uC758 \uCD1D\uC810\uC740 ").concat(this.onTotal(), "\uC774\uACE0 \uD3C9\uADE0\uC740 ").concat(this.onTotal() / 2, "\uC785\uB2C8\uB2E4"));
    }
  }, {
    key: "getName",
    value: function getName() {
      return this._name;
    }
  }, {
    key: "setName",
    value: function setName(name) {
      if (name === '') return '이름을 입력하세요';
      this._name = name;
    } // JavaScript Getter / Setter 메서드
    // 메서드지만 사용자는 프로퍼티 형태로 참조한다.

  }, {
    key: "kor",
    get: function get() {
      return this._kor;
    } // setter가 없으므로 _kor 값은 변경할 수 없이 참조만 가능.
    // set kor(kor) {
    //     if(kor > 100) alert('잘못된 값입니다.')
    //     this._kor = kor;
    // }

  }]);

  return Jumsu;
}();

;
var nolbu = new Jumsu('Nolbu', 100, 90);
console.log(nolbu._name); // Nolbu

console.log(nolbu.getName());
nolbu.display(); // nolbu._name = '흥부'

nolbu.setName('흥부');
console.log(nolbu.getName());
nolbu.display(); // Setter 메서드. 사용은 프로퍼티처럼 한다.

nolbu.kor = 50;
console.log(nolbu.kor);
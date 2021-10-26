
조건1    &&     조건2
true            체크 함
false           체크 안함

var value = false
var x = value && 100;       x => false

// 0, '', false, undefined, null, NaN => false
// 변수에 값이 있으면 true
var value = 10;
var x = value && 200;       x => 200

조건1    ||     조건2
true            체크 안함
false           체크 함

var value = false
var x = value || 100;       x => 100

var value = 10;
var x = value || 200;       x => 10



(function(){

    let obj = {
        name: 'NolBu',
        age: 30
    }

    let ary = ['A', 'B', 'C'];
    console.log(obj, ary);

    // obj의 key 값과 동일한 이름의 변수에 값을 대입해 준다.
    // let name = 'ABC';        // 이 변수가 있으면 동일한 이름으로 변수 선언 안됨 => let
    let { name, age } = obj;
    console.log(name, age);

    // 이미 선언된 변수가 있으면 Alias를 이용
    let { name: nickname, age: num} = obj;
    console.log(nickname, num);

    // 추후에 추가될 수 있는 변수의 기본 값을 지정
    let { name: x, age: y = 0, z = 100 } = obj;
    console.log(x, y, z);

    // 배열도 가능
    // Alias 설정이 안됨.
    let [a, b, c, d = 10] = ary;
    console.log(a, b, c, d); 

})();

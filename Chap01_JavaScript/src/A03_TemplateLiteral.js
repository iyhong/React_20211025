
// ES6
(function(){

    let name = 'NolBu';
    console.log('My Name is ' + name);
    console.log(`My Name is ${name}`);

    let obj = {
        name: 'HungBu',
        age: 25,
        child: ['one', 'two'],
        info: {
            tel: '010-1234-5678',
            add: 'Seoul'
        },
        toString: function(){
            console.log(this.name + '님의 나이는 ' + this.age + '세 입니다');
            console.log(`${this.name}님의 나이는 ${this.age}세 입니다`);

            // ES6 - tempate 문자열
            console.log(`${this.name}님의 전번은 ${this.info.tel}이고
        주소는 ${this.info.add}입니다.`)
        }
    }
    
    obj.toString();

})();
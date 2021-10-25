
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        return `${this.name}님의 나이는 ${this.age}입니다`;
    }
}

const nolbu = new Person('놀부', 30);
console.log(nolbu.name);
console.log(nolbu.info());

const hungbu = new Person('흥부', 20);
console.log(hungbu.name);
console.log(hungbu.info());

console.log(nolbu);
console.log(hungbu)
class Person {
    constructor(name, age, add){
        this.name = name;
        this.age = age;
        this.add = add;
    }

    toString() {
        console.log(`[Person] name=${this.name} age=${this.age} add=${this.add}`);
    }

    getName() {
        return this.name;
    }
};

class Employee extends Person {

    constructor(name, age, address, company) {
        super(name, age, address);
        this.company = company;
    }

    toString() {
        console.log(`[Employee] name=${this.name} age=${this.age} add=${this.add}, comp=${this.company}`);
    }

    getCompany() {
        return this.company;
    }
}



let hungBu = new Person('HungBu', 20, 'Busan');
hungBu.toString();

let nolbu = new Employee('놀부', 30, 'Seoul', 'ABC');
nolbu.toString();

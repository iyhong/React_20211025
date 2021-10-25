
class Jumsu {

    constructor(name, kor, eng) {
        this._name = name;
        this._kor = kor;
        this._eng = eng;
    }

    // 일반 메서드
    onTotal() {
        return this._kor + this._eng;
    }

    display() {
        console.log(`${this._name}의 총점은 ${this.onTotal()}이고 평균은 ${this.onTotal() / 2}입니다`);
    }

    getName() {
        return this._name;
    }
    setName(name) {
        if(name === '') return '이름을 입력하세요';
        this._name = name;
    }

    // JavaScript Getter / Setter 메서드
    // 메서드지만 사용자는 프로퍼티 형태로 참조한다.
    get kor() {
        return this._kor;
    }

    // setter가 없으므로 _kor 값은 변경할 수 없이 참조만 가능.
    // set kor(kor) {
    //     if(kor > 100) alert('잘못된 값입니다.')
    //     this._kor = kor;
    // }

};


let nolbu = new Jumsu('Nolbu', 100, 90);
console.log(nolbu._name);                       // Nolbu
console.log(nolbu.getName());
nolbu.display();

// nolbu._name = '흥부'
nolbu.setName('흥부');
console.log(nolbu.getName());
nolbu.display();

// Setter 메서드. 사용은 프로퍼티처럼 한다.
nolbu.kor = 50;
console.log(nolbu.kor);

// 현재 브라우저에서는 지원 안함. webpack으로 결합할 수 있다.
import { num, onAdd, longNameFunction as long } from './A12_ExportModule'

// default로 export된 변수나 함수는 임의의 이름을 지정해서 사용 가능.
import onDefault, { name } from './A13_DefaultModule'

console.log(num);
console.log(onAdd(10, 20));
console.log(long);

console.log(onDefault(10, 20));
console.log(name);


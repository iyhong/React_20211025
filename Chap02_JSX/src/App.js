import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import A01ClassComp from './components/A01ClassComp'
import A02FuncComp from './components/A02FuncComp'
import A03Fragment from './components/A03Fragment'
import A04Library from './components/A04Library'

// JSX => JavaScript XML
// 1. 종료 태그가 항상 있어야 한다.
// 2. 태그는 1개의 태그만 리턴이 가능하다.
// 3. 태그의 속성은 JavaScript DOM 제어 속성 명령에 따른다. 
//  <div class="xxx"></div> => <div className="xxx"></div> <label for => forName
// 4. 함수의 반환 값 JSX를 태그로 사용하려면 함수의 첫글자는 대문자로..

/*
// 1. 단일 DOM
const elem = <h1>Hello World 01</h1>
function App() {
  // return elem;
  return <h1>Hello World 02</h1>
}

// 2. 여러개의 DOM을 생성하는 경우
const elem = <div>
    <h1>Hello World 03</h1>
    <div>This is Sample 03</div>
  </div>

function App() {
  // return elem;
  return <div className="card-body">
    <h1>Hello World 04</h1>
    <div>This is Sample 04</div>
  </div>
}
export default App;


// 3. 다중 DOM을 생성하는 경우 return에 주의
const elem = 
  <div>
    <h1>Hello World 05</h1>
    <div>This is Sample 05</div>
  </div>

function App() {
  // return elem;
  return (          // () => DOM을 하나로 묶어서 반환
    <div>
      <h1>Hello World 05</h1>
      <div>This is Sample 05</div>
    </div>
  )
}
*/

// 4. 함수의 반환값도 가능
function makeOne(name) {
  const x = 10;
  const y = 20;

  return (
    <div>
      Name: {name}, X: {x}, Y: {y} 
    </div>
  )
}

// Tag로 사용하려면 첫 글자를 대문자로..
function MakeTwo(props) {
  return (
    <div>
      <h5>MakeTwo: {props.name}</h5>
      <div>This is MakeTwo Function</div>
    </div>
  )
}
function App() {
  // return makeOne('NolBu')
  const name = 'BangJa';
  const age = 20;
  const user = { name: 'HangDan', age: 20 };
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="card-body">

      <A04Library /><br />
      
      <A03Fragment /><br />

      <A02FuncComp /><br />

      <A01ClassComp /><br />

      <div>DOM 내부에서 변수의 참조, JavaScript 정의 등을 이용하는 경우 바인딩(보간법)사용</div>
      { makeOne('NolBu') }
      <br />

      <div>
        <MakeTwo name="HungBu" /><br />

        Name: {name}<br />
        Age: {age}<br />
        User: {user.name} / {user.age} / {user.address}<br />
        onAdd: {onAdd(10, 20)}<br />
        <img src="./images/tree.jpeg" alt="Tree" />
      </div>
    </div>
  )
}

export default App;


/*
function App() {
  return (
    <div className="App">
      <h1>Chap02 JSX</h1>
    </div>
  );
}

export default App;
*/
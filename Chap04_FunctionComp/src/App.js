import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

import A01FuncProps from './components/A01FuncProps'
import A02FuncState from './components/A02FuncState'

function App() {
  
  const user = { name: 'HungBu', age: 20 };
  const ary = [10, 20, 30];
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="card-body">
      <h1>Chap04 Function Component</h1>

      <A02FuncState /><br />

      <A01FuncProps name="NolBu" age={30} user={user} arr={ary} onAdd={onAdd} isChecked >
        This is App Content
      </A01FuncProps>
    </div>
  );
}

export default App;

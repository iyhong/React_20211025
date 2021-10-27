import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

import A01FuncProps from './components/A01FuncProps'
import A02FuncState from './components/A02FuncState'
import A03FuncEvent from './components/A03FuncEvent'
import A04CreateDOM from './components/A04CreateDOM'
import A05Hook from './components/A05Hook'
import A06Hook from './components/A06Hook'
import A07HigherOrder from './components/A07HigherOrder'
import A08Immer from './components/A08Immer'
import A09Currency from './components/A09Currency'

function App() {
  
  const user = { name: 'HungBu', age: 20 };
  const ary = [10, 20, 30];
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="card-body">
      <h1>Chap04 Function Component</h1>

      <A09Currency title="A09 Currency" /><br />

      <A08Immer /><br />

      <A07HigherOrder age={100} /><br />

      <A06Hook /><br />

      <A05Hook /><br />

      <A04CreateDOM /><br />

      <A03FuncEvent /><br />

      <A02FuncState /><br />

      <A01FuncProps name="NolBu" age={30} user={user} arr={ary} onAdd={onAdd} isChecked >
        This is App Content
      </A01FuncProps>
    </div>
  );
}

export default App;

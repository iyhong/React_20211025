import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import A01ClassProps from './components/A01ClassProps'
import A02ClassState from './components/A02ClassState'
import A03ClassEvent from './components/A03ClassEvent'

function App() {
  const user = { name: 'HungBu', age: 20 };
  const ary = [10, 20, 30];
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="card-body">
      <h1>Chap03 Class Component</h1>

      <A03ClassEvent /><br />
      
      <A02ClassState /><br />

      <A01ClassProps name="NolBu" age={30} user={user} arr={ary} onAdd={onAdd} isChecked >
        This is App Content
      </A01ClassProps>
    </div>
  );
}

export default App;

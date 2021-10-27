import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import A01ClassProps from './components/A01ClassProps'
import A02ClassState from './components/A02ClassState'
import A03ClassEvent from './components/A03ClassEvent'
import A04CreateDOM from './components/A04CreateDOM'
import A05PureComponent from './components/A05PureComponent'
import A06ShallowEqual from './components/A06ShallowEqual'
import A07LifeCycle from './components/A07LifeCycle'
import A08HigherOrderComp from './components/A08HigherOrderComp'
import A09Currency from './components/A09Currency'

function App() {
  const user = { name: 'HungBu', age: 20 };
  const ary = [10, 20, 30];
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="card-body">
      <h1>Chap03 Class Component</h1>

      <A09Currency /><br />

      <A08HigherOrderComp age={30} /><br />

      <A07LifeCycle isChecked={false} /><br />
      
      <A06ShallowEqual /><br />

      <A05PureComponent /><br />

      <A04CreateDOM /><br />

      <A03ClassEvent /><br />

      <A02ClassState /><br />

      <A01ClassProps name="NolBu" age={30} user={user} arr={ary} onAdd={onAdd} isChecked >
        This is App Content
      </A01ClassProps>
    </div>
  );
}

export default App;

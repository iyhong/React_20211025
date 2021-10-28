
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route, Redirect } from 'react-router-dom'

// npm i react-router react-router-dom
// npm i react-loader-spinner
import A01FunctionProps from './components/A01FunctionProps'
import A02FunctionState from './components/A02FunctionState'
import A03Currency from './components/A03Currency'
import A04History from './components/A04History'
import A05MatchParam from './components/A05MatchParam'

function App() {
  const user = {name: 'HungBu', age: 20};
  const ary = ['a', 'b', 'c'];
  const onPlus = (x, y) => {
    return `${x} + ${y} = ${x + y}`;
  }

  return (
    <div className="card-body">
      
      <div>index.js에 BrowserRouter를 먼저 등록해야 한다.</div>

      <Link to="/">Home</Link> | {' '}
      <Link to="/index">Index</Link> | {' '}
      <Link to="/A01Func">A01Func</Link> | {' '}
      <Link to="/A02State">A02State</Link> | {' '}
      <Link to="/A03Currency">A03Currency</Link> | <Link to="/A03">A03</Link> | {' '}
      <Link to="/A04History">A04History</Link> | {' '}
      <Link to="/A05MatchParam/5/data/NolBu">A05 MNolBu</Link> | {' '}
      <Link to="/A05MatchParam/3/data/HungBu">A05 HungBu</Link> | {' '}
      <hr />

      {/* exact => 매칭되는 패스만 표시 */}
      <Redirect   from="/"    to="/index"   exact={true} />
      <Route path="/index"             render={ () => (
                                                    <div>
                                                      <h1>Index Page</h1>
                                                      <div>This is Index Page</div>
                                                    </div>
                                                  )}/>
      <Route path="/A01Func"      render={ () => 
              <A01FunctionProps name="Nolbu" age={30} user={user} arr={ary} onPlus={onPlus} isChecked /> } />
      <Route path="/A02State"                     component={A02FunctionState} />        
      <Route path={["/A03Currency", "/A03"]}      component={A03Currency} />
      <Route path="/A04History"                   component={A04History} />
      {/* path base로 데이터 전달 => id와 name은 path에 기술된 값을 저장하는 변수명.
        data => 일반적인 패스. Link에서는 기술한 path와 동일하게 패스 설정할 필요가 있음
        to="/A05MatchParam/data/" => X
        to="/A05MatchParam/5/data/NolBu" => O, id="5", name="NolBu". 값은 A05MatchParam 에서 받아 사용.
      */}
      <Route path="/A05MatchParam/:id/data/:name"     component={A05MatchParam} />  
    </div>
  );
}

export default App;

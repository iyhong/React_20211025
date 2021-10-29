import 'bootstrap/dist/css/bootstrap.css';

import ColorBox from './components/ColorBox'
import SelectColor from './components/SelectColor'
import TodoTemplate from './components/TodoTemplate'

import ColorBoxContext from './modules/ColorBoxContext'
import { SelectColorContextProvider } from './modules/SelectColorContext'
import { TodoListContextProvider } from './modules/TodoListContext'

function App() {
  const colorValue = {title: 'ColorBox Context', color: 'orange'};
  return (
    <div className="card-body">
        <h1>Chap10 Context</h1>
        
        {/* Context에서 정의한 변수의 값을 Provier에서 한다. 속성명은 value={} 형식 */}
        <ColorBoxContext.Provider value={colorValue}>
          <SelectColorContextProvider>
            <ColorBox />
            <SelectColor />
          </SelectColorContextProvider>
        </ColorBoxContext.Provider>
        
        <hr />
        <TodoListContextProvider>
          <TodoTemplate />
        </TodoListContextProvider>
        </div>
  );
}

export default App;

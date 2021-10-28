import 'bootstrap/dist/css/bootstrap.css'
import A01Axios from './components/A01Axios'
import ContactApp from './components/ContactApp'

// npm i axios
// npm i react-router react-router-dom
function App() {

  return (
    <div className="card-body">
        <h1>Axios</h1>

        <ContactApp /><br/>

        <A01Axios />
        
    </div>
  );
}

export default App;

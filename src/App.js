
import './App.css';
import Header from './Components/Header/Header';
import Imc from './Components/IMC/Imc';
import Login from './Components/Login/LoginControl';
import { Heading1, Loader } from './Components/Styles/styles'

function App() {
  return (
    <div className="App">
      <Heading1>
        Styles
        <span>Subtitulo</span>
      </Heading1>
      <Header title="Título do APP"/>
      <Imc />

      <Login />
      
      <Loader />
    </div>
  );
}

export default App;

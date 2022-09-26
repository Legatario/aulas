
import './App.css';
import Header from './Components/Header/Header';
import Imc from './Components/IMC/Imc';
import Login from './Components/Login/LoginControl'

function App() {
  return (
    <div className="App">
      <Header title="Título do APP"/>
      <Imc />

      <Login />
    </div>
  );
}

export default App;

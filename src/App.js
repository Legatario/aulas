
import './App.css';
import Header from './Components/Header/Header';
import Imc from './Components/IMC/Imc';
import Login from './Components/Login/Login'

function App() {
  return (
    <div className="App">
      <Header title="Título do APP"/>
      <Imc />

      <Login isLoggedIn={false} name={'Luis'}/>
    </div>
  );
}

export default App;

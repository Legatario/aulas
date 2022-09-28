
import './App.css';
import Header from './Components/Header/Header';
import Imc from './Components/IMC/Imc';
import Login from './Components/Login/LoginControl';
import { Heading1, Loader } from './Components/Styles/styles';
// import { Just } from './Components/Styles/styles';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Baseboard from './Components/Footer/Basebord';

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
    
    {/* <Just>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Just> */}
    
    <Loader />

    <Baseboard />
    </div>
    );
  }
  
  export default App;
  
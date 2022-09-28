import Header from './Components/Header/Header';
import Imc from './Components/IMC/Imc';
import Login from './Components/Login/LoginControl';
import { Loader } from './Components/Styles/styles';
// import { Just } from './Components/Styles/styles';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import './App.css'

import {Box, Container, ThemeProvider} from  '@mui/system'
import React from 'react';
import Baseboard from './Components/Footer/Basebord';
import { themeOne, themeTwo } from './theme';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
       <Header title="My APP"/>
      </div>

      <Container maxWidth='sm'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        marginTop: '2rem'
      }}>
        <ThemeProvider theme={ themeOne }>
          <Box sx={{
            bgcolor:'background.paper',
            boxShadow: 1,
            borderRadius: 3,
            p: 2,
            minWidth: 250
          }}>
            <Box
              sx={{
                color: 'text.secondary'
              }}>
                Visualizações
            </Box>

            <Box  
              sx={{
                color: 'text.secondary',
                fontSize: 32,
                fontWeight: 'bold'
              }}>
                30k
            </Box>

            <Box  sx={{
              color: 'success.dark',
              display: 'inline',
              fontWeight: 'bold',
              mx: 0.5,
              fontSize: 14
              }}>
                +15%
            </Box>

            <Box  
              sx={{
                color: 'text.secondary',
                display: 'inline',
                fontWeight: 'bold',
                mx: 0.5,
                fontSize: 14
              }}>
                vs last week
              </Box>
          </Box>
        </ThemeProvider>

        <ThemeProvider theme={ themeTwo }>
          <Box sx={{
            bgcolor:'background.paper',
            boxShadow: 1,
            borderRadius: 3,
            p: 2,
            minWidth: 250
          }}>
            <Box
              sx={{
                color: 'text.secondary'
              }}>
                Seções
            </Box>

            <Box  
              sx={{
                color: 'text.secondary',
                fontSize: 32,
                fontWeight: 'bold'
              }}>
                100k
            </Box>

            <Box  sx={{
              color: 'success.dark',
              display: 'inline',
              fontWeight: 'bold',
              mx: 0.5,
              fontSize: 14
              }}>
                +10%
            </Box>

            <Box  
              sx={{
              color: 'text.secondary',
              display: 'inline',
              fontWeight: 'bold',
              mx: 0.5,
              fontSize: 14
              }}>
                vs last week
              </Box>
          </Box>
        </ThemeProvider>

      </Container>

      <div className='App'>

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
      </div>

      <Baseboard />

      </React.Fragment>

    );
  }
  
  export default App;
  
import { createTheme } from "@mui/system";

export const themeOne = createTheme({
    palette:{
        background:{
            paper: '#d5f6f6'
        },
        text:{
            primary: '#173a5e',
            secondary: '#46505a'
        },
        action:{
            active: '#001e3c',
        },
        success:{
            dark: '#009688'
        }
    }
})


export const themeTwo = createTheme({
    palette:{
        background:{
            paper: '#D8D8D8'
        },
        text:{
            primary: '##46505a',
            secondary: '173a5e'
        },
        action:{
            active: '#001e3c',
        },
        success:{
            dark: '#009688'
        }
    }
})
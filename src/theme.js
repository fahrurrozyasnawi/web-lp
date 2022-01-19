import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#14213d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#fca311',
    },
    background: {
      default: '#e5e5e5',
    },
  },
})

export default theme

import theme from './theme'
import DropDown from './components/DropDown/dropdown'
import { ThemeProvider  } from '@mui/material/styles'
import { Container, Button, Typography, FormControl ,InputLabel, Select, MenuItem  } from "@mui/material"

function App() {

  return (
    
    <ThemeProvider theme={theme}>
      <Container>
        <DropDown></DropDown>

        <Typography variant='h2'>
          Mi primera con material
        </Typography>
        <Button color='secondary' variant='contained'>
          Hola mundo
        </Button>
      </Container>
    </ThemeProvider>
  )
}

export default App

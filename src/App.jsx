import theme from './theme'
import { ThemeProvider } from '@mui/material/styles'
import { Container, Button, Typography } from "@mui/material"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
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

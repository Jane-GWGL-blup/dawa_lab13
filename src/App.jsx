import { useState, useEffect } from "react";
import theme from "./theme";
import { Header, Footer, CardPokemons, DropDown } from "./components";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import { get } from "./services";
import "./App.css";


function App() {
  const [type, setType] = useState("https://pokeapi.co/api/v2/type/1/");

  const [types, setTypes] = useState([]);

  const [pokemons, setPokemons] = useState([]);

  async function getTypes() {
    const types = await get("type");
    setTypes(types.results);

    await getPokemons(type);
  }

  async function getPokemons(url) {
    const id = url.split("/");
    const pokemons = await get(`type/${id[id.length - 2]}`);
    setPokemons(pokemons.pokemon);
  }

  const handleChange = (event) => {
    setType(event.target.value);
    getPokemons(event.target.value);
  };

  useEffect(() => {
    // llamo a la funcion
    getTypes();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header/>
        <DropDown type={type} handleChange={handleChange} types={types} />
        <CardPokemons pokemons={pokemons} />
        <Footer/>
      </Container>
    </ThemeProvider>
  );
}

export default App;

import { useState, useEffect } from 'react';
import {Box, InputLabel, MenuItem , FormControl, Select} from '@mui/material';


export default function DropDown() {
  const [pokemon, setPokemon] = useState('');
  const [types, setType] = useState([]);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  
  async function getTypes(){
    let url='https://pokeapi.co/api/v2/type'
    const response = fetch(url)
    .then((res)=> {
      console.log(res)
    })
    .then((json)=>{
      setType((json.results))
    })
    const data = response.json
    console.log(data)
  }
  useEffect(()=>{
    getTypes();
  },[]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pokemon</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pokemon}
          label="Age"
          onChange={handleChange}
        >
          
          <MenuItem value=""></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

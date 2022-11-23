import { useState, useEffect } from "react";
import { CardBooks, FooterBook, HeaderBook } from "../../components";
import { Card, CardContent, Container, Box, Button, TextField, Grid } from "@mui/material"
import { searchBooks } from "../../services";

const Books = () => {
    const [ search, setSearch] = useState("")
    const [ books, setBooks] = useState([]);

/*
    async function getBooks(search) {
        const id = search.split("/");
        const books = await searchBooks(`${id[id.length - 2]}`)
        setBook(books.items)
        console.log(books.items);
      }
*/
    const handleSearch = async ()=> {
        //getBooks(event.target.value)
        const books = await searchBooks(search)
        setBooks(books.items)
        console.log(books.items);
    }
   
    return(
        <Container class="container-book" maxWidth="md">
            <HeaderBook/>
            <img  class="book-gif2" src="book-gif2.gif"/>
            <Box class="box-book" my={4}>
                <Card>
                    <CardContent class="cardContent-book">
                        <Box    
                             sx={{
                            display: "flex",
                            gap: 3,
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
                            <TextField 
                                id="outlined-basic"
                                label="Busca un libro"
                                fullWidth
                                size="small"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                variant="outlined"
                            />
                            <Box my={2}>
                                <Button size="large" variant="contained" onClick={handleSearch}>Buscar</Button>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <hr class="hr-book"/>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    {books.length > 0 &&
                books.map((book, index) => <Grid  xs={12} sm={3} sx={{padding:2}}> <CardBooks key={index} book={book} /></Grid>)}
                </Grid>         
            <FooterBook/>
            </Container>
        </Container>
    )
}

export default Books;


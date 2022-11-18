import { useState, useEffect } from "react";
import { CardBooks } from "../../components";
import { Card, CardContent, Container, Box, Button, TextField } from "@mui/material"
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
        <Container maxWidth="md">
            <Box my={4}>
                <Card>
                    <CardContent>
                        <Box sx={{
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
            {books.length > 0 &&
            books.map((book, index) =>  <CardBooks key={index} book={book} />)}
        </Container>
    )
}

export default Books;


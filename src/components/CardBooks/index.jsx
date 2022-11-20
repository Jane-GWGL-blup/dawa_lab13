import { Paper, Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";


  const CardBooks = ({ book }) => {
    return (
      <Box>
        <Grid >
          <Grid >
            <Card class="card-books">
                <CardMedia
                  class="cardMedia-book"
                  component="img"
                  image={book.volumeInfo?.imageLinks?.thumbnail}
                  height={300}
                />
                <CardContent>
                  <Box>
                    <Typography variant="h7">{book.volumeInfo.title}</Typography>
                  </Box>
                  <img  class="book-gif" src="book-gif1.gif"/>
                  <p>{book.volumeInfo.description}</p>
                </CardContent>
             
            </Card>
          </Grid>
        </Grid>
      </Box>
      
    );
  };
  
  export default CardBooks;
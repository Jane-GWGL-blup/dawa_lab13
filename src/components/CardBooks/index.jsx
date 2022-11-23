import { Paper, Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";


  const CardBooks = ({ book }) => {
    return (
      <Box>
        <Grid >
          <Grid >
            <Card class="card-books">
              <CardMedia
                sx={{ flex: '1 0 auto' }}
                class="cardMedia-book"
                component="img"
                image={book.volumeInfo?.imageLinks?.thumbnail}
                height={300}
              /> 
              <CardContent>
                <div id="global">
                    <Box>
                      <img  class="book-gif" src="book-gif1.gif"/><br/>
                      <Typography variant="h6">{book.volumeInfo.title}</Typography><br/>
                    </Box>
                    <Box>
                      <p>{book.volumeInfo.description}</p>
                    </Box>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      
    );
  };
  
  export default CardBooks;
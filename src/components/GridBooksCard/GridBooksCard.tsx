import Grid from '@mui/material/Grid';
import { BookCard } from '../BookCard/BookCard';
import { mockDataOfBooks } from '../SearchInput/mockDataOfBooks';

export const GridBooksCard = () => (
  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {mockDataOfBooks.map((book) => (
      <Grid item xs={12} sm={4} md={4} key={book.id}>
        <BookCard bookInfo={book} />
      </Grid>
    ))}
  </Grid>
);

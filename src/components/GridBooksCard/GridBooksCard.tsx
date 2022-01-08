import { FunctionComponent } from 'react';
import Grid from '@mui/material/Grid';
import { BookCard } from '../BookCard/BookCard';
import { Book } from '../../Interfaces/Book';

interface Props {
  books: Book[];
}
export const GridBooksCard: FunctionComponent<Props> = ({ books }) => (
  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {books.map((book: Book) => (
      <Grid item xs={12} sm={4} md={4} key={book.id}>
        <BookCard bookInfo={book} />
      </Grid>
    ))}
  </Grid>
);

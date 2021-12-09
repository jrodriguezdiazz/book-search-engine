import { Fragment, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Header } from './components/Header/Header';
import { SearchInput } from './components/SearchInput/SearchInput';
import { GridBooksCard } from './components/GridBooksCard/GridBooksCard';
import { Book } from './Interfaces/Book';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container id="container">
        <SearchInput setBooks={setBooks} />
        <GridBooksCard books={books} />
      </Container>
    </Fragment>
  );
}

export default App;

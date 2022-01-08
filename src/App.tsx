import { useMemo, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Header } from './components/Header/Header';
import { SearchInput } from './components/SearchInput/SearchInput';
import { GridBooksCard } from './components/GridBooksCard/GridBooksCard';
import { Book } from './Interfaces/Book';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [books, setBooks] = useState<Book[]>([]);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setMode={setMode} />
      <Container id="container">
        <SearchInput setBooks={setBooks} />
        <GridBooksCard books={books} />
      </Container>
    </ThemeProvider>
  );
}

export default App;

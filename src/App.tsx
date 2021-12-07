import { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Header } from './components/Header/Header';
import { SearchInput } from './components/SearchInput/SearchInput';
import { GridBooksCard } from './components/GridBooksCard/GridBooksCard';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container id="container">
        <SearchInput />
        <GridBooksCard />
      </Container>
    </Fragment>
  );
}

export default App;

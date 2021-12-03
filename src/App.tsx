import { Fragment } from 'react';
import { CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';
import { Header } from './components/Header/Header';
import { SearchInput } from './components/SearchInput/SearchInput';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container id="container">
        <SearchInput />
      </Container>
    </Fragment>
  );
}

export default App;

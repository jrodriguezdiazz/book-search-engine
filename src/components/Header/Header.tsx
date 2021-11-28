import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Links } from '../Links/Links';
import { Title } from '../Title/Title';

export const Header = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Title />
        <Links />
      </Toolbar>
    </Container>
  </AppBar>
);

import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Links } from '../Links/Links';
import { Title } from '../Title/Title';
import { ToggleColorMode } from '../ToggleColorMode/ToggleColorMode';

interface Props {
  setMode: Dispatch<SetStateAction<'light' | 'dark'>>;
}

export const Header: FunctionComponent<Props> = ({ setMode }) => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Title />
        <Links />
        <ToggleColorMode setMode={setMode} />
      </Toolbar>
    </Container>
  </AppBar>
);

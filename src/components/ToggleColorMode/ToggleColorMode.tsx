import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import IconButton from '@mui/material/IconButton';
import useTheme from '@mui/material/styles/useTheme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface Props {
  setMode: Dispatch<SetStateAction<'light' | 'dark'>>;
}

export const ToggleColorMode: FunctionComponent<Props> = ({ setMode }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const toggleColorMode = () => {
    setMode(() => (isDarkMode ? 'light' : 'dark'));
  };
  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
      {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

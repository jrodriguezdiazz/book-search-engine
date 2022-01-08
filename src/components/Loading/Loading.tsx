import { FunctionComponent } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

interface Props {
  titleBook: string | undefined;
}
export const Loading: FunctionComponent<Props> = ({ titleBook }) => (
  <Container sx={{ marginBottom: '20px' }}>
    <Typography align="center" variant="h5" gutterBottom component="div">
      Searching for books with the name: "{titleBook}"
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  </Container>
);

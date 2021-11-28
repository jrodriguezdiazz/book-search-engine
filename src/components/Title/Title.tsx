import { Fragment } from 'react';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export const Title = () => (
  <Fragment>
    <Link href="/" underline="none" color="inherit">
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
      >
        Book Search Engine
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
      >
        Book Search Engine
      </Typography>
    </Link>
  </Fragment>
);

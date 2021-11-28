import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export const Links = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const pages = [
    { url: 'https://www.linkedin.com/in/jrodriguezdiazz/', page: 'About Me' },
    { url: 'https://www.jrodriguezdiazz.me/', page: 'Portfolio' },
    {
      url: 'https://github.com/jrodriguezdiazz/book-search-engine',
      page: 'Repo',
    },
  ];
  return (
    <Fragment>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'row-reverse',
        }}
      >
        {pages.map(({ url, page }) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            <Link
              href={url}
              target="_blank"
              rel="noreferrer"
              underline="none"
              color="inherit"
            >
              {page}
            </Link>
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'flex', md: 'none' },
          flexDirection: 'row-reverse',
        }}
      >
        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map(({ url, page }) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Link
                href={url}
                target="_blank"
                rel="noreferrer"
                underline="none"
                color="inherit"
              >
                <Typography textAlign="center">{page}</Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Fragment>
  );
};

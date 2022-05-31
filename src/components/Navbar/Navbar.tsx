import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';

import BasicAlerts from '../Alert/Alert';

import {
  Search,
  SearchContainer,
  SearchIconWrapper,
  StyledInputBase,
} from './Style';

const Navbar = () => {
  const [state, setState] = React.useState<String>('');
  const [alert, setAlert] = React.useState<boolean>(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSubmitVal = (e: React.FormEvent) => {
    emptyInput();
    e.preventDefault();
  };

  function emptyInput() {
    if (state === '') {
      setAlert(true);
    } else {
      window.open('/search?' + state, '_self');
    }
  }

  function handleClick() {
    emptyInput();
  }
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <VideocamIcon
              sx={{
                display: { xs: 'none', size: 'large', md: 'flex' },
                mr: 1,
                width: 30,
                height: 30,
              }}
            />
            <Typography
              variant="button"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              moviefindr
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  href="/"
                  sx={{ my: 2, display: 'block' }}
                >
                  home
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  href="lastviewed"
                  sx={{ my: 2, display: 'block' }}
                >
                  last viewed
                </Button>
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                href="/lastviewed"
                sx={{ my: 2, display: 'block' }}
              >
                last viewed
              </Button>
            </Box>
            <Box>
              <form onSubmit={handleSubmitVal}>
                <SearchContainer>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      onChange={(e) => setState(e.target.value)}
                    />
                  </Search>
                  <Button
                    variant="outlined"
                    onClick={handleClick}
                    style={{ height: 50 }}
                  >
                    Search
                  </Button>
                </SearchContainer>
              </form>
            </Box>
          </Toolbar>
        </Container>
        {alert ? <BasicAlerts /> : null}
      </AppBar>
    </>
  );
};
export default Navbar;

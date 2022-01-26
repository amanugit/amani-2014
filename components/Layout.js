import { deepPurple, pink, purple } from "@mui/material/colors";
import Cookies from "js-cookie";
import { createTheme } from "@mui/material";
import React, { Fragment } from "react";
import { useContext } from "react";
import { Store } from "../utils/store";
import Footer from "./Footer";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Switch, CssBaseline } from "@mui/material";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider } from "@emotion/react";

const pages = ["Home", "About", "Works", "Contact"];
function Layout({ children }) {
  const goToLink = (e) => {
    const hash = e.target.hash;

    if (hash === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    } else {
      const top = document.querySelectorAll(hash).offsetTop;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: pink[50],
      },
      secondary: {
        main: "#000",
      },
      info: {
        main: purple[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ bgcolor: darkMode ? "#000" : "#fff" }}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Amanuel
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={goToLink} href={`#${page}`}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              MANUEL FEREDE
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  href={`#${page}`}
                  key={page}
                  onClick={goToLink}
                  sx={{
                    my: 2,
                    color: darkMode ? "#fff" : "#000",
                    display: "block",
                    textTransform: "initial",
                    ":hover": { bgcolor: "secondary.main", color: "white" },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Switch
              checked={darkMode}
              onChange={darkModeChangeHandler}
            ></Switch>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = [];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="data:image/png;base64,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"
            alt=""
            style={{
              width: "90px",
              marginRight: "20px",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "warning",
              textDecoration: "none",
            }}>
            Cats&Dogs
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
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
              }}>
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(page => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

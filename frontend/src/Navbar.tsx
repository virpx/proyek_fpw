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
import { useNavigate } from "react-router-dom";
import authHeader from "./services/auth-header";
import { useEffect } from "react";
import "./css/navbar.css";

const pages = ["Home", "Courses", "My Courses"];
const settings = ["Profile", "Account", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  const handlePindahPage = (page) => {
    if (page == "Home") {
      navigate("/");
    } else if (page == "Courses") {
      navigate("/courses");
    } else if (page == "My Courses") {
      navigate("/mycourses");
    }
  };

  const [sudahlogin, setSudahLogin] = React.useState(false);
  const auth = () => {
    var header = authHeader();
    if (header != null) {
      const storedTime = localStorage.getItem("storedTime");
      const expirationTimeInSeconds = 3600;
      if (
        storedTime &&
        (Date.now() - parseInt(storedTime)) / 1000 < expirationTimeInSeconds
      ) {
        console.log("Session OK.");
        setSudahLogin(true);
      } else {
        alert("Session has expired or does not exist. Please Login again.");
        localStorage.clear();
      }
    }
  };

  useEffect(() => {
    auth();
  }, []);

  const handleProfileMenu = (setting) => {
    if (setting == "Logout") {
      localStorage.removeItem("user");
      localStorage.removeItem("storedTime");
      window.location.reload();
    } else if (setting == "Profile") {
      navigate("/profile");
    } else if (setting == "Account") {
      navigate("/account");
    }
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#1A2138" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <div style={{ color: "#F57C00" }}>INNOSPHERE</div>LEARN
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <div style={{ color: "#F57C00" }}>INNOSPHERE</div>LEARN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handlePindahPage(page);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {sudahlogin && (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Profile User" src="" />
                </IconButton>
              </Tooltip>
            )}
            {!sudahlogin && (
              <Button
                variant="outlined"
                size="medium"
                id="btnrl"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </Button>
            )}
            {!sudahlogin && (
              <Button
                variant="outlined"
                size="medium"
                id="btnrl"
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            )}
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
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography
                    textAlign="center"
                    onClick={() => {
                      handleProfileMenu(setting);
                    }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

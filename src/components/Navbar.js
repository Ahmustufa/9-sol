import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { items } from "@/utils/navItems";
import "@fontsource/poppins";
import Link from "next/link";
import { Divider } from "@mui/material";
import Header from "./Header";
import Text from "./Typography/Text";
import { useRouter } from "next/router";
import Image from "next/image";
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [active] = React.useState(1);
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
  const router = useRouter();
  console.log(router.route);
  return (
    <AppBar
      position="sticky"
      // className="bg-white"
      style={{ backgroundColor: "white", zIndex: 2 }}
      elevation={2}
    >
      <Header />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
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
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {items.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu} >
                  <div style={{ paddingRight: 10 }}>{page.icon}</div>
                  <Link
                    className="text-xl font-bold transition duration-150 border-b-2 border-transparent hover:border-magenta"
                    href={page.to}
                    textAlign="center"
                    color={page.to === router.route ? "#aa076b" : "black"}
                  >
                    {page.title}
                  </Link>
                  <Divider orientation="horizontal" sx={{ bgcolor: "black" }} />
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          {/* <Text
            variant="h5"
            noWrap
            component="a"
            // href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
          </Text> */}
          <Box sx={{display: {xl: "none", lg: "none",}}}>
          <Link href="/">
            <Image
              src={require('/public/favicon.png')}
              width={250}
              height={0}
            />
          </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {items.map((page, index) => (
              <>
                <Link
                  key={page}
                  href={page.to}
                  onClick={handleCloseNavMenu}
                  className="text-6xl font-bold transition duration-150 border-b-2 border-transparent hover:border-magenta"
                  style={{
                    color: page.to === router.route ? "#aa076b" : "black",
                    display: "flex",
                    padding: "0px 25px",
                  }}
                >
                  {page.icon}
                  <Text style={{ paddingLeft: "10px" }}>{page.title}</Text>
                </Link>
                <Divider orientation="vertical" flexItem />
              </>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Text textAlign="center">setting</Text>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import styles from "./styles.module.css";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button className={styles.ButtonHeader} href="/">
          About
        </Button>
      </MenuItem>

      <MenuItem>
        <Button className={styles.ButtonHeader} href="/">
          Who is it for
        </Button>
      </MenuItem>

      <MenuItem>
        <Button className={styles.ButtonHeader} href="/">
          SKOOMAVERSE
        </Button>
      </MenuItem>

      <MenuItem>
        <Button className={styles.ButtonHeader} href="/">
          Dating
        </Button>
      </MenuItem>

      <MenuItem>
        <Button className={styles.ButtonHeader} href="/">
          roadmap
        </Button>
      </MenuItem>

      <MenuItem>
      <Button className={styles.ButtonDealer} href="/">
              DEALER
            </Button>

            <Button className={styles.ButtonConnect} href="/">
              Connect
            </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ height: 65, backgroundColor: "#7A1D4A" }} position="static">
        <Toolbar className="d-flex flex-row justify-content-md-around align-items-center">
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* Desktop Menü ekleme */}
            <Button className={styles.ButtonHeader} href="/">
              About
            </Button>

            <Button className={styles.ButtonHeader} href="/">
              Who is it for
            </Button>

            <Button className={styles.ButtonHeader} href="/">
              SKOOMAVERSE
            </Button>

            <Button className={styles.ButtonHeader} href="/">
              Dating
            </Button>

            <Button className={styles.ButtonHeader} href="/">
              Roadmap
            </Button>
          </Box>

        

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button className={styles.ButtonDealer} href="/">
              DEALER
            </Button>

            <Button className={styles.ButtonConnect} href="/">
              Connect
            </Button>
          </Box>

          {/* Mobil Menü */}
          <Box sx={{ display: { xs: "flex", md: "none" }}}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
        <p>Deneme</p>

    </Box>
  );
}

import React, { useEffect, useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Tooltip } from "@mui/material";
import { Avatar } from "@mui/material";
// Dialouge Box
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// Images
import logo_light from "../Images/Logo-light.svg";
import kids_logo from "../Images/kids_logo.svg";
import googlelogo from "../Images/Google_logo.png";
import logo from "../Images/Logo.png";
// Responsive
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
// auth
import { provider, auth } from "../Firebase/firebase";
//
import { Link } from "react-router-dom";

function Header({ USER }) {
  // Dialouge Box state Variables
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Login = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setOpen(false);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const Logout = () => {
    auth.signOut();
    window.location.reload();
  };

  //  user
  const [user, setuser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setuser(user);
    });
  }, [user]);

  //   Responsive
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="header__right">
        <Tooltip title="Menu">
          <MenuIcon
            className="header__menuicon_responsive"
            onClick={handleClickMenu}
          />
        </Tooltip>

        <MenuIcon className="header_menuicon" />
        <Link to="/">
          <img src={logo_light} alt="logo" className="header__logo" />
        </Link>
        <p>TV</p>
        <p>Movies</p>
        <p>Sports</p>
        <p>
          <strong>Disney+</strong>
        </p>
        <img src={kids_logo} alt="kids" className="header__kids" />
      </div>
      <div className="header__left">
        <div className="header__left__Search header__left__elements">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <Button className="header__left__subscribe header__left__elements">
          Subscribe
        </Button>
        {user ? (
          <div className="user_credintials">
            <Avatar src={user.photoURL} />
            <Button onClick={Logout}>Logout</Button>
          </div>
        ) : (
          <Button
            className="header__left__login header__left__elements"
            onClick={handleClickOpen}
          >
            LOGIN
          </Button>
        )}
      </div>

      {/* ----------------- Dialouge Box -------------------- */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h3>Login with Google to continue</h3>
            <br />
            <img src={logo} alt="logo" className="header__logo"></img>
            <br />
            <img src={googlelogo} alt="logo" className="google_logo" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={Login} autoFocus>
            Login
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* ------------------ Menu ----------------- */}
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleCloseMenu}>TV</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Movies</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Sports</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Disney+</MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <img src={kids_logo} alt="kids" className="header__kids_responsive" />
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>Search</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Subscribe</MenuItem>
      </Menu>
    </div>
  );
}

export default Header;

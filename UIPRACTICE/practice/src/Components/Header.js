import { Box, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link, NavLink } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles({
  main___Div: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
    //position: "fixed",
    width: "100%",
    "@media(max-width : 900px)": {
      display: "none",
    },
  },
  Nav___List__Wrap: {},
  header: {},
  Nav___List: {
    margin: "0",
    padding: "0px",
    listStyle: "none",
    display: "flex",
  },
  NavLink___List2: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    color: "#00adc9",
  },

  NavLink___List: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    color: "#00adc9",
    textDecoration: "none",
    marginLeft: "35px",
  },

  side___navbar: {
    display: "flex",
    alignItems: "center",
  },

  side___navbar2: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    width: "50%",
    "@media(max-width : 600px)": {
      width: "40%",
    },
  },
  mob__nav: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  input: {
    backgroundColor: "white",
    padding: "0rem  1rem !important",
    borderRadius: "1rem",
  },
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (value.length <= 15) {
      setSearchText(value);
    }
  };

  return (
    <Box>
      <Box className={classes.main___Div}>
        <Box>
          <Link to="/">
            <Typography sx={{width: "50%"}}
              component={"img"}
              src="https://techwarezen.com/wp-content/uploads/2022/03/finale34.png"
            />
          </Link>
        </Box>
        <Box className={classes.Nav___List__Wrap}>
          <Box className={classes.Nav___List} component={"ul"}>
            <Box component={"li"}>
              <NavLink to="/About" className={classes.NavLink___List2}>
                About
              </NavLink>
            </Box>
          </Box>
        </Box>
        <Box className={classes.Nav___List__Wrap}>
          <Box className={classes.Nav___List} component={"ul"}>
            <Box component={"li"}>
              <NavLink to="/Service" className={classes.NavLink___List2}>
                Service
              </NavLink>
            </Box>
          </Box>
        </Box>
        <Box className={classes.Nav___List__Wrap}>
          <Box className={classes.search} component={"ul"}>
            <Box component={"li"}>
              <TextField
                className={classes.input}
                id="filled-search"
                type="search"
                variant="standard"
                value={searchText}
                onChange={handleSearchChange}
                placeholder="Search"
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box className={classes.Nav___List__Wrap}>
          <Box className={classes.Nav___List} component={"ul"}>
            <Box component={"li"}>
              <NavLink to="/" className={classes.NavLink___List2}>
                Career
              </NavLink>
            </Box>
          </Box>
        </Box>
        <Box className={classes.Nav___List__Wrap}>
          <Box className={classes.Nav___List} component={"ul"}>
            <Box component={"li"}>
              <NavLink to="/Login" className={classes.NavLink___List2}>
                Login
              </NavLink>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "none",
          "@media(max-width : 900px)": { display: "block" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1.5rem 2rem 1rem 2rem",
            alignItems: "center",
            "@media(max-width : 600px)": { padding: "1rem 0rem 0rem 0rem" },

          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
              "@media(max-width : 900px)": {
                width: "100%",
                "@media(max-width : 600px)": {
                  width: "100%",
                },
              },
            }}
          >
            <Box>
              <Link to="/">
                {" "}
                <Typography
                  component={"img"}
                  src="https://techwarezen.com/wp-content/uploads/2022/03/finale34.png"
                  width={"100px"}
                />
              </Link>
            </Box>
            <Box onClick={handleClickOpen}>
              <MenuIcon
                sx={{ color: "#00adc9 !important", cursor: "pointer", fontSize: "25px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          backgroundImage: "linear-gradient(45deg, #716449, #ccb483, #716449)",
          "& .MuiPaper-root": {
            backgroundColor: "#1976d2",
          },
          // width: "20rem"
        }}
      >
        <AppBar
          sx={{
            position: "relative",
            backgroundColor: "#1976d2",
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{
              backgroundColor: "#1976d2",
              boxShadow: "none",
              justifyContent: "right",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box sx={{ textAlign: "center", display: "grid", gap: "20px" }}>
          <Box className={classes.mob__nav} component={"ul"}>
            <TextField
              className={classes.input}
              id="filled-search"
              type="search"
              variant="standard"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchChange}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Box>
          <NavLink
            className={classes.mob__nav}
            onClick={handleClose}
            to="/Service"
          >
            Service
          </NavLink>
          <NavLink
            className={classes.mob__nav}
            onClick={handleClose}
            to="/About"
          >
            About
          </NavLink>
          <NavLink className={classes.mob__nav} onClick={handleClose} to="/">
            Career
          </NavLink>
          <NavLink
            className={classes.mob__nav}
            onClick={handleClose}
            to="/Login"
          >
            Login
          </NavLink>
        </Box>
      </Dialog>
    </Box>
  );
};
export default Header;

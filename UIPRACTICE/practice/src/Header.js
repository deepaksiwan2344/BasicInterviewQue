
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
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
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0rem",
    "@media(max-width : 900px)": {
      display: "none",
    },
  },
  Nav___List__Wrap: {},
  header:{
  

  },
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
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <Box>
      <Container>
        <Box className={classes.main___Div}>
          <Box>
            <Link to="/">
              <Typography
                component={"img"}
                src="https://www.codeaegis.com/public/user/images/logo.png"
              />
            </Link>
          </Box>
          <Box className={classes.Nav___List__Wrap}>
            <Box className={classes.Nav___List} component={"ul"}>
              <Box component={"li"}>
                <NavLink to="/" className={classes.NavLink___List2}>
                  About
                </NavLink>
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
                <NavLink to="/" className={classes.NavLink___List2}>
                  Home
                </NavLink>
              </Box>
               
            </Box>
          </Box>
          
        </Box>
    
       
      </Container>
    </Box>
  );
};
export default Header;
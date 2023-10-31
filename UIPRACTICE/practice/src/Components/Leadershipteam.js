import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Container, Typography, Divider } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Getstarted from "./Getstarted";
import zIndex from "@mui/material/styles/zIndex";

const useStyle = makeStyles({
  mainwrap: {
    height: "10rem",
    backgroundPosition: "center !important",
    padding: "5rem 5rem",
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    borderBottom: "1px solid #fff",
    backgroundBlendMode: "multiply",
    background:
      "linear-gradient(to top, #e3d4d4, #fff), url('https://techwarezen.com/wp-content/uploads/2018/08/bg-team.jpg?id=831)')",
    "@media(max-width: 900px)": {
      padding: "2rem 2rem",
      "@media(max-width: 600px)": {
        padding: "2rem 2rem",
      },
    },
  },
  mainbox: {
    width: "60%",
    textAlign: "center",
    margin: "auto",
    "@media(max-width: 900px)": {
      width: "100%",
      justifyContent: "center",
      textAlign: "left",
      "@media(max-width: 600px)": {
        width: "100%",
        justifyContent: "center",
        textAlign: "left",
      },
    },
  },
  typo: {
    textAlign: "center",
    color: "#0e2b5c",
    fontSize: "3rem !important",
    fontWeight: "600 !important",
    "@media(max-width: 900px)": {
      fontSize: "2.2rem !important",
      fontWeight: "700 !important",
      "@media(max-width: 600px)": {
        fontSize: "2.2rem !important",
        fontWeight: "700 !important",
      },
    },
  },
  overview: {
    display: "flex",
    padding: "2rem 2rem",
    listStyle: "none !important",
    width: "70% !important",
    cursor: "pointer",
    textAlign: "center",
    color: "#898484",
    margin: "auto",
    justifyContent: "space-between",
    fontWeight: "600",
   // position: "absolute",
    "@media(max-width: 600px)": {
      display: "none",
    },
  },
  list: {
    "&:hover": {
      borderBottom: "1px solid red",
     // position: "absolute",
    },
  },
});

const Leadershipteam = () => {
  const classes = useStyle();
  return (
    <>
      <Header />

      <Box className={classes.mainwrap}>
        <Box className={classes.mainbox}>
          <Typography className={classes.typo}>Leadership Team</Typography>
          <Typography
            sx={{
              color: "#627792",
              fontSize: "1rem",
              lineHeight: "1.625em",
              marginTop: "1rem",
            }}
          >
            Techwarezen Solution's leadership team has a long history of success
            in technology, business management, and franchising.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.overview}>
        <li className={classes.list}>Company</li>
        <li className={classes.list}>About</li>
        <li className={classes.list}>Leadership</li>
        <li className={classes.list}>Careers</li>
        <li className={classes.list}>Mission</li>
        <li className={classes.list}>FAQ</li>
        <li className={classes.list}>Locations</li>
        <li className={classes.list}>windowhy Choose Us</li>
      </Box>
      
        <Divider />
        <Getstarted />
        <Footer />
      
    </>
  );
};

export default Leadershipteam;

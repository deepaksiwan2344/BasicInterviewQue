import React, {useEffect} from "react";
import {  Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import Footer from "./Footer";
import Itservice from "./Itservice";
import Manage from "./Manage";
import OurBlog  from "./OurBlog";
import Testimonial from "./Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyle = makeStyles({
  servicewrap: {
    // marginTop: "2rem",
    textAlign: "center",
    backgroundColor: "#f1eaea",
  },
  cartwrap: {
    boxShadow: "inset 1rem 0.5rem 1rem  0.5rem #ede3e3",
    borderRadius: "5px",
    padding: "3rem 4rem !important",
  },
  imgwrap: {
    margin: "40px 0 0 0",
    position: "relative",
    "z-index": "2",
    height: "80px",
  },
  img: {
    height: "5rem",
    width: "6rem",
    fontSize: "10px",
  },
  btnbox: {
    marginTop: "2rem",
  },
  typo: {
    color: "#1dc2ef",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e72626 !important",
      color: "white",
      animation: "fadeIn",
    },
  },
  serverheader: {
    // marginTop: "2rem",
  },
  typoheader: {
    color: "#0e2b5c !important",
    fontSize: "1.87rem",
    lineHeight: "1.2rem",
    fontWeight: "500",
  },
  // ***************

  our_company_wrap: {
    backgroundColor: "#231834",
    paddingBottom: "200px",
    padding: "7rem 6rem  8rem !important",
    // marginTop: "2rem",
    "@media(max-width: 600px)": {
      padding: "1px 1rem  1px !important",
    },
  },
  typo1: {
    textAlign: "left",
    fontWeigth: "500",
    color: "#ffffff",
    fontSize: "1.875rem",
    lineHeight: "1.2em",
    marginTop: "1rem",
    "@media(max-width: 600px)":{
       
    }
  },
  typo3: {
    textAlign: "center",
    marginTop: "5rem",
  },
  typo2: {
    color: "white",
    "@media(max-width: 600px)":{  
    }

  },
  mobtypo: {
    fontSize: "8px",
    color: " #1dc2ef",
    textAlign: "left",
    letterSpacing: "4px",
    textTransform: "uppercase",
    "@media(max-width: 600px)":{
       marginTop: "5rem !important"
        

    }

  },
 
});

const Service = () => {
  const classes = useStyle();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Itservice/>
      <Box className={classes.our_company_wrap}>
        <Grid container spacing={3.5}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography className={classes.mobtypo}>our company</Typography>
            <Typography variant="h4" className={classes.typo1}>
              Techwarezen is your trusted source in Game Development Company in
              Noida, India
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography className={classes.typo2}>
              Techwarezen is a privately owned game development company in
              Noida, India and IT Services business formed in 2017. Today we’re
              proud to boast a strong team of software and game development who
              thrive on rolling up their sleeves and solving your IT problems
              and meeting your business needs. We are on a mission to exceed
              your expectations and form a long-term, mutually beneficial
              relationship with you.
            </Typography>
          </Grid>
        </Grid>
        <Box className={classes.typo3}>
          <Typography sx={{ color: "#1dc2ef" }}>
            Stop wasting time and money on technology.
            <strong>
              Explore our game company development in Noida, India
            </strong>
          </Typography>
        </Box>
      </Box>
      
        <Box className={classes.servicewrap}>
          <Box className={classes.serverheader}>
            <Typography
              sx={{
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontSize: "10px",
                color: "#627792",
                textAlign: "center",
              }}
            >
              our services
            </Typography>
            <Typography variant="h4" className={classes.typoheader}>
              Stay Up, Stay Running, Stay Protected
            </Typography>
          </Box>
          <Grid container spacing={2} mt={6}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box className={classes.cartwrap}>
                <Typography variant="h6">Developemnt</Typography>
                <Typography sx={{ color: "#627792", lineHeight: "1.625rem" }}>
                  We write codes that work with your business
                </Typography>
                <Box className={classes.imgwrap}>
                  <Typography
                    className={classes.img}
                    component={"img"}
                    src="https://techwarezen.com/wp-content/uploads/2021/10/pngkey.com-software-development-png-382089.png"
                  />
                </Box>
                <Box className={classes.btnbox}>
                  <Typography className={classes.typo}>
                    Check More
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box className={classes.cartwrap}>
                <Typography variant="h6">Digital Marketing</Typography>
                <Typography sx={{ color: "#627792", lineHeight: "1.625rem", fontSize: "0.9rem" }}>
                  Boost Your Social Media and Engage your audience through
                  visuals.
                </Typography>
                <Box className={classes.imgwrap}>
                  <Typography
                    className={classes.img}
                    component={"img"}
                    src="https://techwarezen.com/wp-content/uploads/2021/10/pngkey.com-internet-marketing-png-1091599.png"
                  />
                </Box>
                <Box className={classes.btnbox}>
                  <Typography className={classes.typo}>
                    Check Your Brand Identity
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box className={classes.cartwrap}>
                <Typography variant="h6">Brand Identity</Typography>
                <Typography sx={{ color: "#627792", lineHeight: "1.625rem", fontSize:"0.9rem" }}>
                  Is Your Unified Visual Design Message and Enhance Your Online
                  Visibility.
                </Typography>
                <Box className={classes.imgwrap}>
                  <Typography
                    className={classes.img}
                    component={"img"}
                    src="	https://techwarezen.com/wp-content/uploads/2021/10/pngkey.com-transparent-design-png-4168724.png"
                  />
                </Box>
                <Box className={classes.btnbox}>
                  <Typography className={classes.typo}>
                    Start up and running
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      
      <Manage />
      <OurBlog />
      <Testimonial />

      <Footer />
    </>
  );
};

export default Service;

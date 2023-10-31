import React, { useEffect } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyle = makeStyles({
  mainwrap: {
    marginTop: "",
    padding: "2rem 2rem 1rem !important",
    boxShadow: "inset 2rem 3rem 5rem  3rem  #e9e1e1",
  },
  leftwrap: {
    marginTop: "7rem",
    padding: "2rem 5rem",
    "@media(max-width: 600px)": {
      padding: "0rem 0rem 0rem !important",
      textAlign: "center",
    },
  },
  rightwrap: {},
  img: {
    width: "100%",
    height: "100%",
    
  
    
  },
  btnbox: {
    display: "flex",
    gap: "2rem",
    marginTop: "2rem",
    "@media(max-width: 600px)": {
      display: "inherit",
    },
  },
  header: {
    color: "back",
    marginTop: "1.5rem !important",
    fontSize: "2.7rem !important",
    lineHeight: "2.7rem !important",
    fontFamily: "fantasy",
    "@media(max-width: 600px)": {
      fontSize: "1.8rem !important",
      marginTop: "1rem !important",
    },
  },
  btn: {
    background: "linear-gradient(135deg, #cb1212, #e92424, #efef11)",
    color: "#fff !important",
    height: "3.2rem",
    width: "12rem",
  },
});

const Itservice = () => {
  const classes = useStyle();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Box className={classes.mainwrap}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box className={classes.leftwrap}>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: "rgb(47, 95, 209)",
                  fontFamily: "-moz-initial",
                }}
              >
                if you think, we can build
              </Typography>
              <Typography className={classes.header}>
                Awasome It Services For Your Business
              </Typography>
              <Typography sx={{ marginTop: "2rem", color: "#a59494" }}>
                we have the exportise and resurces required to design develope
                and manage the highly available and highly secure tehcnology
                plateform that need.
              </Typography>
              <Box className={classes.btnbox}>
                <Box>
                  <Button className={classes.btn}>Start a Project</Button>
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "rgb(47, 95, 209)", fontSize: "0.9rem" }}
                  >
                    call us 7084930106
                  </Typography>
                  <Typography sx={{ color: "#5a4949" }}>
                    for any questions
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} mt={10}>
            <Box
              className={classes.rightwrap}
              data-aos="zoom-in"
            >
              <Typography
                className={classes.img}
                component={"img"}
                src="https://techwarezen.com/wp-content/uploads/revslider/home-one-11/demo13-img11.png"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Itservice;

import React, { useEffect } from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
  mainwrap: {
    display: "flex",
    // background: "#f3ecec",
    justifyContent: "space-between",
    padding: "2rem 4rem !important",
    //  height: "20rem",
    marginTop: "3rem",
    "@media(max-width : 1200px)": {
      padding: "1rem 2rem",
      "@media(max-width : 900px)": {
        padding: "1rem 2rem",
        "@media(max-width : 600px)": {
          display: "inherit",
          padding: "10px 10px !important",
          justifyContent: "space-between",
        },
      },
    },
  },
  service: {
    textAlign: "left",
   
  },
  servicecontent: {
    cursor: " pointer",
    marginTop: "12px !important",
     color: "#8f8686",
    "&:hover": {
      color: "red !important",
      borderBottom: "0.5px solid red"
    },
  },

  servicecontent1: {
    marginTop: "12px !important",
     color: "#8f8686",

  },




  footer1: {
    textAlign: "left",
    fontWeight: "-moz-initial",
  },
  footer3: {
    display: "flex",
    gap: "7px",
    "@media(max-width: 900px)": {
      display: "inherit",
      "@media(max-width: 600px)": {
        display: "flex",
        gap: "1rem",
        marginTop: "3rem !important",
      },
    },
  },
  footer4: {
    display: "flex",
    gap: "1rem",
    "@media(max-width: 900px)": {
      display: "inherit",
      "@media(max-width: 600px)": {
        display: "flex",
        gap: "1rem",
        marginTop: "3rem",
      },
    },
  },
  icon: {
    display: "flex",
    gap: "1rem !important",
    marginTop: "4rem",
  },
  img: {
    width: "15%"
  }
});

const Footer = () => {
  const classes = useStyle();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/LudoGame");
  };


  const redirectApp = ()=>{
    navigate("/Appdevelopment")
  }

  const appdirect = () =>{
    navigate("/Andrioddevelopement")
  }

  const handleFantasycrciket = () =>{
    navigate("/Fantasycricketapp")
  }

  const handle_Leadership_Team = ()=>{
    navigate("/Leadership_Team")
  }

  const handle_It_BLog = ()=>{
    navigate("/IT_Blog")
  }

  const handle_Ourportfolio = ()=>{
    navigate("/Our_Portfolio")
  }

  useEffect(() => {
    window.scrollTo(0, 4);
  }, []);

  return (
    <div>
      
      <Box className={classes.mainwrap}>
      <Divider />
        <Grid container spacing={2}>
          <Grid item lg={4} sm={12} md={12} sx={12}>
            <Box className={classes.footer1}>
              <Typography
                className={classes.img}
                component={"img"}
                src= "https://techwarezen.com/wp-content/uploads/2022/03/cropped-1fevicon-150x150.png"
                Image/>
              <Typography className={classes.servicecontent1}>D-53, Sector 2 Noida – 201301</Typography>
              <Typography className={classes.servicecontent1}>HR Enquiry :+917206839883</Typography>
              <Typography className={classes.servicecontent1}>HR Email: hr@techwarezen.com</Typography>
              <Typography className={classes.servicecontent1}>India (sales): +919899973092</Typography>
              <Typography className={classes.servicecontent1}>Sales Email: sales@techwarezen.com</Typography>
              <Box className={classes.icon}>
                <Box>
                  {" "}
                  <Typography>
                    <FacebookIcon sx={{ color: "#938f8f" }} />
                  </Typography>
                </Box>
                <Box>
                  {" "}
                  <Typography>
                    {" "}
                    <InstagramIcon sx={{ color: "#938f8f" }} />
                  </Typography>
                </Box>
                <Box>
                  {" "}
                  <Typography>
                    <LinkedInIcon sx={{ color: "#938f8f" }} />
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4} sm={12} md={12} sx={12}>
            <Box className={classes.footer3}>
              <Box className={classes.service}>
                <Typography >
                  Services
                </Typography>
                <Typography onClick={redirectApp} className={classes.servicecontent}>
                  Mobile App Development<br></br> Company
                </Typography>
                <Typography onClick={appdirect} className={classes.servicecontent}>
                  Android App Development
                </Typography>
                <Typography className={classes.servicecontent}>
                  IOS App Development
                </Typography>
                <Typography className={classes.servicecontent}>
                  IT Consultancy
                </Typography>
                <Typography className={classes.servicecontent}>
                  Cloud Computing
                </Typography>
                <Typography className={classes.servicecontent}>
                  Cyber Security
                </Typography>
                <Typography className={classes.servicecontent}>
                  Custom Software
                </Typography>
              </Box>
              <Box className={classes.service}>
                <Typography >
                  Gaming
                </Typography>
                <Typography onClick={handleFantasycrciket} className={classes.servicecontent}>
                  Fantasy Cricket App
                </Typography>
                <Typography
                  onClick={handleRedirect}
                  className={classes.servicecontent}
                >
                  Ludo Game Development
                </Typography>
                <Typography className={classes.servicecontent}>
                  Rummy App Development
                </Typography>
                <Typography className={classes.servicecontent}>
                  Cricket Live Line Application
                </Typography>
                <Typography className={classes.servicecontent}>
                  Teen Patti Game Development
                </Typography>
                <Typography className={classes.servicecontent}>
                  Real Money Game Development
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item lg={4} sm={12} md={12} sx={12}>
            <Box className={classes.footer4}>
              <Box className={classes.service}>
                <Typography >
                  Company
                </Typography>
                <Typography className={classes.servicecontent}>
                  About
                </Typography>
                <Typography  onClick={handle_Leadership_Team} className={classes.servicecontent}>
                  Leadership Team
                </Typography>
                <Typography  onClick={handle_It_BLog} className={classes.servicecontent}>
                  IT Blog
                </Typography>
                <Typography onClick={handle_Ourportfolio} className={classes.servicecontent}>
                  Our Portfolio
                </Typography>
                <Typography className={classes.servicecontent}>
                  Locations
                </Typography>
              </Box>
              <Box className={classes.service}>
                <Typography >
                  Suport
                </Typography>
                <Typography className={classes.servicecontent}>
                  Forum Support
                </Typography>
                <Typography className={classes.servicecontent}>
                  Help & FAQ
                </Typography>
                <Typography className={classes.servicecontent}>
                  Contact Us
                </Typography>
                <Typography className={classes.servicecontent}>
                  Pricing and plans
                </Typography>
                <Typography className={classes.servicecontent}>
                  Cookies Policy
                </Typography>
                <Typography className={classes.servicecontent}>
                  Privacy Policy
                </Typography>
                <Typography className={classes.servicecontent}>
                  Terms & Condition
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ backgroundColor: "#e8dddd !important", marginTop: "4rem" }} />
      <Typography
        sx={{ textAlign: "center", color: "black", marginTop: "6rem" }}
      >
        Copyright © Techwarezen 2022 | All Right Reserved
      </Typography>
    </div>
  );
};

export default Footer;

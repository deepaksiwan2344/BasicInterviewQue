import React, {useEffect} from "react";
import { Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyle = makeStyles({
  mainwrap: {
    backgroundColor: "#181123",
    color: "white",
    padding: "2rem 5rem 3rem !important",
    height: "50rem",
    // position: "absolute",
    "@media(max-width: 600px)": {
      padding: "1rem 1rem !important",
      height: "inherit",
    },
  },
  serve: {
    fontSize: "10px !important",
    color: "#1dc2ef",
    textAlign: "left",
  },

  typo2: {
    fontFamily: "fantasy",
    fontWeight: "500px",
    color: "white",
    fontSize: "1.875rem !important",
    lineHeight: "1.2em",
  },
  grid1: {
    marginTop: "2rem",
  },
  grid2: {
    marginTop: "5rem",
    width: "100%",
    heigth: "2rem",
    "@media(max-width: 600px)": {

    },
  },
  cart: {
    display: "flex",
    gap: "1.5rem",
    "@media(max-width:600px)": {},
  },
  cartwrap: {
    border: "0.5px solid #9b9aad",
    padding: "2rem 2rem",
    height: "13rem",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#363539 !important",
      transition: " transform 1s ease",
      transform: "translateY(-6px)",
      border: "none",
      borderRadius: "6px !important"
      
    },
    textAlign: "center",
    "@media(max-width:600px)":{
      height: "13rem !important"

    }
  },
  ecom: {
    marginTop: "1rem !important",
    fontSize: "3rem",
    "@media(max-width:600px)": {
      marginTop: "0rem !important",
    },
  },
  ecom1: {
    marginTop: "1rem !important",
    color: "#9b9aad",
    "@media(max-width:600px)": {
      marginTop: "0rem !important",
    },
  },
  cart1wrap: {
    display: "flex",
    position: "relative",
    marginTop: "-15rem",
    padding: "4rem 6rem !important",
    "@media(max-width: 600px)": {
      padding: "0rem !important",
      marginTop: "-10rem",
      gap: "1",
    },
  },
  cart1: {
    height: "15rem",
    cursor: "pointer",
    background: "#231834",
    borderRadius: "4px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    "&:hover": {
      color: "white",
      transition: " transform 1s ease",
      transform: "translateY(-10px)",
    },
    "@media(max-width: 600px)": {

    },
  },
  img:{
    width: "100%"
  },
  img1: {
    width: "60% !important",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      transition: " transform 1s ease",
      transform: "translateY(-10px)",
      
    },
   
  },
  typo4: {
    textAlign: "center",
    fontSize: "15px",
    "@media(max-width: 600px)": {
      marginTop: "3rem",
    },
  },
});

const Manage = () => {
  const classes = useStyle();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Box className={classes.mainwrap}>
        <Box className={classes.grid1}>
          <Grid container spacing={7}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box className={classes.typo1}>
                <Typography className={classes.serve}>
                  INDUSTRIES WE SERVE
                </Typography>
                <Typography className={classes.typo2}>
                  Managed IT services customized for your industry
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box className={classes.typo3}>
                <Typography sx={{ color: "#9b9aad" }}>
                  Our vertical solutions expertise allows your business to
                  streamline workflow, and increase productivity. No matter the
                  business, Techwarezen has you covered with industry compliant
                  solutions, customized to your company’s specific needs.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.grid2}>
          <Grid container spacing={3}>
            <Grid item lg={4.7} md={6} sm={12} sx={12}>
              <Box className={classes.cart}>
                <Box className={classes.cartwrap}>
                  <Typography
                    className={classes.img1}
                    component={"img"}
                    src="https://techwarezen.com/wp-content/uploads/2018/10/chart-2336_49af9344-4b52-4e05-b16f-81a0baa82a4b.svg"
                  />
                  <Typography className={classes.ecom}>ECommerce</Typography>
                  <Typography className={classes.ecom1}>
                    let us show you how our experience
                  </Typography>
                </Box>
                <Box className={classes.cartwrap}>
                  <Typography
                    className={classes.img1}
                    component={"img"}
                    src="https://techwarezen.com/wp-content/uploads/2018/10/catalogue-3486_5154eaae-1092-4b08-83ca-a8a18aa145a2.svg"
                  />
                  <Typography className={classes.ecom}>
                    Capital Markets
                  </Typography>
                  <Typography className={classes.ecom1}>
                    let us show you how our experience
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4.7} md={6} sm={12} sx={12}>
              <Box className={classes.cart}>
                <Box className={classes.cartwrap}>
                  <Typography
                    className={classes.img1}
                    component={"img"}
                    src="https://techwarezen.com/wp-content/uploads/2018/10/data-app-1773_fbc7ba70-c0d5-4cc7-a53f-afec52c9f809.svg"
                  />
                  <Typography className={classes.ecom}>Gaming</Typography>
                  <Typography className={classes.ecom1}>
                    let us show you how our experience
                  </Typography>
                </Box>
                <Box className={classes.cartwrap}>
                  <Typography
                    className={classes.img1}
                    component={"img"}
                    src="https://techwarezen.com/wp-content/uploads/2018/10/health-6332_3e14393c-72bc-46a4-b910-ad00db942549.svg"
                  />
                  <Typography className={classes.ecom}>Healthcare</Typography>
                  <Typography className={classes.ecom1}>
                    let us show you how our experience
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2.6} md={4} sm={6} sx={12}>
              <Box className={classes.cartwrap}>
                <Typography
                  className={classes.img1}
                  component={"img"}
                  src="https://techwarezen.com/wp-content/uploads/2018/10/catalogue-3486_5154eaae-1092-4b08-83ca-a8a18aa145a2.svg"
                />
                <Typography className={classes.ecom}>Education</Typography>
                <Typography className={classes.ecom1}>
                  let us show you how our experience
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ textAlign: "center", marginTop: "6rem" }}>
          <Typography
            sx={{ color: "#1dc2ef", fontSize: "10px", marginTop: "1rem" }}
          >
            CASE STUDIES
          </Typography>
          <Typography variant="h4">We work with global brands</Typography>
        </Box>
      </Box>

      <Box className={classes.cart1wrap}>
        <Grid container spacing={10}>
          <Grid item lg={4} md={6} sm={12} xs={12} >
            <Box className={classes.cart1}>
              <Typography
                className={classes.img}
                component={"img"}
                src="https://techwarezen.com/wp-content/uploads/2023/06/Screenshot-2023-06-03-at-11942-AM-800x450.png"
              />
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className={classes.cart1}>
              <Typography
                className={classes.img}
                component={"img"}
                src="https://techwarezen.com/wp-content/uploads/2023/06/Screenshot-2023-06-03-at-10832-AM-800x450.png"
              />
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12} >
            <Box className={classes.cart1}>
              <Typography
                className={classes.img}
                component={"img"}
                src="https://techwarezen.com/wp-content/uploads/2023/06/Techwarezen-Google-Ads-Display-2.png"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.typo4}>
        <Typography sx={{ color: "#a19b9b" }}>
          Find out how companies succeed with us. Read our case studies
        </Typography>
      </Box>
    </>
  );
};

export default Manage;

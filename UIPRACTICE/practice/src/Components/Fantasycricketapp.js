import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles({
  mainwrapfatasy: {
    height: "36rem  !important",
    backgroundPosition: "center !important",
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    textAlign: "center",
    backgroundBlendMode: "multiply",
    background:
      "#276af6 url('https://techwarezen.com/wp-content/uploads/2023/06/3468697.png?id=3288')",
  },
  applistyle: {
    marginTop: "1rem",
    color: "#fff",
    fontWeight: "800",
    textAlign: "center",
    fontSize: "5rem !important",
    "@media(max-width: 600px)": {
      fontSize: "1.5rem !important",
      justifyContent: "center !important",
    },
  },
  overview: {
    display: "flex",
    marginTop: "2rem",
    listStyle: "none !important",
    width: "50% !important",
    cursor: "pointer",
    textAlign: "center",
    color: "#898484",
    margin: "auto",
    justifyContent: "space-between",
    fontWeight: "600",
    "@media(max-width: 600px)": {
      display: "none",
    },
  },
  overviewwarp: {
    width: "67%",
    marginTop: "4rem",
    textAlign: "center",
    margin: "auto",
  },
  item: {
    //  border: "1px solid #f3eaea",
    backgroundColor: "#fff",
    boxShadow: "5px 5px  5px 1px #eeeef5",
    borderRadius: "5px",
    textAlign: "center",
    padding: "2rem 3rem",
  },
  mainadvantage: {
    marginTop: "4rem",
    backgroundColor: "#231834 !important",
    padding: "3rem 3rem",
    "@media(max-width: 600px)": {
      padding: "1rem 1rem",
    },
  },
  adheader: {
    textAlign: "center",
    color: "#fff",
    "@media(max-width: 600px)": {
      fontSize: "1.3rem !important",
    },
  },
  adheader1: {
    fontSize: "1.1rem",
    color: "#627792",
    textAlign: "left",
  },
  adheader2: {
    padding: "2rem 2rem",
    fontSize: "1.1rem",
    color: "#627792",
    textAlign: "center",
    lineHeight: "1.625em",
    "@media(max-width: 600px)":{
        padding: "10px 10px",
        fontSize: "15px"
    }
  },
  img6: {
    width: "55%",
    textAlign: "center !important",
    "@media(max-width: 600px)":{
      width: "80%"
    }
  },
});

const Fantasycricketapp = () => {
  const classes = useStyles();

  const item = [
    {
      typo: "Fantasy Football App Developement",
      typo1:
        "With our years of app development, we ensure the deployment of the most innovative and appealing fantasy football app that delivers a wide range of features to make the player’s experience more memorable.",
    },
    {
      typo: "Fantasy Football App Developement",
      typo1:
        "With our years of app development, we ensure the deployment of the most innovative and appealing fantasy football app that delivers a wide range of features to make the player’s experience more memorable.",
    },
    {
      typo: "Fantasy Football App Developement",
      typo1:
        "With our years of app development, we ensure the deployment of the most innovative and appealing fantasy football app that delivers a wide range of features to make the player’s experience more memorable.",
    },
    {
      typo: "Fantasy Football App Developement",
      typo1:
        "With our years of app development, we ensure the deployment of the most innovative and appealing fantasy football app that delivers a wide range of features to make the player’s experience more memorable.",
    },
  ];

  console.log("item", item);

  return (
    <>
      <Header />
      <Box className={classes.mainwrapfatasy}>
        <Box sx={{ padding: "4rem 4rem" }}>
          <Typography variant="h4" sx={{ color: "#fff", fontWeight: "700" }}>
            cricket
          </Typography>
          <Typography className={classes.applistyle}>
            Factasy Application
          </Typography>
        </Box>
      </Box>
      <Container>
        <Box className={classes.overview}>
          <li>Overview</li>
          <li>Service</li>
          <li>Advantages</li>
          <li>Pricing</li>
          <li>Contact Us</li>
        </Box>
      </Container>
      <Divider sx={{ marginTop: "2rem" }} />
      <Container>
        <Box className={classes.overviewwarp}>
          <Typography
            sx={{ fontSize: "0.7rem", color: "#627792", letterSpacing: "4px" }}
          >
            OVERVIEW
          </Typography>

          <Typography
            variant="h5"
            sx={{
              marginTop: "1rem",
              fontWeight: "500",
              color: "#0e2b5c",
              fontSize: "1.875rem",
              lineHeight: "1.2em",
            }}
          >
            Fantasy Gaming & Sports platform Developement
          </Typography>
          <Typography
            sx={{
              marginTop: "1rem",
              color: "#627792",
              textAlign: "left",
              fontSize: "1rem",
            }}
          >
            Fantasy games in Android & iOS allow users to create their own dream
            team for a match and win money based on the performance of each
            player. With our experience in building and deploying highly
            scalable fantasy games for the Indian market, we can build platforms
            to engage your customers.
          </Typography>
          <Box
            sx={{
              margin: "2rem",
              color: "#627792",
              fontSize: "18px",
              textAlign: "left",
            }}
          >
            <li>
              Sports Fantasy Game : Create fantasy games that allow users to
              create teams and earn money
            </li>
            <li>
              nstant Money Redeeming : Allow users to transfer the winnings to
              their bank account instantly
            </li>
            <li>
              Sports Fantasy Game : Create fantasy games that allow users to
              create teams and earn money
            </li>
            <li>
              Sports Fantasy Game : Create fantasy games that allow users to
              create teams and earn money
            </li>
          </Box>
        </Box>
        <Grid container spacing={4} mt={4}>
          {item?.length > 0 &&
            item?.map((data) => {
              return (
                <Grid item lg={6} md={6} sm={6} sx={12}>
                  <Box className={classes.item}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "700",
                        color: "#0e2b5c",
                        fontSize: "1.875rem",
                        lineHeight: "1.2em",
                      }}
                    >
                      {data?.typo}
                    </Typography>
                    <Typography sx={{ marginTop: "1rem", color: "#9a9ac1" }}>
                      {data?.typo1}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
        {/* *************************** */}
      </Container>
      <Box className={classes.mainadvantage}>
        <Typography
          sx={{ textAlign: "center", fontSize: "10px", color: "#1dc2ef" }}
        >
          Advantages
        </Typography>
        <Typography variant="h4" className={classes.adheader}>
          Advantages of Fantasy Sports App Development
        </Typography>
        <Grid container spacing={4} mt={7}>
          <Grid item lg={6} sm={12} md={12} xl={12}>
            <Typography className={classes.adheader1}>
              The following advantages are provided by the fantasy sports
              applications we design at Techwarezen Pvt Ltd.
            </Typography>
            <Box className={classes.adheader2}>
              <li>Create lasting, fruitful connections with your users.</li>
              <li>Create lasting, fruitful connections with your users.</li>
              <li>Create lasting, fruitful connections with your users.</li>
              <li>Create lasting, fruitful connections with your users.</li>
              <li>Create lasting, fruitful connections with your users.</li>
              <li>Create lasting, fruitful connections with your users.</li>
              <li>Create lasting, fruitful connections with your users.</li>
              <li>Create lasting, fruitful connections with your users.</li>
            </Box>
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
            md={12}
            xl={12}
            sx={{ textAlign: "center !important" }}
          >
            <Typography
              className={classes.img6}
              component={"img"}
              src="https://techwarezen.com/wp-content/uploads/2023/06/advantages-fantasy-sports.png"
            />
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
};

export default Fantasycricketapp;

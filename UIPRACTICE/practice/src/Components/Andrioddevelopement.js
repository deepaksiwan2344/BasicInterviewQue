import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import Footer from "./Footer";

const useStyle = makeStyles({
  mainwrap: {
    marginTop: "0px",
    height: "34rem  !important",
    backgroundPosition: "center !important",
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    background:
      "#008e99 url('https://techwarezen.com/wp-content/uploads/2021/07/sssssssss.png?id=1907')",
  },
  typo: {
    color: "#fff",
    padding: "6rem 8.5rem !important",
    fontSize: "6rem",
    "@media(max-width: 900px)": {
      fontSize: "2rem !important",
      padding: "10rem 1rem !important",
      "@media(max-width: 600px)": {
        fontSize: "2rem !important",
        padding: "10rem 1rem !important",
      },
    },
  },
  typo1: {
    marginTop: "-4rem !important",
    color: "#fff !important",
    padding: "0rem  9rem !important",
    "@media(max-width: 600px)": {
      padding: "2rem 2rem !important",
      marginTop: "-4rem !important",
    },
  },
  typo2: {
    textAlign: "center",
    padding: "5rem 5rem !important",
    marginTop: "2rem",
    "@media(max-width: 600px)": {
      padding: "1rem 1rem !important",
    },
  },
  mainwrap3: {
    // padding: "5rem 5rem",
  },
  cart1: {
    borderRadius: "5px",
    padding: "2rem 2rem",
    border: "1px solid red",
    textAlign: "center",
  },
  img: {
    width: "35%",
    marginTop: "2rem !important",
    "&:hover": {
      transform: " translate(20px, -20px)",
    },
  },
  img2:{
    width: "100%"
  }
});

const Andrioddevelopement = () => {
  const classes = useStyle();
  return (
    <>
      <Header />
      <Box className={classes.mainwrap}>
        <Typography variant="h1" className={classes.typo}>
          Andriod App Developement
        </Typography>
        <Typography className={classes.typo1}>Contact us Today</Typography>
      </Box>
      <Box className={classes.typo2}>
        <Typography variant="h4" sx={{ color: "#0e2b5c" }}>
          The Advantage Of Getting Android App Development in India
        </Typography>
        <Typography
          sx={{ color: "#0e2b5c", marginTop: "2rem", fontSize: "1.3rem" }}
        >
          Award Winning Indian App Developers
        </Typography>
        <Typography
          sx={{ marginTop: "2rem", textAlign: "left", color: "#7989a5" }}
        >
          Indian programmers using the Android have earned worldwide
          acknowledgment of their knowledge and skills regarding that OS. One
          reason you may want to hire Android app developers in India
          specialists who charge less than programmers based in other countries.
          At the same time, these Indian programmers can deliver results that
          are at par with the world’s best. This combination of low pricing and
          quality work is why many companies seek out the services of Android
          specialists from India.
        </Typography>
        <Typography
          sx={{ marginTop: "2rem", textAlign: "left", color: "#7989a5" }}
        >
          The key to making a great Android app is to find programmers with both
          technical and artistic skills. This means your preferred programmer
          should know all aspects of using the Android OS but still be able to
          render artistic design for the app. It is actually not that easy to
          find such programmers – often a programmer may be blessed with
          technical skills but is lacking in artistry for the design aspect.
        </Typography>
        <Typography
          sx={{ textAlign: "left", marginTop: "2rem", color: "#7989a5" }}
        >
          If you are comfortable with the idea of outsourcing your Android app
          project to a company overseas, then you might consider our company to
          serve you. We may be based in India but we will give you regular
          updates about the work we render so that it will seem like your
          project was being made just next door. We will be happy to show you
          our portfolio of done work to prove that we have the high-quality
          technical skills for the Android platform and that we cost much less
          than other app programming companies. If you wish for a free trial
          service, that is possible to so that we will know how much our pricing
          should be for the magnitude of your project.
        </Typography>
      </Box>
      <Container>
        <Box className={classes.mainwrap3}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", color: "#0e2b5c" }}
          >
            This is custom heading element
          </Typography>
          <Grid container spacing={3} mt={2}>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <Box className={classes.cart1}>
                <Typography variant="h4" sx={{ color: "#0e2b5c" }}>
                  Open Source
                </Typography>
                <Typography sx={{ marginTop: "1.5rem" }}>
                  Android is an open source platform which allows developers to
                  develops apps very easily. Really, it offers faster and
                  relatively low-cost development …
                </Typography>
                <Typography
                  className={classes.img}
                  component={"img"}
                  src="https://techwarezen.com/wp-content/uploads/2021/07/Open-Source.png"
                />
              </Box>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <Box className={classes.cart1}>
                <Typography variant="h4" sx={{ color: "#0e2b5c" }}>
                  Large User Base
                </Typography>
                <Typography sx={{ marginTop: "1.5rem" }}>
                  Android is an open source platform which allows developers to
                  develops apps very easily. Really, it offers faster and
                  relatively low-cost development …
                </Typography>
                <Typography
                  className={classes.img}
                  component={"img"}
                  src="https://techwarezen.com/wp-content/uploads/2021/07/Large.png"
                />
              </Box>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <Box className={classes.cart1}>
                <Typography variant="h4" sx={{ color: "#0e2b5c" }}>
                  Strong Framework
                </Typography>
                <Typography sx={{ marginTop: "1.5rem" }}>
                  Android is an open source platform which allows developers to
                  develops apps very easily. Really, it offers faster and
                  relatively low-cost development …
                </Typography>
                <Typography
                  className={classes.img}
                  component={"img"}
                  src="https://techwarezen.com/wp-content/uploads/2021/07/process.jpg"
                />
              </Box>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <Box className={classes.cart1}>
                <Typography
                  variant="h4"
                  sx={{ color: "#0e2b5c", fontSize: "1.9rem" }}
                >
                  Customizable User Interface
                </Typography>
                <Typography sx={{ marginTop: "1.5rem" }}>
                  Android is an open source platform which allows developers to
                  develops apps very easily. Really, it offers faster and
                  relatively low-cost development …
                </Typography>
                <Typography
                  className={classes.img}
                  component={"img"}
                  src="https://techwarezen.com/wp-content/uploads/2021/07/Customizable-User-Interface.png"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <Typography variant="h4" sx={{textAlign: "center", marginTop: "2rem", color: "#0e2b5c", lineHeight: "1.2em"}}>Andriod App Development</Typography>
        <Grid container spacing={3} mt={3}>
          <Grid item lg={6} sm={12} md={12} xs={12} >
            <Box>
              <Typography variant="h6">
                Hire Android Developers for customized Android app development
                services
              </Typography>
              <Typography>
                We design, develop and deliver innovative Android applications
                and games for Android devices, backed effectively with
                state-of-the-art UI and feature-rich functionality.
              </Typography>
              <Box sx={{marginTop: "3rem", padding: "2rem 2rem"}}>
                <li>Andriod UI/UX Design</li>
                <li>Andriod Wear Developement</li>
                <li>Andriod App Developement</li>
                <li>Andriod Game Developement</li>
                <li>Andriod App Developement</li>
                <li>Andriod Game Developement</li>
                
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <Typography
            component={"img"}
            className={classes.img2}
            src="https://techwarezen.com/wp-content/uploads/2021/07/mobile-app-tab2.gif"
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Andrioddevelopement;

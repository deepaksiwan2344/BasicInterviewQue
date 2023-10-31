import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import Getstarted from "./Getstarted";

const useStyle = makeStyles({
  mainwrap: {
    padding: "5rem 20rem ",
    "@media(max-width: 900px)": {
      padding: "1rem 1rem !important",
      marginTop: "3rem",
      "@media(max-width: 600px)": {
        padding: "1rem 1rem !important",
        marginTop: "3rem",
      },
    },
  },
  development: {
    textAlign: "center",
    color: "#0e2b5c",
    lineHeight: "1.1em",
    letterSpacing: "-1px",
    fontWeight: "500",
    "@media(max-width: 600px)": {
      fontSize: "2rem !important",
    },
  },
  mainwrap1: {
    padding: "4rem 4rem",
    "@media(max-width: 600px)": {
      padding: "1rem 1rem !important",
    },
  },
  imgwrap: {
    textAlign: "center !important",
  },
  img: {
    width: "75%",
    justifyContent: "center",
    "@media(max-width: 600px)": {
      marginButton: "2rem !important",
    },
  },
  cartwrap: {
    padding: "6rem 6rem",
    "@media(max-width: 900px)": {
      padding: "1rem 1rem !important",
      "@media(max-width: 600px)": {
        padding: "1rem 1rem !important",
      },
    },
  },
  cart: {
    border: "1px solid red",
    borderRadius: "5px",
    backgroundColor: "#fff",
    boxShadow: "1rem 1rem  1rem rgb(219 216 216)",
    padding: "3rem 3rem",
  },
  mainwrap2: {
    textAlign: "center",
    padding: "3rem 3rem",
    boxShadow: "0px 5px 0px #008d97",
    color: "#d3f5f1",
    borderRadius: "5px",
    backgroundColor: "#e26606 !important",
  },
  wrapservice_offer: {
    padding: "3rem 2rem",
  },
  typo1: {
    textAlign: "center",
    fontFamily: "Abril Fatface",
    color: "#0e2b5c",
    fontWeight: "500 !important",
    fontSize: "2.25rem !important",
    lineHeight: "1.2em !important",
  },
  wrapservice_offer_header: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "3rem",
    "@media(max-width: 600px)": {
      display: "none",
    },
  },
  wrapservice_li: {
    textDecoration: "none",
    listStyle: "none",
    fontSize: "1.4rem",
    cursor: "pointer",
    "&:hover": {
      color: "red !important",
    },
  },

  img1: {
    width: "100%",
  },
  listyle: {
    fontSize: "1.2rem !important",
    color: "#6d6d9b !important",
    marginTop: "0.5rem",
  },
  apple: {
    border: "1px solid #f5eded !important",
    borderRadius: "5px",
    boxShadow: "inset 1rem 1rem 1rem  #ede4e4",
    padding: "1rem 1rem",
    textAlign: "center",
  },
  img2: {
    marginTop: "2rem !important",
    width: "40%",
    textAlign: "center",
    "&:hover": {
      transition: " transform 1s ease",
      transform: "translateY(-6px)",
    },
  },
  typo4: {
    fontFamily: "Rubik",
    fontWeight: "500 !important",
    color: "#0e2b5c !important",
    lineHeight: "1.35em !important",
    fontSize: "1.15rem !important",
  },
 
 
});

const Appdevelopment = () => {
  const classes = useStyle();

  const Item = [
    {
      typo: "Business App",
      img: "https://techwarezen.com/wp-content/uploads/2021/07/Business-Apps.png",
    },
    {
      typo: "Educations App",
      img: "https://techwarezen.com/wp-content/uploads/2021/07/app-2.png",
    },
    {
      typo: "Finance App",
      img: "https://techwarezen.com/wp-content/uploads/2021/07/app-3.png",
    },
    {
      typo: "Health And Fitness App",
      img: "https://techwarezen.com/wp-content/uploads/2021/07/Health-And-Fitness-Apps.png",
    },
    {
      typo: "Music App",
      img: "https://techwarezen.com/wp-content/uploads/2021/07/Music-Apps.png",
    },
    {
      typo: "Photo Editing and  Video App",
      img: "https://techwarezen.com/wp-content/uploads/2021/07/Photo-Editing-And-Video-Apps.png",
    },
    {
      typo: "Social Networking Apps",
      img: "https://techwarezen.com/wp-content/uploads/2021/07/Social-Networking-Apps.png",
    },
    {
      typo: "App Development",
      img: "https://techwarezen.com/wp-content/uploads/2021/07/Game-App.png",
    },
  ];

  return (
    <>
      <Header />
      <Box className={classes.mainwrap}>
        <Typography variant="h3" className={classes.development}>
          Mobile App Developemnt Company
        </Typography>
        <Typography
          sx={{ marginTop: "2rem", textAlign: "center", color: "#54595F" }}
        >
          Custom IT services and solutions built specifically for your business
        </Typography>
      </Box>
      <Box className={classes.mainwrap1}>
        <Grid container spacing={13}>
          <Grid item lg={6} md={12} sm={12} sx={12}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  color: "#0e2b5c",
                  textTransform: "uppercase",
                }}
              >
                overview
              </Typography>
              <Typography sx={{ marginTop: "2rem", color: "#5f5b5b" }}>
                The smartphone Apps have changed the definition of every day
                activity in human life. It has been an essential part of our
                lives and why not? We do almost everything with the help an app.
                The world is connected with mobile apps. In this really techie
                era, TECHWAREZEN can help you to craft some excellent mobile
                application for your business & start-ups. We are the leading
                tailor made mobile app development company, serving finest apps
                across the globe.
              </Typography>
              <Typography sx={{ marginTop: "3rem", color: "#5f5b5b" }}>
                We have top mobile app developers who are highly skilled and
                updated with the latest technology trend. Our team works with
                the global firms to transform recognized ideas into stunning &
                inventive mobile Apps. We have rich experience and creativity in
                producing stunning mobile apps for different clients over the
                world.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6} md={12} sm={12} sx={12}>
            <Box className={classes.imgwrap}>
              <Typography
                className={classes.img}
                component={"img"}
                src="https://techwarezen.com/wp-content/uploads/2021/07/app.png"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.cartwrap}>
        <Typography variant="h4" sx={{ textAlign: "center", color: "#0e2b5c" }}>
          Proccess we follow
        </Typography>
        <Grid container spacing={6} mt={2}>
          <Grid item lg={4} md={12} sm={6} sx={12}>
            <Box className={classes.cart}>
              <Typography
                variant="h5"
                sx={{ color: "#0e2b5c", textAlign: "center" }}
              >
                Requarement Gathering
              </Typography>
              <Typography sx={{ marginTop: "2rem", textAlign: "center" }}>
                Requirement Gathering is the first and very important part of
                our mobile app development process.
              </Typography>

              <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
                <ImportContactsIcon
                  sx={{ fontSize: "5.5rem", color: "#fc5546" }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4} md={12} sm={6} sx={12}>
            <Box className={classes.cart}>
              <Typography
                variant="h5"
                sx={{ color: "#0e2b5c", textAlign: "center" }}
              >
                UI/UX Design
              </Typography>
              <Typography sx={{ marginTop: "2rem", textAlign: "center" }}>
                Requirement Gathering is the first and very important part of
                our mobile app development process.
              </Typography>
              <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
                <ImportContactsIcon
                  sx={{ fontSize: "5.5rem", color: "#fc5546" }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4} md={12} sm={6} sx={12}>
            <Box className={classes.cart}>
              <Typography
                variant="h5"
                sx={{ color: "#0e2b5c", textAlign: "center" }}
              >
                Prototype
              </Typography>
              <Typography sx={{ marginTop: "2rem", textAlign: "center" }}>
                Requirement Gathering is the first and very important part of
                our mobile app development process.
              </Typography>

              <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
                <ImportContactsIcon
                  sx={{ fontSize: "5.5rem", color: "#fc5546" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Container>
        <Box className={classes.mainwrap2}>
          <Typography variant="h4">App & Web Development Powerhouse</Typography>
          <Typography
            sx={{
              fontFamily: "Abril-Fatface",
              color: "#fff",
              fontSize: "1.5rem",
            }}
          >
            We are the innovators in the part of top mobile App developers.
          </Typography>
          <Typography sx={{ color: "#fff", marginTop: "1rem" }}>
            Just share your idea with us and we will craft your dream app just
            they you want.
          </Typography>
          <Button
            sx={{ height: "3.5rem", width: "12rem", marginTop: "2rem" }}
            variant="contained"
          >
            Start your Idea
          </Button>
        </Box>
      </Container>
      {/* services */}
      <Container>
        <Box className={classes.wrapservice_offer}>
          <Typography className={classes.typo1}>services we offer</Typography>
          <Box className={classes.wrapservice_offer_header}>
            <li className={classes.wrapservice_li}>Mobile App Strategy</li>
            <li className={classes.wrapservice_li}>Mobile App Design</li>
            <li className={classes.wrapservice_li}>Mobile App Developemnt</li>
            <li className={classes.wrapservice_li}>Mobile App Porting</li>
            <li className={classes.wrapservice_li}>QA and Developemnt</li>
          </Box>
          <Divider sx={{ marginTop: "2rem" }} />
        </Box>
        <Grid container spacing={4}>
          <Grid item lg={6} md={12} sm={12} xl={12}>
            <Box>
              <Typography sx={{ color: "#6d6d9b" }}>
                We can help you to run your business successfully with the help
                of your dream app project. Our Mobile app can also increase the
                productivity and help you to utilize the resources. We can
                strategies the your mobile app which can drive the traffic to
                your business page and lead you to the high profitable business.
              </Typography>
              <Box sx={{ marginTop: "2rem", padding: "0rem 2rem" }}>
                <li className={classes.listyle}>
                  Exclusive app structure keeping your users in mind
                </li>
                <li className={classes.listyle}>
                  Exclusive app structure keeping your users in mind
                </li>
                <li className={classes.listyle}>
                  Exclusive app structure keeping your users in mind
                </li>
                <li className={classes.listyle}>
                  Exclusive app structure keeping your users in mind
                </li>
                <li className={classes.listyle}>
                  Exclusive app structure keeping your users in mind
                </li>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xl={12}>
            <Typography
              className={classes.img1}
              component={"img"}
              src="https://techwarezen.com/wp-content/uploads/2021/07/Mobile-App-Development__1_-removebg-preview.png"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={4}>
          <Grid item lg={3} sm={12} md={6} xl={12}>
            <Box className={classes.apple}>
              <Typography className={classes.typo4}>
                Andriod App Development
              </Typography>
              <Typography
                className={classes.img2}
                component={"img"}
                src="https://techwarezen.com/wp-content/uploads/2021/07/download-2.png"
              />
            </Box>
          </Grid>
          <Grid item lg={3} sm={12} md={6} xl={12}>
            <Box className={classes.apple}>
              <Typography className={classes.typo4}>
                IOS App Development
              </Typography>
              <Typography
                className={classes.img2}
                component={"img"}
                src="https://techwarezen.com/wp-content/uploads/2021/07/iOS-Training-in-Pune-iOS-Classes-in-Pune.png"
              />
            </Box>
          </Grid>
          <Grid item lg={3} sm={12} md={6} xl={12}>
            <Box className={classes.apple}>
              <Typography className={classes.typo4}>
                Window App Development
              </Typography>
              <Typography
                className={classes.img2}
                component={"img"}
                src="https://techwarezen.com/wp-content/uploads/2021/07/windows-8-icon-500x500-1.png"
              />
            </Box>
          </Grid>
          <Grid item lg={3} sm={12} md={6} xl={12}>
            <Box className={classes.apple}>
              <Typography className={classes.typo4}>
                Game App Development
              </Typography>
              <Typography
                className={classes.img2}
                component={"img"}
                src="https://techwarezen.com/wp-content/uploads/2021/07/game-developer-icon-10.png"
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "2rem" }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", color: "#0e2b5c" }}
          >
            Kinds of Apps
          </Typography>
          <Typography sx={{ textAlign: "center", marginTop: "1rem" }}>
            Here, We make almost every genre of applications. You name it and we
            build it
          </Typography>
          <Grid container spacing={4} mt={2}>
            {Item.length > 0 &&
              Item.map((data, index) => {
                return (
                  <Grid item lg={3} md={12} sm={12} xl={12}>
                    <Box className={classes.apple}>
                      <Typography className={classes.typo4}>
                        {data.typo}
                      </Typography>
                      <Typography
                        className={classes.img2}
                        component={"img"}
                        src={data.img}
                      />
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>
      <Getstarted />
      <Footer />
    </>
  );
};

export default Appdevelopment;

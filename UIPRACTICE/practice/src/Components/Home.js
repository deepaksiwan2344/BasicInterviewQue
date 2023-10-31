import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "./Footer";
import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles({
  main_home: {
    display: "flex",
    marginTop: "1px",
    padding: "1rem 1rem ",
    gap: "5rem !important",
    justifyContent: "space-between",
    "@media(max-width : 900px)": {
      display: "inherit",
      padding: "1rem, 1rem !important",
      gap: "0rem !important",
      marginTop: "0rem",
      "@media(max-width : 600px)": {
        display: "inherit",
        padding: "1rem, 1rem !important",
        gap: "0rem !important",
        marginTop: "0rem",
      },
    },
  },
  video_wrap: {
    marginTop: "2rem",
    fontSize: "30px",
    textAlign: "center",
    padding: "4rem 3rem !important",
    "@media(max-width: 600px)": {
      marginTop: "3rem",
      padding: "0rem 0rem !important",
    },
  },
  img: {
    width: "25rem",
    height: "25rem",
    "@media(max-width : 900px)": {
      width: "100%",
      height: "35rem",
      justifyContent: "center",
      "@media(max-width : 600px)": {
        width: "100%",
        height: "20rem",
        justifyContent: "center",
      },
    },
  },
  content_wrap: {
    marginTop: "4rem",
    padding: "4rem 5rem  10rem 4rem !important",
    "@media(max-width: 600px)": {
      padding: "0rem 0rem 0rem 0rem !important",
      marginTop: "0rem !important",
    },
  },
  typo: {
    color: "#353535",
    fontFamily: "Poppins",
    fontWeight: "400px",
    fontSize: "14px",
    lineHeight: "4rem",
    textAlign: "left",
  },
  mycarousel: {
    // overflow: "inherit !important",
    height: "400px !important",
    width: "400px !important",
  },
});

const Home = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);


  const handleChange = (cur, prev) => {
    setIndex(cur);
  };

  useEffect(() => {
    AOS.init();
  }, []);


  const item = [
    {
      img: "https://techwarezen.com/wp-content/uploads/2021/07/app.png",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/06/ludo.png",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2021/07/Mobile-App-Development__1_-removebg-preview.png",
    },
  ];

  return (
    <div>
      <Header />
      <Box className={classes.main_home}>
        <Box
          className={classes.video_wrap}
          // data-aos="flip-left"
          // data-aos-easing="ease-out-cubic"
          // data-aos-duration="2000"
        >
          <Carousel
            index={index}
            onChange={handleChange}
            interval={4000}
            animation="slide"
            indicators={false}
            stopAutoPlayOnHover
            swipe
            className={classes.mycarousel}
          >
            {item.map((item, i) => (
              <Link to="/">
                <Typography
                  className={classes.img}
                  component={"img"}
                  src={item?.img}
                />
              </Link>
            ))}
          </Carousel>
        </Box>
        <Box className={classes.content_wrap}>
          <Typography
            style={{
              textAlign: "center",
              fontSize: "28px",
              color: "#2f5fd1",
            }}
          >
            We always look for Infinite Innovators
          </Typography>
          <Typography className={classes.typo}>
            Infynno Solution is a Website & Mobile Application Development
            company focused on startups. We are always interested in reaching
            out to new talents with a similar passion and experience for
            technology and transforming our client’s insight into a valuable
            business opportunity.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;

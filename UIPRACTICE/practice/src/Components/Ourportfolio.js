import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  Pagination,
} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Getstarted from "./Getstarted";

const useStyles = makeStyles({
  mainwrap_page: {
    padding: "3rem 3rem",
    "@media(max-width: 600px)": {
      padding: "1rem 1rem",
    },
  },
  pagetitle: {
    textAlign: "center",
    padding: "4rem 4rem",
    width: "50%",
    margin: "auto",
    "@media(max-width: 600px)": {
      padding: "1rem 0rem",
      width: "100%",
      textAlign: "center !important",
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
    color: "#0e2b5c",
    "&:hover": {
      borderBottom: "1px solid red",
      // position: "absolute",
    },
  },
  cartwrap: {
    padding: "2rem 2rem",
    backgroundColor: "#0e2b5c",
    borderRadius: "5px",
    textAlign: "center",
    position: "relative",
  },
  img: {
    width: "24%",
  },
  innercart: {
    backgroundColor: "#fff",
    cursor: "pointer",
    width: "80%",
    height: "90%",
    margin: "auto",
    marginTop: "2rem",
    padding: "1rem 1rem",
    borderRadius: "5px",
    textAlign: "left",
    marginBottom: "-50px",
    "&:hover": {
      transition: " transform 0.001s ease !important",
      transform: "translateY(-10px) !important",
    },
  },
  img1: {
    width: "100%",
    marginTop: "1rem !important",
  },
  btn: {
    width: "9rem !important ",
    height: "2.5rem !important",
    marginTop: "2rem !important",
    backgroundColor: "rgba(0, 0, 0, 0.1) !important",
    color: "#fff !important",
    fontSize: "10px !important",
    "&:hover": {
      backgroundColor: "red !important",
    },
  },
});

const Ourportfolio = () => {
  const classes = useStyles();

  const item = [
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/06/aviator-logo.jpg",
      typo: "Aviator Game ",
      typo1: "Development",
      typo2: "Aviator is, without a doubt, the <br /> most exciting on",
      btncontent: "View Details",
      sport: " Sports",
      innerimg:
        "https://techwarezen.com/wp-content/uploads/2023/06/Screenshot-2023-06-03-at-11942-AM-800x400.png",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/06/unnamed.jpg",
      typo: "Aviator Game ",
      typo1: "Development",
      typo2: "Aviator is, without a doubt, the <br /> most exciting on",
      btncontent: "View Details",
      sport: " Sports",
      innerimg:
        "https://techwarezen.com/wp-content/uploads/2023/06/Screenshot-2023-06-03-at-11942-AM-800x400.png",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/06/icons.png",
      typo: "Cricket Fantasy Application  ",
      typo1: "Development",
      typo2: "GAME OF SKILLS MyMaster11 is considered as a “Gam",
      btncontent: "View Details",
      sport: " Sports",
      innerimg:
        "https://techwarezen.com/wp-content/uploads/2023/06/Techwarezen-Google-Ads-Display-2.png",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/06/aviator-logo.jpg",
      typo: "Aviator Game ",
      typo1: "Development",
      typo2: "Aviator is, without a doubt, the <br /> most exciting on",
      btncontent: "View Details",
      sport: " Sports",
      innerimg:
        "https://techwarezen.com/wp-content/uploads/2023/06/Screenshot-2023-06-03-at-11942-AM-800x400.png",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/06/unnamed.jpg",
      typo: "Aviator Game ",
      typo1: "Development",
      typo2: "Aviator is, without a doubt, the <br /> most exciting on",
      btncontent: "View Details",
      sport: " Sports",
      innerimg:
        "https://techwarezen.com/wp-content/uploads/2023/06/Screenshot-2023-06-03-at-11942-AM-800x400.png",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/06/icons.png",
      typo: "Cricket Fantasy Application  ",
      typo1: "Development",
      typo2: "GAME OF SKILLS MyMaster11 is considered as a “Gam",
      btncontent: "View Details",
      sport: " Sports",
      innerimg:
        "https://techwarezen.com/wp-content/uploads/2023/06/Techwarezen-Google-Ads-Display-2.png",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/06/unnamed.jpg",
      typo: "Aviator Game ",
      typo1: "Development",
      typo2: "Aviator is, without a doubt, the <br /> most exciting on",
      btncontent: "View Details",
      sport: " Sports",
      innerimg:
        "https://techwarezen.com/wp-content/uploads/2023/06/Screenshot-2023-06-03-at-11942-AM-800x400.png",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/06/unnamed.jpg",
      typo: "Aviator Game ",
      typo1: "Development",
      typo2: "Aviator is, without a doubt, the <br /> most exciting on",
      btncontent: "View Details",
      sport: " Sports",
      innerimg:
        "https://techwarezen.com/wp-content/uploads/2023/06/Screenshot-2023-06-03-at-11942-AM-800x400.png",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/06/icons.png",
      typo: "Cricket Fantasy Application  ",
      typo1: "Development",
      typo2: "GAME OF SKILLS MyMaster11 is considered as a “Gam",
      btncontent: "View Details",
      sport: " Sports",
      innerimg:
        "https://techwarezen.com/wp-content/uploads/2023/06/Techwarezen-Google-Ads-Display-2.png",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/06/aviator-logo.jpg",
      typo: "Aviator Game ",
      typo1: "Development",
      typo2: "Aviator is, without a doubt, the <br /> most exciting on",
      btncontent: "View Details",
      sport: " Sports",
      innerimg:
        "https://techwarezen.com/wp-content/uploads/2023/06/Screenshot-2023-06-03-at-11942-AM-800x400.png",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/06/unnamed.jpg",
      typo: "Aviator Game ",
      typo1: "Development",
      typo2: "Aviator is, without a doubt, the <br /> most exciting on",
      btncontent: "View Details",
      sport: " Sports",
      innerimg:
        "https://techwarezen.com/wp-content/uploads/2023/06/Screenshot-2023-06-03-at-11942-AM-800x400.png",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/06/icons.png",
      typo: "Cricket Fantasy Application  ",
      typo1: "Development",
      typo2: "GAME OF SKILLS MyMaster11 is considered as a “Gam",
      btncontent: "View Details",
      sport: " Sports",
      innerimg:
        "https://techwarezen.com/wp-content/uploads/2023/06/Techwarezen-Google-Ads-Display-2.png",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/06/unnamed.jpg",
      typo: "Aviator Game ",
      typo1: "Development",
      typo2: "Aviator is, without a doubt, the <br /> most exciting on",
      btncontent: "View Details",
      sport: " Sports",
      innerimg:
        "https://techwarezen.com/wp-content/uploads/2023/06/Screenshot-2023-06-03-at-11942-AM-800x400.png",
    },
  ];


  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };

  //const [filterdata, setfilterdata] = useState([])

  //   const filterCategory = (typo) => {
  //     setSelectedCategory(typo);
  //     const filtered = item?.filter((item) => {
  //       if (typo
  //         === null || typo
  //         === '') {
  //         return true;
  //       }
  //       return item.typo === typo;
  //     });
  //     setfilterdata(filtered);
  //   };

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(item?.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsForCurrentPage = item.slice(startIndex, endIndex);

  return (
    <>
      <Header />
      <Box className={classes.mainwrap_page}>
        <Box className={classes.pagetitle}>
          <Typography
            variant="h3"
            sx={{
              color: "#0e2b5c",
              lineHeight: "1.2em",
              letterSpacing: "-1px",
              fontWeight: "600",
            }}
          >
            Our Portfolio
          </Typography>
          <Typography
            sx={{ marginTop: "1rem", color: "#0e2b5c", fontSize: "1rem" }}
          >
            We presents the following case studies that exemplify the type of
            solutions and services we are providing across our customer base.
          </Typography>
        </Box>
        <Box className={classes.overview}>
          <li className={classes.list}>All</li>
          <li className={classes.list}>Sport</li>
          <li className={classes.list}>Application</li>
          <li className={classes.list}>Travel</li>
          <li className={classes.list}>Wedsite</li>
          <li className={classes.list}>E-commerce Website</li>
          <li className={classes.list}>Information Website</li>
        </Box>
        <Container>
          <Grid container spacing={4} mt={2}>
            {itemsForCurrentPage?.length > 0 &&
              itemsForCurrentPage?.map((data) => {
                return (
                  <Grid item lg={4} sm={12} md={12} xl={12}>
                    <Box className={classes.cartwrap}>
                      <Typography
                        className={classes.img}
                        component={"img"}
                        src={data?.img}
                      />
                      <Typography
                        variant="h6"
                        sx={{ color: "#fff", marginTop: "1rem" }}
                      >
                        {data?.typo} <br /> {data?.typo1}{" "}
                      </Typography>
                      <Typography sx={{ marginTop: "1rem", color: "#c1bdbd" }}>
                        {data?.typo2}
                      </Typography>
                      <Button className={classes.btn}>
                        {data?.btncontent}
                      </Button>
                      <Box className={classes.innercart}>
                        <Typography sx={{ color: "#0e2b5c", fontSize: "14px" }}>
                          {data?.sport}
                        </Typography>
                        <Typography
                          className={classes.img1}
                          component={"img"}
                          src={data?.innerimg}
                        />
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
          {itemsForCurrentPage?.length > 0 && <Pagination onClick={handleScrollToTop}
            sx={{
              marginTop: "3rem",
              "& .MuiPagination-ul": {
                display: "flex",
                justifyContent: "center",
              },
              "& .MuiButtonBase-root": {
                color: "#ddd6d6",
                backgroundColor: "#f3f6f9",
                width: "3rem",
                borderRadius: "5px",
                padding: "24px 14px",
              },
              "& .MuiButtonBase-root:hover": {
                backgroundColor: "#0e2b5c !important",
                color: "#fff",
              },

              "& .Mui-selected:focus": {
                backgroundColor: "#0e2b5c !important",
                color: "#fff",
              },
            }}
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />}
        </Container>
      </Box>
      <Getstarted />
      <Footer />
    </>
  );
};

export default Ourportfolio;

import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Typography } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Getstarted from "./Getstarted"

const useStyle = makeStyles({
  mainwrap: {
    padding: "7rem 4rem",
    boxShadow: 'inset 0px 42px 42px -4px #78717124 !important',
    "@media(max-width: 900px)": {
      padding: "1px 1px !important",
      "@media(max-width: 600px)": {
        padding: "1px 1px !important",
      },
    },
  },
  cartwrap: {
    // border: "1px solid red",
    borderRadius: "5px",
  },
  img: {
    width: "90%",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "1rem 1rem 1rem #e1dddd",
    "&:hover": {
      transition: " transform 0.001s ease",
      transform: "translateY(-10px)",
      boxShadow: "1rem 1rem 1rem #e1dddd",
    },
  },
  typo: {
    //marginTop: "2rem !important",
    //padding: "2rem 2rem",
    textAlign: "left",
    color: "#3ea9f5",
    "&:hover": {
      color: "red",
    },
  },
});

const Itblog = () => {
  const classes = useStyle();

  const item = [
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/09/Pilnko-Casino-Development-Techwarezen-Private-Limited-1200x600.png",
      typo: "Gaming App Development Company",
      typo1: " Plinko Casino Game Development",
      typo2:
        " Unparalleled Plinko Casino Game Development Services Plinko is one of the most popular provably fair games that consists of a vertical structure that’s populated by pegs placed at  regular intervals. The pucks r..",
      img1: "https://secure.gravatar.com/avatar/b47bf6643615f3c3bff794769892a717?s=80&d=mm&r=g",
      typo3: "By Admin",
      typo4: "September 20, 2023",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/08/2-years-anniversary-banner-template_494952-2073-copy.jpg",
      typo: "Gaming App Development Company",
      typo1:
        " Celebrating Two Years of Techwarezen: A Journey of Innovation and Success",
      typo2:
        "*Introduction:* Today marks a significant milestone for Techwarezen as we celebrate two years of serving the tech industry with passion, dedication, and innovation. It has been an incredible journey filled with...",
      img1: "https://secure.gravatar.com/avatar/b47bf6643615f3c3bff794769892a717?s=80&d=mm&r=g",
      typo3: "By Admin",
      typo4: "September 20, 2023",
    },
    {
    img: "https://techwarezen.com/wp-content/uploads/2023/07/cricket-fantasy-app-development-company-1200x600.png",
      typo: "Gaming App Development Company",
      typo1: " Plinko Casino Game Development",
      typo2:
        " Unparalleled Plinko Casino Game Development Services Plinko is one of the most popular provably fair games that consists of a vertical structure that’s populated by pegs placed at  regular intervals. The pucks r..",
      img1: "https://secure.gravatar.com/avatar/b47bf6643615f3c3bff794769892a717?s=80&d=mm&r=g",
      typo3: "By Admin",
      typo4: "September 20, 2023",
    },
    {
    img: "https://techwarezen.com/wp-content/uploads/2023/07/Software-and-IT-jpg-1200x600.webp",
      typo: "Gaming App Development Company",
      typo1: " Plinko Casino Game Development",
      typo2:
        " Unparalleled Plinko Casino Game Development Services Plinko is one of the most popular provably fair games that consists of a vertical structure that’s populated by pegs placed at  regular intervals. The pucks r..",
      img1: "https://secure.gravatar.com/avatar/b47bf6643615f3c3bff794769892a717?s=80&d=mm&r=g",
      typo3: "By Admin",
      typo4: "September 20, 2023",
    },
    {
        img: "https://techwarezen.com/wp-content/uploads/2023/07/Game-development-company-in-noida-1200x600.jpg",
      typo: "Gaming App Development Company",
      typo1: " Plinko Casino Game Development",
      typo2:
        " Unparalleled Plinko Casino Game Development Services Plinko is one of the most popular provably fair games that consists of a vertical structure that’s populated by pegs placed at  regular intervals. The pucks r..",
      img1: "https://secure.gravatar.com/avatar/b47bf6643615f3c3bff794769892a717?s=80&d=mm&r=g",
      typo3: "By Admin",
      typo4: "September 20, 2023",
    },
    {
        img: "https://techwarezen.com/wp-content/uploads/2023/06/Techwarezen-Aviator-App-Development-1200x600.png",
      typo: "Gaming App Development Company",
      typo1: " Plinko Casino Game Development",
      typo2:
        " Unparalleled Plinko Casino Game Development Services Plinko is one of the most popular provably fair games that consists of a vertical structure that’s populated by pegs placed at  regular intervals. The pucks r..",
      img1: "https://secure.gravatar.com/avatar/b47bf6643615f3c3bff794769892a717?s=80&d=mm&r=g",
      typo3: "By Admin",
      typo4: "September 20, 2023",
    },
    {
        img: "https://techwarezen.com/wp-content/uploads/2023/06/Techwarezen-Cricket-Live-Line-1200x600.png",
      typo: "Gaming App Development Company",
      typo1: " Plinko Casino Game Development",
      typo2:
        " Unparalleled Plinko Casino Game Development Services Plinko is one of the most popular provably fair games that consists of a vertical structure that’s populated by pegs placed at  regular intervals. The pucks r..",
      img1: "https://secure.gravatar.com/avatar/b47bf6643615f3c3bff794769892a717?s=80&d=mm&r=g",
      typo3: "By Admin",
      typo4: "September 20, 2023",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/09/Pilnko-Casino-Development-Techwarezen-Private-Limited-1200x600.png",
      typo: "Gaming App Development Company",
      typo1: " Plinko Casino Game Development",
      typo2:
        " Unparalleled Plinko Casino Game Development Services Plinko is one of the most popular provably fair games that consists of a vertical structure that’s populated by pegs placed at  regular intervals. The pucks r..",
      img1: "https://secure.gravatar.com/avatar/b47bf6643615f3c3bff794769892a717?s=80&d=mm&r=g",
      typo3: "By Admin",
      typo4: "September 20, 2023",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/09/Pilnko-Casino-Development-Techwarezen-Private-Limited-1200x600.png",
      typo: "Gaming App Development Company",
      typo1: " Plinko Casino Game Development",
      typo2:
        " Unparalleled Plinko Casino Game Development Services Plinko is one of the most popular provably fair games that consists of a vertical structure that’s populated by pegs placed at  regular intervals. The pucks r..",
      img1: "https://secure.gravatar.com/avatar/b47bf6643615f3c3bff794769892a717?s=80&d=mm&r=g",
      typo3: "By Admin",
      typo4: "September 20, 2023",
    },
    {
      img: "https://techwarezen.com/wp-content/uploads/2023/09/Pilnko-Casino-Development-Techwarezen-Private-Limited-1200x600.png",
      typo: "Gaming App Development Company",
      typo1: " Plinko Casino Game Development",
      typo2:
        " Unparalleled Plinko Casino Game Development Services Plinko is one of the most popular provably fair games that consists of a vertical structure that’s populated by pegs placed at  regular intervals. The pucks r..",
      img1: "https://secure.gravatar.com/avatar/b47bf6643615f3c3bff794769892a717?s=80&d=mm&r=g",
      typo3: "By Admin",
      typo4: "September 20, 2023",
    },
  ];
  return (
    <>
      <Header />
      <Box className={classes.mainwrap}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#0e2b5c",
              fontWeight: "600",
              letterSpacing: "-1px",
              lineHeight: "1.1em",
            }}
          >
            IT Blog
          </Typography>
          <Typography sx={{ marginTop: "1rem", color: "#0e2b5c" }}>
            Exporing the world of IT management
          </Typography>
          <Grid container spacing={1} mt={8}>
            {item.length > 0 &&
              item.map((data) => {
                return (
                  <Grid item lg={4} md={6} sm={6} sx={12}>
                    <Box className={classes.cartwrap}>
                      <Typography
                        className={classes.img}
                        component={"img"}
                        src={data?.img}
                      />
                      <Box sx={{ padding: "3rem 2rem" }}>
                        <Typography className={classes.typo}>
                          {data?.typo}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "1.3rem",
                            fontWeight: "500",
                            color: "#0e2b5c",
                            textAlign: "left",
                          }}
                        >
                          {data?.typo1}
                        </Typography>
                        <Typography
                          sx={{
                            marginTop: "1rem",
                            color: "#0e2b5c",
                            textAlign: "left",
                          }}
                        >
                          {data?.typo2}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            gap: "10px",
                            marginTop: "2rem",
                          }}
                        >
                          <Typography
                            // classNam={classes.img1}
                            sx={{ width: "11%" }}
                            component={"img"}
                            src={data?.img1}
                          />
                          <Box sx={{ textAlign: "left" }}>
                            <Typography sx={{ fontSize: "13px !important" }}>
                              {data?.typo3}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "13px !important",
                                color: "#c5b3b3",
                              }}
                            >
                              {data?.typo4}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
          
        </Box>
       
      </Box>
      <Getstarted />
      <Footer />
    </>
  );
};

export default Itblog;

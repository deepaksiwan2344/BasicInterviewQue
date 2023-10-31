import React, {useEffect} from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyle = makeStyles({
  mainwrap: {
    padding: "4rem 6rem !important",
    marginTop: "2rem",
    backgroundColor: "whitesmoke",
    "@media(max-width: 600px)":{
        padding: "0rem 0rem !important"
    }
  },
  gridwrap: {
    marginTop: "2rem",
  },
  img: {
    width: "100%",
    cursor: "pointer",
    "&:hover": {
      transition: " transform 1s ease",
      transform: "translateY(-5px)",
    },
    "@media(max-width: 600px)":{
        //  width: "0% !important"
    }
  },
  rightwrap: {
    display: "flex",
    "@media(max-width: 600px)": {
      display: "inherit",
    },
  },
  typoheder: {
    fontSize: "10px !important",
    color: "#627792",
  },
  typoleft: {
    marginTop: "2rem",
    padding: "2rem 3rem",
    "@media(max-width: 600px)":{
        padding: "1rem 3rem !important"
    }
  },
  typo: {
    textAlign: "center",
  },
  typo3: {
    fontSize: "1rem",
    justifyContent: "center",
    textAlign: "center left",
    lineHeight: "1.45rem",
    // marginTop: "3rem !important",
    fontFamily: "Rubby",
    fontWeight: "500",
    color: "#0e2b5c",
  },
  btnwrap: {
    backgroundColor: "white !important",
    color: "red !important",
    "&:hover": {
      backgroundColor: "#ef3232 !important",
      color: "#fff !important",
      borderRadius: "4px",
      transition: " transform 1s ease",
      transform: "translateY(-5px)",
    },
    "@media(max-width: 600px)":{
        marginTop: "2rem !important"
    }
  },
  btn: {
    width: "30rem",
    height: "3rem",
    color: "#1dc2ef !important",
    fontSize: "1rem !important",
    fontFamily: "-moz-initial",
    fontWeight: "500",
    "&:hover": {
      color: "#fff !important",
    },
    "@media(max-width: 600px)":{
        width: "100% !important",
    
    }
  },
  gridrigthtypo: {
    padding: "2rem 2rem !important",
  },
  typo4:{
    marginTop: "2rem",
    "@media(max-width:600px)":{
        marginTop: "2rem !important",
        
        
    }

  }
});

const OurBlog = () => {
  const classes = useStyle();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Box className={classes.mainwrap}>
        <Box className={classes.typo}>
          <Typography className={classes.typoheder}>FORM OUR BLOG</Typography>
          <Typography
            varaint="h4"
            sx={{
              color: "#0e2b5c",
              fontWeight: "500",
              fontSize: "1.875rem",
              lineHeight: "1.2em",
              fontFamily: "-moz-initial",
            }}
          >
            More articles from resource library
          </Typography>
        </Box>
        <Box className={classes.gridwrap}>
          <Grid container spacing={4}>
            <Grid item lg={6} md={12} sm={6} sx={12} >
              <Box>
                <Typography
                  className={classes.img}
                  component={"img"}
                  src="https://techwarezen.com/wp-content/uploads/2023/09/Pilnko-Casino-Development-Techwarezen-Private-Limited-1190x558.png"
                />
                <Box className={classes.typoleft}>
                  <Typography>September 20 2023</Typography>
                  <Typography
                    variant="h6"
                    sx={{ marginTop: "1rem", color: "#0e2b5c" }}
                  >
                    Plinko Casino Game Developemnt
                  </Typography>
                  <Typography className={classes.typo4}>
                    Unparallled Plino Casino Game Developemnt Services Pinko is
                    one of the most popular probably fair game that consist of
                    verticla structure That...
                  </Typography>
                </Box>
                <Box className={classes.btnwrap}>
                  <Button className={classes.btn}>Read More</Button>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={12} sm={6} sx={12}>
              <Box className={classes.rightwrap}>
                <Grid container spacing={6}>
                  <Grid item lg={6} md={6} sm={6} sx={12}>
                    <Box>
                      <Typography
                        className={classes.img}
                        component={"img"}
                        src="https://techwarezen.com/wp-content/uploads/2023/08/2-years-anniversary-banner-template_494952-2073-copy-800x400.jpg"
                      />
                      <Box className={classes.gridrigthtypo}>
                        <Typography className={classes.typo3}>
                          Celebrating two years of Techwarezen: A Journey of
                          Innovatoin and Success
                        </Typography>
                        <Typography sx={{ marginTop: "2rem !important" }}>
                          August 2, 2023
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        className={classes.img}
                        component={"img"}
                        src="https://techwarezen.com/wp-content/uploads/2023/07/Game-development-company-in-noida-800x400.jpg"
                      />
                      <Box className={classes.gridrigthtypo}>
                        <Typography className={classes.typo3}>
                          Celebrating two years of Techwarezen: A Journey of
                          Innovatoin and Success
                        </Typography>
                        <Typography sx={{ marginTop: "2rem !important" }}>
                          August 2, 2023
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} sx={12}>
                    <Box>
                      <Typography
                        className={classes.img}
                        component={"img"}
                        src="https://techwarezen.com/wp-content/uploads/2023/08/2-years-anniversary-banner-template_494952-2073-copy-800x400.jpg"
                      />
                      <Box className={classes.gridrigthtypo}>
                        <Typography className={classes.typo3}>
                          Celebrating two years of Techwarezen: A Journey of
                          Innovatoin and Success
                        </Typography>
                        <Typography sx={{ marginTop: "2rem !important" }}>
                          August 2, 2023
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        className={classes.img}
                        component={"img"}
                        src="https://techwarezen.com/wp-content/uploads/2023/07/Software-and-IT-jpg-800x400.webp"
                      />
                      <Box  className={classes.gridrigthtypo}>
                       
                        <Typography className={classes.typo3}>
                          Celebrating two years of Techwarezen: A Journey of
                          Innovatoin and Success
                        </Typography>
                        <Typography
                          sx={{
                            marginTop: "2rem",
                            fontSize: "1rem",
                            textAlign: "center",
                          }}
                        >
                          August 2, 2023
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default OurBlog;

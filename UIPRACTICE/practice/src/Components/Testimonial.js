import React from "react";
import { Container, Box, Grid, Typography, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const useStyles = makeStyles({
  mainwrap: {
    backgroundColor: "#e7dddd",
    padding: "4rem 4rem 4rem !important",
    "@media(max-width: 600px)":{
      padding: "3% !important"
    }
  },
  typo: {
    textAlign: "center",
    padding: "2rem 2rem  2rem !important",
  },
  carousel: {},
  cartwarp: {
    borderTop: "2.5px solid green",
    borderRadius: "0.5rem",
    padding: " 10% !important",
    backgroundColor: "#fff",
    textAlign: "left",
  },

  typo1: {
    marginTop: "1.4rem !important",
    color: "#abb8c3"
  },
  name: {
    fontFamily: "-moz-initial !important",
    marginTop: "3rem !important",
    textTransform: "none",
    color: "#0e2b5c",
    lineHeight: "1.35em",
    fontSize: "1rem",
    fontWeight: "500",
  },
  typo2:{
    color: "#3ea9f5",
    fontSize: "15px",
     '&:hover': {
      color: "red !important" 
     }
  }
});

const Testimonial = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.mainwrap}>
        <Box className={classes.typo}>
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "#627792",
              fontSize: "10px",
              letterSpacing: "4px",
            }}
          >
            Testimonial
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#0e2b5c", lineHeight: "1.2em" }}
          >
            what our customer say
          </Typography>
        </Box>
        <Box className={classes.carousel}>
          <Grid container spacing={4}>
            <Grid item lg={4} sm={12} md={12} sx={12}>
              <Box className={classes.cartwarp}>
                <Typography
                  className={classes.img}
                  component={"img"}
                  src="https://techwarezen.com/wp-content/uploads/2021/10/sssss.png"
                />
                <Typography className={classes.typo1}>
                  I sleep easier at night knowing the Techwarezen team is in my
                  corner. Supporting my business and keeping my systems in
                  Tip-Top shape
                </Typography>
                <Typography className={classes.name}>Nikhil Nanda</Typography>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Box>
                    <Typography>Director of- </Typography>
                  </Box>
                  <Box>
                    <Typography  className={classes.typo2}>
                      JHS Svendgaard Limited
                    </Typography>
                    <Divider  />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} sm={12} md={12} sx={12}>
              <Box className={classes.cartwarp}>
                <Typography
                  className={classes.img}
                  component={"img"}
                  src="https://techwarezen.com/wp-content/uploads/2021/10/dddd.png"
                />
                <Typography className={classes.typo1}>
                  I sleep easier at night knowing the Techwarezen team is in my
                  corner. Supporting my business and keeping my systems in
                  Tip-Top shape
                </Typography>
                <Typography className={classes.name}>Dr Yash Gulati</Typography>

                <Box sx={{ display: "flex", gap: "5px" }}>
                  
                  <Box>
                    <Typography className={classes.typo2}>
                       Dryashgulati
                    </Typography>
                    <Divider />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} sm={12} md={12} sx={12}>
              <Box className={classes.cartwarp}>
                <Typography
                  className={classes.img}
                  component={"img"}
                  src="https://techwarezen.com/wp-content/uploads/2021/10/asssas.png"
                />
                <Typography className={classes.typo1}>
                  I sleep easier at night knowing the Techwarezen team is in my
                  corner. Supporting my business and keeping my systems in
                  Tip-Top shape
                </Typography>
                <Typography className={classes.name}>vishal Verma</Typography>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Box>
                    <Typography className={classes.typo2}>
                      PureYug
                    </Typography>
                    <Divider />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Testimonial;

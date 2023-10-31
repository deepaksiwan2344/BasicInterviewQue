import React from "react";
import { Box,Typography, Button } from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
  mainwrap5: {
    marginTop: "12rem",
    height: "34rem  !important",
    backgroundPosition: "center !important",
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    background:
      " url('https://techwarezen.com/wp-content/uploads/2018/08/content-bottom-bg.jpg')",
  },
  mainpic: {
    textAlign: "center",
    marginTop: "0rem",
  },
  btn: {
    marginTop: "2rem !important",
    backgroundColor: "#fc5546 !important",
    color: "#fff",
    width: "13rem",
    height: "4rem",
    "&:hover": {
      backgroundColor: "blue !important",
      position: "absolute",
      transition: "transform 0.1s",
    },
  },
});

const Getstarted = () => {
  const classes = useStyle();

  

  return (
    <>
      <Box className={classes.mainwrap5}>
        <Box className={classes.mainpic}>
          <Typography sx={{ color: "#0e2b5c", fontWeight: "600 !important" }}>
            Lets get started
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#0e2b5c",
              marginTop: "2rem",
              fontWeight: "750 !important",
            }}
          >
            Are you ready for a better, more <br /> productive business?
          </Typography>
          <Typography
            variant="h5"
            sx={{ marginTop: "1rem", fontSize: "1.125rem" }}
          >
            Stop worrying about technology problems. Focus on your business.
            <br />
            Let us provide the support you deserve
          </Typography>
          <Button variant="contained" className={classes.btn}>
            Contact Us Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Getstarted;

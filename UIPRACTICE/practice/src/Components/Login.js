import React from "react";
import {
  Box,
  Container,
  TextField,
  Grid,
  Typography,
  FormControl,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import Footer from "./Footer";

const useStyle = makeStyles({
  main_wrap: {
    marginTop: "4rem",
    justifyContent: "center",
    margin: "auto",
    width:"30%",
    "@media(max-width: 900px)": {
      width:"50%",
      "@media(max-width: 600px)": {
        width:"90%"
      },
    },
  },
  mainLeft: {},
  mainRight: {
    border: "1px solid black",
  },
  formbox: {
    padding: "2.5rem 2rem !important",
    backgroundColor: "#bedbbe",
    boxShadow: "inset 0px 7px 15px -4px #00000024",
    justifyContent: "center",
    border: "1px solid #7e8d7e",
    borderRadius: "5px",
  
  },
  logincont: {
    padding: "0rem 1.5rem 1.5rem 1.5rem",
    "@media(max-width : 900px)": {
      padding: "0rem 0rem 1.5rem 0rem",
      textAlign: "center",
    },
  },
  input: {
    backgroundColor: "white",
    width: "86%",
    padding: "5px 22px !important",
    border: "1px solid red !important", 
    borderRadius: "3px !important",
  },
  btn: {
    backgroundColor: "#00adc9 !important",
    color: "#fff !important",
    border: "1px solid #00adc9 !important",
    marginTop: "2rem !important",
    textAlign: "center",
   
  },
});

const Login = () => {
  const classes = useStyle();
  return (
    <div>
      <Header />
      <Box className={classes.main_wrap}>
        <Box className={classes.formbox}>
          <Box className={classes.logincont}>
            <Typography sx={{color:"green"}}>Login Now</Typography>
          </Box>
          <form className={classes.formbox1}>
            <FormControl fullWidth>
              <Box>
                <TextField 
                  className={classes.input}
                  variant="standard"
                  name="email"
                  placeholder="Email"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </Box>

              <Box style={{ marginTop: "1rem" }}>
                <TextField
                  className={classes.input}
                  variant="standard"
                  name="password"
                  placeholder="password"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </Box>
              <Button className={classes.btn} variant="outlined">
                Login
              </Button>
            </FormControl>
          </form>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Login;

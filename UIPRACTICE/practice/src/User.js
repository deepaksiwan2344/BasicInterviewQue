import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  TextField,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Header from "./Header";

const useStyle = makeStyles({
  maindiv: {
    marginTop: "5rem",
  },
  header: {
    textAlign: "center",
    display: "flex",
    gap: "2rem",
    margin: "auto"
  },
  diver: {
    border: "1px solid blue",
  },
  myTextField: {
    width: "300px",
    borderRadius: "5px",
    border: "1px solid gray",
    padding: "10px",
    fontSize: "16px",
  },
  btn:{
    backgroundColor: "#2557a7",
    borderRadius: "0.5rem",
    border: "0.0625rem solid transparent",
    color: "white",
    boxShadow: "none",
  }
});

const User = () => {
  const classes = useStyle();
  return (
    <>
      <Box>
        <Header />
        <Box borderBottom={"1px solid blue"} />
        <Container>
          <Box className={classes.maindiv}>
            <Box className={classes.header}>
              
                <Box>
                  <TextField
                    className="myTextField"
                    required
                    label="Required"
                    defaultValue="Hello World"
                  />
                </Box>
                <Box>
                  <TextField
                    className="myTextField"
                    required
                    label="Required"
                    defaultValue="Hello World"
                  />
                </Box>
                
                <button className={classes.btn}>FindJob</button>
              
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default User;

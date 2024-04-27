import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import Footer from "./Footer";
import Getstarted from "./Getstarted";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyle = makeStyles({
  mainwrap: {
    backgroundColor: "#231834",
    position: "absolute",
  },
  typocontainer: {
    textAlign: "center",
    padding: "6rem 20rem",
    "@media(max-width: 900px)": {
      padding: "1rem 1rem",
      "@media(max-width: 900px)": {
        padding: "1rem 1rem",
        marginTop: "4rem",
        "@media(max-width: 600px)": {
            padding: "1rem 1rem",
            marginTop: "4rem"
          },
      },
    },
  },
  maincartwrap: {
    position: "relative",
    marginTop: "28rem",
  },
  cartwrap: {
    backgroundColor: "#f0f3f5",
    borderRadius: "5px",
    padding: "2rem 3rem",
    position: "relative"
  },
  cartwrapmiddle: {
    backgroundColor: "#fff",
    padding: "2rem 3rem",
  },
  btn: {
    marginTop: "1.5rem !important",
    backgroundColor: "#0e2b5c !important",
    width: "17rem",
    color: "#fff !important",
    height: "3rem",
    "&:hover": {
      backgroundColor: "red !important",
    },
  },
  btnmiddle: {
    marginTop: "1.5rem !important",
    backgroundColor: "red !important",
    width: "17rem",
    color: "#fff !important",
    height: "3rem",
    "&:hover": {
      backgroundColor: "#0e2b5c !important",
    },
  },
  middlered: {
    backgroundColor: "#df3434",
    borderRadius: "6px 6px 0px 0px",
    width: "24rem",
    height: "2rem",
    "@media(max-width: 900px)": {
      width: "45rem !important",
      position: "absolute",
      "@media(max-width: 600px)": {
        width: "23.1rem !important",
        position: "absolute",
        
      },
      
    },
  },
  btnbox: {
    display: "flex",
    padding: "3rem 3rem",
    justifyContent: "center",
    "@media(max-width: 600px)": {
      padding: "0px 0px !important",
      marginTop: "2rem",
    },
  },
  monthly: {
    backgroundColor: "#fff",
    borderRadius: "30px 0px 0px 30px",
    width: "225px",
    height: "70px",
    "@media(max-width: 600px)": {
      width: "150px",
      height: "40px",
    },
  },
  annual: {
    backgroundColor: "#141111",
    textAlign: "center",
    borderRadius: "0px 30px 30px 0px",
    width: "225px",
    height: "70px",
    "@media(max-width: 600px)": {
      width: "150px",
      height: "40px",
    },
  },
  typomonthly: {
    padding: "19px 0rem",
    "@media(max-width: 600px)": {
      padding: "11px 0px",
      fontSize: "12px",
    },
  },
  mostpopular: {
    textAlign: "center",
    color: "#fff",
    fontSize: "12px",
    margin: "-31px !important",
    "@media(max-width: 900px)":{
        margin: "1px !important",
        "@media(max-width: 600px)":{
            margin: "1px !important",
        }
    }
  },
  header: {
    fontWeight: "600",
    color: " #0e2b5c",
    fontSize: "1.875rem !important",
    lineHeight: "1.2em",
    "@media(max-width: 600px)":{
        fontSize: "19px !important",
        textAlign:"center !important"
    }
  },
  faqwrap: {
    marginTop: "4rem",
    //borderTop: "1px solid green",
    background:"linear-gradient(to bottom, #eff3f5, #eff3f5)",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
    padding: "4rem 4rem",
    textAlign: "center",
    "@media(max-width: 600px)": {
      padding: "5px",
    },
  },
  accordionsummary: {
    backgroundColor: "#ffffff !important",
    borderTop: "1px solid rgba(0, 0, 0, 0.1) !important",
    padding: "0px 26px 18px 34px !important",
    "@media(max-width: 600px)": {
      padding: "1px !important",
      textAlign: "center !important",
    },
  },
  faq: {
    color: "#0e2b5c",
    fontSize: "18px",
    fontWeight: "600",
    "@media(max-width: 600px)": {
      fontSize: "12px !important",
      padding: "8px !important",
    },
  },
  ans: {
    color: "#0e2b5c",
    textAlign: "left",
    "@media(max-width: 600px)": {
      fontSize: "11px !important",
    },
  },
  moreicon: {
    color: "#c7cfda",
    fontSize: "3rem",
    "@media(max-width: 600px)": {
      fontSize: "1.5rem !important",
    },
  },
});

const Priceandplans = () => {
  const classes = useStyle();

  const item = [
    {
      faq: "Are free Anti-Virus software any good?",
      faqans:
        "First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.",
    },
    {
      faq: "Are free Anti-Virus software any good?",
      faqans:
        "First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.",
    },
    {
      faq: "Are free Anti-Virus software any good?",
      faqans:
        "First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.",
    },
    {
      faq: "Are free Anti-Virus software any good?",
      faqans:
        "First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.",
    },
    {
      faq: "Are free Anti-Virus software any good?",
      faqans:
        "First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.",
    },
    {
      faq: "Are free Anti-Virus software any good?",
      faqans:
        "First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.",
    },
    {
      faq: "Are free Anti-Virus software any good?",
      faqans:
        "First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.",
    },
    {
      faq: "Are free Anti-Virus software any good?",
      faqans:
        "First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.",
    },
    {
      faq: "Are free Anti-Virus software any good?",
      faqans:
        "First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.",
    },
  ];
  return (
    <>
      <Header />
      <Box className={classes.mainwrap}>
        <Box className={classes.typocontainer}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#1dc2ef",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            pricing and plans
          </Typography>
          <Typography variant="h4" sx={{ color: "#fff" }}>
            Flexible, transparent pricing that adapts to your needs
          </Typography>
          <Typography sx={{ marginTop: "2rem", color: "#9b9aad" }}>
            Free 30 Day Trial. No credit card required. Cancel anytime.
          </Typography>
          <Box className={classes.btnbox}>
            <Box className={classes.monthly}>
              <Typography className={classes.typomonthly}>
                Monthly Billing
              </Typography>
            </Box>
            <Box className={classes.annual}>
              <Typography className={classes.typomonthly}>
                Annual Billing
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Container className={classes.maincartwrap}>
          <Box>
            <Grid container spacing={0} mt={4}>
              <Grid item lg={4} md={12} sx={12}>
                <Box
                  className={classes.cartwrap}
                  sx={{ backgroundColor: "#abb8c3" }}
                >
                  <Typography
                    sx={{
                      color: " #0e2b5c",
                      fontSize: "1.25rem",
                      lineHeight: "1.35em",
                      fontWeight: "500",
                      textTransform: "uppercase",
                    }}
                  >
                    perchage app clone
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "2rem",
                      color: " #0e2b5c",
                      fontSize: "2rem",
                      lineHeight: "1.35em",
                      fontWeight: "500",
                      textTransform: "uppercase",
                    }}
                  >
                    RS 50, 000
                  </Typography>
                  <Button className={classes.btn}>get Quation</Button>
                  <Typography sx={{ marginTop: "2rem" }}>
                    Mobile Recharge, Bill Payments, Shopping, Bus, Hotel,
                    Flight, Cab, Movies & Money Transfer
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={12} sx={12}>
                <Box className={classes.middlered}>
                  <Typography className={classes.mostpopular}>
                    Most Papular
                  </Typography>
                </Box>
                <Box className={classes.cartwrapmiddle}>
                  <Typography
                    sx={{
                      color: " #0e2b5c",
                      fontSize: "1.25rem",
                      lineHeight: "1.35em",
                      fontWeight: "500",
                      textTransform: "uppercase",
                    }}
                  >
                    perchage app clone
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "2rem",
                      color: " #0e2b5c",
                      fontSize: "2rem",
                      lineHeight: "1.35em",
                      fontWeight: "500",
                      textTransform: "uppercase",
                    }}
                  >
                    RS 50, 000
                  </Typography>
                  <Button className={classes.btnmiddle}>get Quation</Button>
                  <Typography sx={{ marginTop: "2rem" }}>
                    Mobile Recharge, Bill Payments, Shopping, Bus, Hotel,
                    Flight, Cab, Movies & Money Transfer
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={12} sx={12}>
                <Box
                  className={classes.cartwrap}
                  sx={{ backgroundColor: "#abb8c3" }}
                >
                  <Typography
                    sx={{
                      color: " #0e2b5c",
                      fontSize: "1.25rem",
                      lineHeight: "1.35em",
                      fontWeight: "500",
                      textTransform: "uppercase",
                    }}
                  >
                    perchage app clone
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "2rem",
                      color: " #0e2b5c",
                      fontSize: "2rem",
                      lineHeight: "1.35em",
                      fontWeight: "500",
                      textTransform: "uppercase",
                    }}
                  >
                    RS 50, 000
                  </Typography>
                  <Button className={classes.btn}>get Quation</Button>
                  <Typography sx={{ marginTop: "2rem" }}>
                    Mobile Recharge, Bill Payments, Shopping, Bus, Hotel,
                    Flight, Cab, Movies & Money Transfer
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Typography sx={{ textAlign: "center", marginTop: "8rem" }}>
              Save on an annual plan with promo code: NANOSOFT20
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box className={classes.faqwrap}>
        <Typography sx={{ fontSize: "10px", color: "#0e2b5c" }}>FAQ</Typography>

        <Typography className={classes.header}>
          Frequency asked questions about prices
        </Typography>
        <Grid container spacing={4} mt={4}>
          {item.length > 0 &&
            item.map((data) => {
              return (
                <Grid item lg={6} md={6} sx={12}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon className={classes.moreicon} />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className={classes.accordionsummary}
                    >
                      <Typography className={classes.faq}>
                        {data?.faq}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={classes.ans}>
                        {data?.faqans}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              );
            })}
        </Grid>
      </Box>
      <Getstarted />
      <Footer />
    </>
  );
};

export default Priceandplans;

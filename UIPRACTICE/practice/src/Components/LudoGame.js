import React from "react";
import { Box, Divider, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles({
  mainwrap: {
    height: "24rem !important",
    background:
      "#008e99 url('https://techwarezen.com/wp-content/uploads/2023/06/ludo-king-_banner.jpg?id=3342')",
  },
  typo1: {
    margin: "auto",
    textAlign: "center",
    padding: "4rem 4rem",
    color: "#fff",
  },
  typo3: {
    marginTop: "4rem !important",
    transition: "transform 0.3s ease",
  },
  mainwrap2: {
    textAlign: "center",
  },
  header: {
    justifyContent: "center",
    display: "flex",
    color: "inherit",
    "&:hover": {
      color: "#0e2b5c",
    },
    fontSize: "15px",
    padding: "1.3rem 1.3rem",
    gap: "2rem",
    "@media(max-width: 600px)": {
      display: "none",
    },
  },
  typo4: {
    padding: "2rem 2rem",
    margin: "auto",
    width: "50rem",
    "@media(max-width: 900px)": {
      padding: "0rem 0rem",
      width: "inherit",
      " @media(max-width: 600px)": {
        padding: "0rem 0rem",
        width: "inherit",
      },
    },
  },
  typo5: {
    padding: "3rem 4rem",
    "@media(max-width: 600px)": {
      padding: "0rem 0rem",
    },
  },
  typo6: {
    justifyContent: "center",
  },
  typo6inner: {
    padding: "3rem 3rem",
    "@media(max-width: 600px)": {
      padding: "0rem 0rem !important",
      fontWeight: "500",
      lineHeight: "1.3em",
    },
  },
  img: {
    width: "100%",
    border: "1px solid #c3bdbd",
  },
  mainwrap3: {
    backgroundColor: "#231834 !important",
    padding: "3rem 3rem",
    "@media(max-width: 900px)":{
      padding: "1rem 1rem !important",
      "@media(max-width: 600px)":{
        padding: "1rem 1rem !important"
      }
    }
  },
  cart: {
    borderRadius: "5px",
    backgroundColor: "white",
    padding: "2rem 2rem !important",
    
  },
  gamefooter:{
    display: "flex",
    justifyContent: "center"
  },
  footerhi:{
    color: "#3ea9f5",
    "&:hover":{
      color: "red"
    }
  }
});

const LudoGame = () => {
  const classes = useStyles();

  const content = [
    {
      id: 1,
      header: "Daily Bonus",
      headermain:
        "We provide a daily bonus feature which motivates and keeps the players engaged in the game on a daily basis.",
    },
    {
      id: 2,
      header: " Play with Friend",
      headermain:
        "We provide a daily bonus feature which motivates and keeps the players engaged in the game on a daily basis.",
    },
    {
      id: 3,
      header: " Prizes& Loyalty",
      headermain:
        "We provide a daily bonus feature which motivates and keeps the players engaged in the game on a daily basis.",
    },
    {
      id: 4,
      header: "Daily Bonus",
      headermain:
        "We provide a daily bonus feature which motivates and keeps the players engaged in the game on a daily basis.",
    },
    {
      id: 5,
      header: "Daily Bonus",
      headermain:
        "We provide a daily bonus feature which motivates and keeps the players engaged in the game on a daily basis.",
    },
    {
      id: 6,
      header: "Daily Bonus",
      headermain:
        "We provide a daily bonus feature which motivates and keeps the players engaged in the game on a daily basis.",
    },
    {
      id: 7,
      header: "Daily Bonus",
      headermain:
        "We provide a daily bonus feature which motivates and keeps the players engaged in the game on a daily basis.",
    },
    {
      id: 8,
      header: "Daily Bonus",
      headermain:
        "We provide a daily bonus feature which motivates and keeps the players engaged in the game on a daily basis.",
    },
    {
      id: 9,
      header: "Daily Bonus",
      headermain:
        "We provide a daily bonus feature which motivates and keeps the players engaged in the game on a daily basis.",
    },
  ];

  return (
    <>
      <Header />
      <Box className={classes.mainwrap}>
        <Box className={classes.typo1}>
          <Typography variant="h2">LUDO</Typography>
          <Typography variant="h3">Game Development</Typography>
          <Typography className={classes.typo3}>
            Get a IT solutions quote
          </Typography>
        </Box>
      </Box>
      <Box className={classes.mainwrap2}>
        <Box className={classes.header}>
          <Box>
            <Typography>Overview</Typography>
          </Box>
          <Box>
            {" "}
            <Typography>Sevices</Typography>
          </Box>
          <Box>
            {" "}
            <Typography>Advantages</Typography>
          </Box>
          <Box>
            <Typography>Pricing</Typography>
          </Box>
          <Box>
            <Typography>Contact</Typography>
          </Box>
        </Box>
        <Divider sx={{ color: "red" }} />
      </Box>
      <Container>
        <Box className={classes.typo4}>
          <Box className={classes.typo5}>
            <Typography
              sx={{
                textAlign: "center",
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontSize: "10px",
              }}
            >
              overview
            </Typography>
            <Typography
              variant="h4"
              sx={{
                marginTop: "1rem",
                textAlign: "center",
                color: "#0e2b5c",
                lineHeight: "1.2em",
                fontSize: "1.875rem",
              }}
            >
              Ludo Game Development Company
            </Typography>
            <Typography sx={{ marginTop: "3rem", color: "#0e2b5c" }}>
              Engage Techarezen Pvt Ltd, the top developer of Ludo games, to
              give your app the best chance to stand out. On the MPL platform
              and in the Ludo game Bat Ball 11, you can see the results of our
              efforts developing Ludo games. We create standalone Ludo apps for
              your preferred platform (iOS, Android, or Web-App) as well as
              integrable Ludo solutions for multi-gaming platforms. We have
              become a well-liked choice when designing Ludo thanks to our
              flawless work, outstanding communication, and technological work.
              We update clients on our progress and tailor Ludo solutions to
              their specific needs.
            </Typography>
            <Typography sx={{ marginTop: "2rem", color: "#a3a0a0" }}>
              Behind all these initiatives are the systems and infrastructure
              powered by NanoSoft. With strengths in every discipline across the
              entire portfolio of financial IT—including storage area
              networking, compliance, security, disaster recovery planning and
              more—NanoSoft is your partner in building true enterprise grade IT
              environments.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box className={classes.typo6}>
          <Box className={classes.typo6inner}>
            <Typography
              sx={{
                textAlign: "center",
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontSize: "10px",
              }}
            >
              Sector
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "#0e2b5c", textAlign: "center", fontSize: "2rem" }}
            >
              Techwarezen is one of the best companies which provides Ludo Game
              Development services.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item lg={6} sm={12} md={12} sx={12}>
              {" "}
              <Typography sx={{ color: "#888a8d" }}>
                We provide the greatest services to our customers and
                successfully and efficiently meet all of their needs. Our team
                is made up of expert Ludo Game designers, artists, and editors.
                We have the newest and best-in-class game production studios,
                complete with cutting-edge tools and technology. We design the
                Ludo game for a variety of gaming systems. Our games target a
                wide range of gamers from all around the world. Players can now
                play the classic Ludo game online whenever and wherever they
                like. Now, players can play Ludo with anyone on the planet!One
                of the leading online ludo game creation companies in India and
                the USA is Techwarezen. For your online gaming business, we
                create popular and entertaining games.
              </Typography>
              <Typography sx={{ marginTop: "4rem", color: "#888a8d" }}>
                To construct multiplayer ludo websites and applications, we have
                a team of developers who are incredibly talented and qualified.
                Our standout features, such as awards, contests, a loyalty
                programme, etc., significantly broaden the game’s audience and
                boost player engagement. Techwarezen is a top-notch game
                creation company with clients from all over the world. With the
                help of our online Ludo Game development services, we have
                assisted various online businesses in achieving high profit
                margins.In-app purchases allow players to utilise real money in
                the game in addition to virtual cash. Our in-app purchases and
                adverts are both expertly placed. It doesn’t disrupt a game
                that’s already in progress.
              </Typography>
            </Grid>
            <Grid item lg={6} sm={12} md={12} sx={12} mt={10}>
              {" "}
              <Box>
                <Typography
                  className={classes.img}
                  component={"img"}
                  src=" https://techwarezen.com/wp-content/uploads/2023/06/ludo.png"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box className={classes.mainwrap3} mt={4}>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", color: "#fff", marginTop: "2rem" }}
        >
          Features Of Techwarezen Ludo Game Development
        </Typography>
        <Grid container spacing={3} mt={2}>
          {content.length > 0 &&
            content.map((item) => {
              return (
                <Grid item lg={4} md={6} sm={6} sx={12}>
                  <Box className={classes.cart}>
                    <Typography
                      sx={{
                        color: "#0e2b5c",
                        fontSize: "1.875rem",
                        lineHeight: "1.2em",
                        fontWeight: "500",
                      }}
                    >
                      {item.header}
                    </Typography>
                    <Typography mt={3}>{item.headermain}</Typography>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
        <Box className={classes.gamefooter}>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ textAlign: "center", marginTop: "1rem" }}>
              Stop wasting time and money on technology.{" "}
            </Typography>
          </Box>
          <Box className={classes.footerhi}>
            <Typography sx={{ textAlign: "center", marginTop: "1rem" }} >Let's get Started</Typography>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </>
  );
};

export default LudoGame;

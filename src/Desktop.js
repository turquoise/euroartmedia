import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import Ishallbe from "./ishallbe_xl";
import Repudiation from "./repudiation_xl";
import Power from "./power_xl";
import European from "./european_xl";
import Teddy from "./teddy_xl";
import Trisha from "./trisha_xl";
import Credits from "./credits_xl";
import Contact from "./contact_xl";
import Footer from "./footer_xl";
import logo from "./images/euroart.png";
import heroimage from "./images/euroarthero_smaller.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import StarIcon from "@material-ui/icons/Star";
import Box from "@material-ui/core/Box";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#cd5c5c",
    },
    secondary: {
      main: "#80deea",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "white",
    color: "black",
    width: "1440px",
    position: "fixed",
    left: "50%",
    marginLeft: "-720px",
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
    position: "absolute",
    zIndex: "10",
    top: "320px",
    left: "50%",
    marginLeft: "-120px",
    fontFamily: "KronaOne",
    fontSize: "34px",
    border: "2px solid white",
    padding: "20px 40px",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "5px",

    "&:hover": {
      textShadow: "2px 2px #323232",
      boxShadow: "3px 3px #323232",
    },
  },
  textexpand: {
    marginLeft: "auto",
  },
  textexpandopen: {
    marginLeft: "auto",
  },
  card: {
    backgroundColor: "white",
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    position: "absolute",
    right: "15px",
    top: "12px",
    height: "35px",
    cursor: "pointer",
  },
  divider: {
    position: "absolute",
    backgroundColor: "#cd5c5c",
    top: "250px",
    width: "100%",
    height: "70px",
    zIndex: "-5",
  },
  hero: {
    position: "absolute",
    top: "68px",
    zIndex: "-1",
    backgroundColor: "white",
    width: "1440px",
    height: "auto",
    borderBottom: "18px solid #cd5c5c",
    left: "50%",
    marginLeft: "-720px",
  },
  euroart: {
    position: "absolute",
    top: "80px",
    left: "50%",
    marginLeft: "-230px",
    zIndex: "1",
    fontSize: "100px",
    fontFamily: "KronaOne, Sans-Serif",
    letterSpacing: "2px",
    color: "#59b",
  },
  taglinetext: {
    position: "absolute",
    zIndex: "5",
    color: "white",
    fontSize: "38px",
    top: "190px",
    left: "50%",
    marginLeft: "-380px",
    textAlign: "center",
    lineHeight: "1.4",
    width: "800px",
    height: "500px",
    fontFamily: "KronaOne, Sans-Serif",
    textShadow: "2px 2px #323232",
  },
  mainHeading: {
    textAlign: "center",
    fontFamily: "KronaOne",
    fontSize: "32px",
    marginBottom: "40px",
    marginTop: "5px",
    color: "#133B4D",
    paddingTop: "20px",
  },
  heading: {
    textAlign: "center",
    height: "30px",
  },
  projectsDivider: {
    backgroundColor: "lightblue",
    width: "1440px",
    height: "40px",
    position: "relative",
    left: "50%",
    marginLeft: "-720px",
  },
  projectsTitle: {
    marginTop: "-38px",
    marginLeft: "90px",
    fontSize: "24px",
    fontFamily: "KronaOne, Sans-Serif",
    color: "#133B4D",
  },
  iconbutton: {
    position: "relative",
    left: "-580px",
    color: "#cd5c5c",
    fontSize: "36px",
  },
  containers: {
    position: "relative",
    top: "550px",
  },

  pulldownmenu: {
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "24px",
  },
  anchorlink1: {
    position: "relative",
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "18px",
    top: "10px",
    left: "20px",
    cursor: "pointer",
    color: "black",
    "&:hover": {
      textShadow: "2px 2px lightgray",
    },
  },
  anchorlink2: {
    position: "relative",
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "18px",
    top: "10px",
    left: "60px",
    cursor: "pointer",
    color: "black",
    "&:hover": {
      textShadow: "2px 2px lightgray",
    },
  },
  anchorlink3: {
    position: "relative",
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "18px",
    top: "10px",
    left: "100px",
    cursor: "pointer",
    color: "black",
    "&:hover": {
      textShadow: "2px 2px lightgray",
    },
  },
  anchorlink4: {
    position: "relative",
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "18px",
    top: "10px",
    left: "140px",
    cursor: "pointer",
    color: "black",
    "&:hover": {
      textShadow: "2px 2px lightgray",
    },
  },
  projectsTitle1: {
    position: "relative",
    top: "-35px",
    left: "-440px",
    fontSize: "22px",
    fontFamily: "KronaOne, Sans-Serif",
    color: "#133B4D",
  },
  projectsTitle2: {
    position: "relative",
    top: "-35px",
    left: "-360px",
    fontSize: "22px",
    fontFamily: "KronaOne",
    color: "#133B4D",
  },
  projectsTitle3: {
    position: "relative",
    top: "-35px",
    left: "-280px",
    fontSize: "22px",
    fontFamily: "KronaOne, Sans-Serif",
    color: "#133B4D",
  },
  projectsTitle4: {
    position: "relative",
    top: "-35px",
    left: "-320px",
    fontSize: "22px",
    fontFamily: "KronaOne, Sans-Serif",
    color: "#133B4D",
  },
}));

const Desktop = () => {
  const classes = useStyles();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <ThemeProvider theme={theme}>
      <div id="desktop">
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appbar}>
            <Toolbar>
              <div>
                <Box>
                  <img
                    src={logo}
                    className={classes.logo}
                    alt="EuroArt logo"
                    onClick={scrollToTop}
                  />
                </Box>
              </div>
              <div className={classes.anchorlink1}>
                <Link
                  to="projects_desktop"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </div>
              <div className={classes.anchorlink2}>
                <Link
                  to="about_desktop"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </div>
              <div className={classes.anchorlink3}>
                <Link
                  to="credits_desktop"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Credits
                </Link>
              </div>
              <div className={classes.anchorlink4}>
                <Link
                  to="contact_desktop"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </div>
            </Toolbar>
          </AppBar>

          <div>
            <Container>
              <img src={heroimage} className={classes.hero} alt="Bath Canal" />
            </Container>

            <Box>
              <div className={classes.euroart}>EuroArt</div>
            </Box>
            <Box>
              <div className={classes.taglinetext}>
                modern ideas filmed internationally
              </div>
            </Box>

            <Link to="project_desktop" spy={true} smooth={true} duration={500}>
              <div className={classes.button}>Projects</div>
            </Link>
          </div>
          <Container></Container>
          <div className={classes.containers}>
            <Container>
              <Element id="projects_desktop" name="projects_desktop">
                <div className={classes.mainHeading}>Projects</div>
              </Element>
              <Element id="project_desktop" name="project_desktop"></Element>
            </Container>
            <Paper className={classes.projectsDivider} elevation={0}>
              <div>
                <StarIcon className={classes.iconbutton} aria-label="icon" />
                <div className={classes.projectsTitle1}>Feature Films</div>
              </div>
            </Paper>
            <Container>
              <Ishallbe />
              <Repudiation />
            </Container>
            <Paper className={classes.projectsDivider} elevation={0}>
              <div>
                <StarIcon className={classes.iconbutton} aria-label="icon" />
                <div className={classes.projectsTitle2}>
                  Mini series ( 4 episodes)
                </div>
              </div>
            </Paper>
            <Container>
              <Power />
            </Container>
            <Paper className={classes.projectsDivider} elevation={0}>
              <div>
                <StarIcon className={classes.iconbutton} aria-label="icon" />
                <div className={classes.projectsTitle3}>
                  Documentary series (13 episodes)
                </div>
              </div>
            </Paper>
            <Container>
              <European />
            </Container>
            <Paper className={classes.projectsDivider} elevation={0}>
              <div>
                <StarIcon className={classes.iconbutton} aria-label="icon" />
                <div className={classes.projectsTitle4}>
                  Childrens' series (6 episodes)
                </div>
              </div>
            </Paper>
            <Container>
              <Teddy />
            </Container>

            <Container className={classes.mainHeading}>
              <Element id="about_desktop" name="about_desktop">
                <div className={classes.mainHeading}>About</div>
              </Element>
            </Container>
            <Container>
              <Trisha />
            </Container>

            <Container>
              <Element id="credits_desktop" name="credits_desktop">
                <div className={classes.mainHeading}>Credits</div>
              </Element>
            </Container>
            <Container>
              <Credits />
            </Container>

            <Container className={classes.mainHeading}>
              <Element id="contact_desktop" name="contact_desktop">
                <div className={classes.mainHeading}>Contact</div>
              </Element>
            </Container>

            <Container>
              <Contact />
            </Container>
            <Container>
              <Footer />
            </Container>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Desktop;

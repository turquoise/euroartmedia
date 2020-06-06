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
import heroimage from "./images/heroimage_smaller.png";
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
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
    position: "absolute",
    zIndex: "10",
    top: "350px",
    left: "50%",
    marginLeft: "-120px",
    fontFamily: "KronaOne",
    fontSize: "34px",
    border: "4px solid white",
    padding: "20px 40px",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "5px",
    textShadow: "3px 3px #323232",
    boxShadow: "3px 3px #323232",

    "&:hover": {
      textShadow: "3px 3px #323232",
      boxShadow: "3px 3px #323232",
      color: "#59b",
      border: "4px solid #59b",
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
    position: "relative",
    left: "0px",
    top: "58px",
    zIndex: "-1",
    backgroundColor: "white",
    width: "100%",
    borderBottom: "18px solid #cd5c5c",
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
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "30px",
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
    width: "100%",
    height: "40px",
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
    fontFamily: "KronaOne, Sans-Serif",
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
  iconbutton: {
    position: "relative",
    left: "-580px",
    color: "#cd5c5c",
    fontSize: "36px",
  },
  containers: {
    position: "relative",
    top: "50px",
  },
  contactphoto: {
    position: "relative",
    width: "100%",
    height: "auto",
    left: "0px",
  },
  pulldownmenu: {
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "24px",
  },
  anchorlink1: {
    position: "relative",
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "16px",
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
    fontSize: "16px",
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
    fontSize: "16px",
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
    fontSize: "16px",
    left: "140px",
    color: "black",
    cursor: "pointer",
    "&:hover": {
      textShadow: "2px 2px lightgray",
    },
  },
}));

const Laptop = () => {
  const classes = useStyles();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <ThemeProvider theme={theme}>
      <div id="laptop">
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
                  to="projects_laptop"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </div>
              <div className={classes.anchorlink2}>
                <Link to="about_laptop" spy={true} smooth={true} duration={500}>
                  About
                </Link>
              </div>
              <div className={classes.anchorlink3}>
                <Link
                  to="credits_laptop"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Credits
                </Link>
              </div>
              <div className={classes.anchorlink4}>
                <Link
                  to="contact_laptop"
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
            <div>
              <img src={heroimage} className={classes.hero} alt="Bath Canal" />
            </div>

            <Box>
              <div className={classes.euroart}>EuroArt</div>
            </Box>
            <Box>
              <div className={classes.taglinetext}>
                modern ideas filmed internationally
              </div>
            </Box>
            <Link to="projects_laptop" spy={true} smooth={true} duration={500}>
              <div className={classes.button}>Projects</div>
            </Link>
          </div>
          <Container></Container>
          <div className={classes.containers}>
            <Container>
              <Element id="projects_laptop" name="projects_laptop">
                <div className={classes.mainHeading}>Projects</div>
              </Element>
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
              <Element id="about_laptop" name="about_laptop">
                <div className={classes.mainHeading}>About</div>
              </Element>
            </Container>
            <Container>
              <Trisha />
            </Container>

            <Container>
              <Element id="credits_laptop" name="credits_laptop">
                <div className={classes.mainHeading}>Credits</div>
              </Element>
            </Container>
            <Container>
              <Credits />
            </Container>

            <Container className={classes.mainHeading}>
              <Element id="contact_laptop" name="contact_laptop">
                <div className={classes.mainHeading}>Contact</div>
              </Element>
            </Container>

            <Container>
              <Contact />
            </Container>
            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Laptop;

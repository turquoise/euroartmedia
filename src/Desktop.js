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
import heroimage from "./images/hero_l.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import StarIcon from "@material-ui/icons/Star";
import VideocamIcon from "@material-ui/icons/Videocam";
import Button from "@material-ui/core/Button";
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
    top: "700px",
    left: "50%",
    marginLeft: "-80px",
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
    top: "65px",
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
    top: "170px",
    left: "50%",
    marginLeft: "-280px",
    zIndex: "1",
    fontSize: "120px",
    fontFamily: "KronaOne",
    letterSpacing: "2px",
    color: "#59b",
  },
  taglinetext: {
    position: "absolute",
    zIndex: "5",
    color: "white",
    fontSize: "40px",
    top: "320px",
    left: "50%",
    marginLeft: "-380px",
    textAlign: "center",
    lineHeight: "1.4",
    width: "800px",
    height: "500px",
    fontFamily: "KronaOne",
    textShadow: "2px 2px black",
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
    fontFamily: "KronaOne",
    color: "#133B4D",
  },
  iconbutton: {
    marginLeft: "40px",
    marginTop: "3px",
    color: "#cd5c5c",
    fontSize: "36px",
  },
  containers: {
    position: "relative",
    top: "990px",
  },

  pulldownmenu: {
    fontFamily: "KronaOne",
    fontSize: "24px",
  },
  anchorlink1: {
    position: "relative",
    fontFamily: "KronaOne",
    fontSize: "18px",
    top: "10px",
    left: "20px",
  },
  anchorlink2: {
    position: "relative",
    fontFamily: "KronaOne",
    fontSize: "18px",
    top: "10px",
    left: "60px",
  },
  anchorlink3: {
    position: "relative",
    fontFamily: "KronaOne",
    fontSize: "18px",
    top: "10px",
    left: "100px",
  },
  anchorlink4: {
    position: "relative",
    fontFamily: "KronaOne",
    fontSize: "18px",
    top: "10px",
    left: "140px",
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
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.button}
                startIcon={<VideocamIcon />}
              >
                Projects
              </Button>
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
                <div className={classes.projectsTitle}>Feature Films</div>
              </div>
            </Paper>
            <Container>
              <Ishallbe />
              <Repudiation />
            </Container>
            <Paper className={classes.projectsDivider} elevation={0}>
              <div>
                <StarIcon className={classes.iconbutton} aria-label="icon" />
                <div className={classes.projectsTitle}>
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
                <div className={classes.projectsTitle}>
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
                <div className={classes.projectsTitle}>
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

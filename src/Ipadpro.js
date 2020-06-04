import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import Ishallbe from "./ishallbe_l";
import Repudiation from "./repudiation_l";
import Power from "./power_l";
import European from "./european_l";
import Teddy from "./teddy_l";
import Trisha from "./trisha_l";
import Credits from "./credits_l";
import Contact from "./contact_l";
import Footer from "./footer_l";
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
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
    position: "absolute",
    zIndex: "1",
    top: "520px",
    left: "50%",
    marginLeft: "-65px",
  },
  textexpand: {
    marginLeft: "auto",
  },
  textexpandopen: {
    marginLeft: "auto",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
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
    top: "120px",
    left: "50%",
    marginLeft: "-180px",
    zIndex: "1",
    fontSize: "80px",
    fontFamily: "KronaOne",
    color: "#59b",
  },
  taglinetext: {
    position: "absolute",
    zIndex: "5",
    color: "white",
    fontSize: "32px",
    top: "220px",
    left: "50%",
    marginLeft: "-240px",
    textAlign: "center",
    width: "500px",
    height: "80px",
    fontFamily: "KronaOne",
    lineHeight: "1.4",
    textShadow: "2px 2px black",
  },
  mainHeading: {
    textAlign: "center",
    fontFamily: "KronaOne",
    fontSize: "30px",
    marginBottom: "15px",
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
    top: "-33px",
    left: "-320px",
    fontSize: "24px",
    fontFamily: "KronaOne",
    color: "#133B4D",
  },
  projectsTitle2: {
    position: "relative",
    top: "-33px",
    left: "-240px",
    fontSize: "24px",
    fontFamily: "KronaOne",
    color: "#133B4D",
  },
  projectsTitle3: {
    position: "relative",
    top: "-33px",
    left: "-160px",
    fontSize: "24px",
    fontFamily: "KronaOne",
    color: "#133B4D",
  },
  projectsTitle4: {
    position: "relative",
    top: "-33px",
    left: "-195px",
    fontSize: "24px",
    fontFamily: "KronaOne",
    color: "#133B4D",
  },
  iconbutton: {
    position: "relative",
    left: "-460px",
    top: "2px",
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
    left: "0px",
  },
  pulldownmenu: {
    fontFamily: "KronaOne",
    fontSize: "22px",
  },
  anchorlink1: {
    position: "relative",
    fontFamily: "KronaOne",
    fontSize: "16px",
    left: "20px",
  },
  anchorlink2: {
    position: "relative",
    fontFamily: "KronaOne",
    fontSize: "18px",
    left: "60px",
  },
  anchorlink3: {
    position: "relative",
    fontFamily: "KronaOne",
    fontSize: "16px",
    left: "100px",
  },
  anchorlink4: {
    position: "relative",
    fontFamily: "KronaOne",
    fontSize: "16px",
    left: "140px",
  },
}));

const Ipadpro = () => {
  const classes = useStyles();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <ThemeProvider theme={theme}>
      <div id="ipadpro">
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
                  to="projects_ipadpro"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </div>
              <div className={classes.anchorlink2}>
                <Link
                  to="about_ipadpro"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </div>
              <div className={classes.anchorlink3}>
                <Link
                  to="credits_ipadpro"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Credits
                </Link>
              </div>
              <div className={classes.anchorlink4}>
                <Link
                  to="contact_ipadpro"
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

            <Link to="projects_ipadpro" spy={true} smooth={true} duration={500}>
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
              <Element id="projects_ipadpro" name="projects_ipadpro">
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
              <Element id="about_ipadpro" name="about_ipadpro">
                <div className={classes.mainHeading}>About</div>
              </Element>
            </Container>
            <Container>
              <Trisha />
            </Container>

            <Container>
              <Element id="credits)_ipadpro" name="credits_ipadpro">
                <div className={classes.mainHeading}>Credits</div>
              </Element>
            </Container>
            <Container>
              <Credits />
            </Container>

            <Container className={classes.mainHeading}>
              <Element id="contact_ipadpro" name="contact_ipadpro">
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

export default Ipadpro;

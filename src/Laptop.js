import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
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

import "./styles.scss";
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
    top: "600px",
    left: "50%",
    marginLeft: "-80px",
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
    top: "170px",
    left: "50%",
    marginLeft: "-280px",
    zIndex: "1",
    fontSize: "120px",
    fontFamily: "Krona One",
    letterSpacing: "2px",
    color: "#59b",
  },
  taglinetext: {
    position: "absolute",
    zIndex: "5",
    color: "black",
    fontSize: "40px",
    top: "240px",
    left: "50%",
    marginLeft: "-380px",
    textAlign: "center",
    lineHeight: "1.4",
    width: "800px",
    height: "500px",
    fontFamily: "Krona One",
  },
  mainHeading: {
    textAlign: "center",
    fontFamily: "Krona One",
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
    width: "100%",
    height: "40px",
  },
  projectsTitle: {
    marginTop: "-38px",
    marginLeft: "90px",
    fontSize: "24px",
    fontFamily: "Krona One",
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
    top: "50px",
  },
  contactphoto: {
    position: "relative",
    width: "100%",
    height: "auto",
    left: "0px",
  },
  pulldownmenu: {
    fontFamily: "Rubik",
    fontSize: "24px",
  },
  anchorlink1: {
    position: "relative",
    fontFamily: "Krona One",
    fontSize: "18px",
    top: "10px",
    left: "20px",
  },
  anchorlink2: {
    position: "relative",
    fontFamily: "Krona One",
    fontSize: "18px",
    top: "10px",
    left: "60px",
  },
  anchorlink3: {
    position: "relative",
    fontFamily: "Krona One",
    fontSize: "18px",
    top: "10px",
    left: "100px",
  },
  anchorlink4: {
    position: "relative",
    fontFamily: "Krona One",
    fontSize: "18px",
    top: "10px",
    left: "140px",
  },
}));

const Laptop = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div id="laptop">
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appbar}>
            <Toolbar>
              <div>
                <Box>
                  <img src={logo} className={classes.logo} alt="EuroArt logo" />
                </Box>
              </div>
              <div>
                <AnchorLink to="/laptop#projects" title="Projects">
                  <p className={classes.anchorlink1}>Projects</p>
                </AnchorLink>
              </div>
              <div>
                <AnchorLink to="/laptop#about" title="About">
                  <p className={classes.anchorlink2}>About</p>
                </AnchorLink>
              </div>
              <div>
                <AnchorLink to="/laptop#credits" title="Credits">
                  <p className={classes.anchorlink3}>Credits</p>
                </AnchorLink>
              </div>
              <div>
                <AnchorLink to="/laptop#contact" title="Contact">
                  <p className={classes.anchorlink4}>Contact</p>
                </AnchorLink>
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

            <AnchorLink to="/laptop#projects" title="Projects">
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.button}
                startIcon={<VideocamIcon />}
              >
                Projects
              </Button>
            </AnchorLink>
          </div>
          <Container></Container>
          <div className={classes.containers}>
            <div id="projects"></div>
            <Container>
              <div className={classes.mainHeading}>Projects</div>
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
            <div id="about"></div>
            <Container className={classes.mainHeading}>
              <div className={classes.mainHeading}>About</div>
            </Container>
            <Container>
              <Trisha />
            </Container>
            <div id="credits"></div>
            <Container>
              <div className={classes.mainHeading}>Credits</div>
            </Container>
            <Container>
              <Credits />
            </Container>
            <div id="contact"></div>
            <Container className={classes.mainHeading}>
              <div className={classes.mainHeading}>Contact</div>
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

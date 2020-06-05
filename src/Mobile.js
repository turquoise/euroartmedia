import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import Ishallbe from "./ishallbe_s";
import Repudiation from "./repudiation_s";
import Power from "./power_s";
import European from "./european_s";
import Teddy from "./teddy_s";
import Trisha from "./trisha_s";
import Credits from "./credits_s";
import Contact from "./contact_s";
import logo from "./images/euroart.png";
import heroimage from "./images/herosm.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import StarIcon from "@material-ui/icons/Star";
import Box from "@material-ui/core/Box";
import Footer from "./footer_s";

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
    top: "190px",
    left: "50%",
    marginLeft: "-50px",
    fontFamily: "KronaOne",
    fontSize: "16px",
    border: "2px solid white",
    padding: "5px 10px",
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
    position: "relative",
    left: "0px",
    top: "58px",
    zIndex: "-1",
    backgroundColor: "white",
    width: "100%",
    height: "auto",
    borderBottom: "15px solid #cd5c5c",
  },
  euroart: {
    position: "absolute",
    top: "80px",
    left: "50%",
    marginLeft: "-80px",
    zIndex: "1",
    fontSize: "36px",
    fontFamily: "KronaOne, Sans-Serif",
    color: "#59b",
  },
  taglinetext: {
    position: "absolute",
    zIndex: "5",
    color: "white",
    fontSize: "18px",
    top: "130px",
    left: "50%",
    marginLeft: "-150px",
    textAlign: "center",
    width: "300px",
    height: "80px",
    fontFamily: "KronaOne, Sans-Serif",
    lineHeight: "1.4",
    textShadow: "2px 2px #323232",
  },
  mainHeading: {
    textAlign: "center",
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "18px",
    marginBottom: "15px",
    marginTop: "5px",
    color: "#133B4D",
    paddingTop: "10px",
  },
  heading: {
    textAlign: "center",
    height: "30px",
  },
  projectsDivider: {
    backgroundColor: "lightblue",
    width: "100%",
    height: "30px",
  },
  projectsTitle1: {
    position: "relative",
    top: "-22px",
    left: "-75px",
    fontSize: "12px",
    fontFamily: "KronaOne, Sans-Serif",
    color: "#133B4D",
  },
  projectsTitle2: {
    position: "relative",
    top: "-22px",
    left: "-35px",
    fontSize: "12px",
    fontFamily: "KronaOne, Sans-Serif",
    color: "#133B4D",
  },
  projectsTitle3: {
    position: "relative",
    top: "-22px",
    left: "5px",
    fontSize: "12px",
    fontFamily: "KronaOne, Sans-Serif",
    color: "#133B4D",
  },
  projectsTitle4: {
    position: "relative",
    top: "-22px",
    left: "-10px",
    fontSize: "12px",
    fontFamily: "KronaOne, Sans-Serif",
    color: "#133B4D",
  },
  iconbutton: {
    position: "relative",
    left: "-150px",
    top: "3px",
    color: "#cd5c5c",
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
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "16px",
  },
}));

const Mobile = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <ThemeProvider theme={theme}>
      <div id="mobile">
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appbar}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <div>
                <Box>
                  <img
                    src={logo}
                    className={classes.logo}
                    alt="EuroArt Logo"
                    onClick={scrollToTop}
                  />
                </Box>
              </div>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link
                  to="projects_mobile"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <MenuItem
                    onClick={handleClose}
                    className={classes.pulldownmenu}
                  >
                    Projects
                  </MenuItem>
                </Link>
                <Link to="about_mobile" spy={true} smooth={true} duration={500}>
                  <MenuItem
                    onClick={handleClose}
                    className={classes.pulldownmenu}
                  >
                    About
                  </MenuItem>
                </Link>
                <Link
                  to="credits_mobile"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <MenuItem
                    onClick={handleClose}
                    className={classes.pulldownmenu}
                  >
                    Credits
                  </MenuItem>
                </Link>
                <Link
                  to="contact_mobile"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <MenuItem
                    onClick={handleClose}
                    className={classes.pulldownmenu}
                  >
                    Contact
                  </MenuItem>
                </Link>
              </Menu>
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

            <Link to="projects_mobile" spy={true} smooth={true} duration={500}>
              <div className={classes.button}>Projects</div>
            </Link>
          </div>
          <Container></Container>
          <div className={classes.containers}>
            <Container>
              <Element id="projects_mobile" name="projects_mobile">
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
            <div id="about"></div>
            <Container className={classes.mainHeading}>
              <Element id="about_mobile" name="about_mobile">
                <div className={classes.mainHeading}>About</div>
              </Element>
            </Container>
            <Container>
              <Trisha />
            </Container>
            <div id="credits"></div>
            <Container className={classes.mainHeading}>
              <Element id="credits_mobile" name="credits_mobile">
                <div className={classes.mainHeading}>Credits</div>
              </Element>
            </Container>
            <Container>
              <Credits />
            </Container>
            <div id="contact"></div>
            <Container className={classes.mainHeading}>
              <Element id="contact_mobile" name="contact_mobile">
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

export default Mobile;

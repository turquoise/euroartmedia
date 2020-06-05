import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import Ishallbe from "./ishallbe_m";
import Repudiation from "./repudiation_m";
import Power from "./power_m";
import European from "./european_m";
import Teddy from "./teddy_m";
import Trisha from "./trisha_m";
import Credits from "./credits_m";
import Contact from "./contact_m";
import logo from "./images/euroart.png";
import heroimage from "./images/hero_l.png";
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
import Footer from "./footer_m";

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
    top: "400px",
    left: "50%",
    marginLeft: "-90px",
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "28px",
    border: "2px solid white",
    padding: "10px 30px",
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
    borderBottom: "18px solid #cd5c5c",
  },
  euroart: {
    position: "absolute",
    top: "120px",
    left: "50%",
    marginLeft: "-150px",
    zIndex: "1",
    fontSize: "64px",
    fontFamily: "KronaOne, Sans-Serif",
    color: "#59b",
  },
  taglinetext: {
    position: "absolute",
    zIndex: "5",
    color: "white",
    fontSize: "30px",
    top: "200px",
    left: "50%",
    marginLeft: "-250px",
    textAlign: "center",
    width: "500px",
    height: "80px",
    fontFamily: "KronaOne, Sans-Serif",
    lineHeight: "1.4",
    textShadow: "2px 2px #323232",
  },
  mainHeading: {
    textAlign: "center",
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "26px",
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
    top: "-32px",
    left: "-220px",
    fontSize: "20px",
    fontFamily: "KronaOne, Sans-Serif",
    color: "#133B4D",
  },
  projectsTitle2: {
    position: "relative",
    top: "-32px",
    left: "-150px",
    fontSize: "20px",
    fontFamily: "KronaOne, Sans-Serif",
    color: "#133B4D",
  },
  projectsTitle3: {
    position: "relative",
    top: "-32px",
    left: "-85px",
    fontSize: "20px",
    fontFamily: "KronaOne, Sans-Serif",
    color: "#133B4D",
  },
  projectsTitle4: {
    position: "relative",
    top: "-32px",
    left: "-115px",
    fontSize: "20px",
    fontFamily: "KronaOne, Sans-Serif",
    color: "#133B4D",
  },
  iconbutton: {
    position: "relative",
    top: "2px",
    left: "-340px",
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
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "18px",
  },
  contact: {
    textAlign: "center",
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "30px",
    marginBottom: "15px",
    marginTop: "5px",
    color: "#133B4D",
    paddingTop: "20px",
  },
}));

const Ipad = () => {
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
      <div id="ipad">
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
                    alt="EuroArt logo"
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
                  to="projects_ipad"
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
                <Link to="about_ipad" spy={true} smooth={true} duration={500}>
                  <MenuItem
                    onClick={handleClose}
                    className={classes.pulldownmenu}
                  >
                    About
                  </MenuItem>
                </Link>
                <Link to="credits_ipad" spy={true} smooth={true} duration={500}>
                  <MenuItem
                    onClick={handleClose}
                    className={classes.pulldownmenu}
                  >
                    Credits
                  </MenuItem>
                </Link>
                <Link to="contact_ipad" spy={true} smooth={true} duration={500}>
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

            <Link to="projects_ipad" spy={true} smooth={true} duration={500}>
              <div className={classes.button}>Projects</div>
            </Link>

            <div className={classes.containers}>
              <Container>
                <Element id="projects_ipad" name="projects_ipad">
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
                <Element id="about_ipad" name="about_ipad">
                  <div className={classes.mainHeading}>About</div>
                </Element>
              </Container>
              <Container>
                <Trisha />
              </Container>

              <Container>
                <Element id="credits_ipad" name="credits_ipad">
                  <div className={classes.mainHeading}>Credits</div>
                </Element>
              </Container>
              <Container>
                <Credits />
              </Container>

              <Container className={classes.mainHeading}>
                <Element id="contact_ipad" name="contact_ipad">
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
      </div>
    </ThemeProvider>
  );
};

export default Ipad;

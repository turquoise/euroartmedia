import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
import VideocamIcon from "@material-ui/icons/Videocam";
import Button from "@material-ui/core/Button";
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
    zIndex: "1",
    top: "380px",
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
    marginLeft: "-150px",
    zIndex: "1",
    fontSize: "64px",
    fontFamily: "KronaOne",
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
  projectsTitle: {
    marginTop: "-38px",
    marginLeft: "60px",
    fontSize: "22px",
    fontFamily: "KronaOne",
    color: "#133B4D",
  },
  iconbutton: {
    marginLeft: "15px",
    marginTop: "3px",
    color: "#cd5c5c",
    fontSize: "36px",
  },
  containers: {
    position: "relative",
    top: "30px",
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
  contact: {
    textAlign: "center",
    fontFamily: "KronaOne",
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
                <MenuItem
                  onClick={handleClose}
                  className={classes.pulldownmenu}
                >
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Projects
                  </Link>
                </MenuItem>

                <MenuItem
                  onClick={handleClose}
                  className={classes.pulldownmenu}
                >
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  className={classes.pulldownmenu}
                >
                  <Link
                    activeClass="active"
                    to="credits"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Credits
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  className={classes.pulldownmenu}
                >
                  <AnchorLink href="#contact">Contact</AnchorLink>
                </MenuItem>
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

            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
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
              <div
                className={classes.mainHeading}
                id="projects"
                name="projects"
              >
                Projects
              </div>
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
              <div className={classes.mainHeading} id="about" name="about">
                About
              </div>
            </Container>
            <Container>
              <Trisha />
            </Container>

            <Container>
              <div className={classes.mainHeading} id="credits" name="credits">
                Credits
              </div>
            </Container>
            <Container>
              <Credits />
            </Container>

            <Container className={classes.mainHeading}>
              <div className={classes.mainHeading} id="contact" name="contact">
                Contact
              </div>
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

export default Ipad;

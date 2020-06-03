import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
import VideocamIcon from "@material-ui/icons/Videocam";
import Button from "@material-ui/core/Button";
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
    zIndex: "1",
    top: "220px",
    left: "50%",
    marginLeft: "-50px",
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
    top: "80px",
    left: "50%",
    marginLeft: "-80px",
    zIndex: "1",
    fontSize: "36px",
    fontFamily: "KronaOne",
    color: "#59b",
  },
  taglinetext: {
    position: "absolute",
    zIndex: "5",
    color: "black",
    fontSize: "18px",
    top: "110px",
    left: "50%",
    marginLeft: "-150px",
    textAlign: "center",
    width: "300px",
    height: "80px",
    fontFamily: "KronaOne",
    lineHeight: "1.4",
  },
  mainHeading: {
    textAlign: "center",
    fontFamily: "KronaOne",
    fontSize: "20px",
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
  projectsTitle: {
    marginTop: "-30px",
    marginLeft: "50px",
    fontSize: "16px",
    fontFamily: "KronaOne",
    color: "#133B4D",
  },
  iconbutton: {
    marginLeft: "15px",
    marginTop: "3px",
    color: "#cd5c5c",
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
                  <img src={logo} className={classes.logo} alt="EuroArt Logo" />
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
                  <AnchorLink href="#projects">Projects</AnchorLink>
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  className={classes.pulldownmenu}
                >
                  <AnchorLink href="#about">About</AnchorLink>
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  className={classes.pulldownmenu}
                >
                  <AnchorLink href="#credits">Credits</AnchorLink>
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

            <AnchorLink href="#projects">
              <Button
                color="primary"
                variant="contained"
                size="small"
                className={classes.button}
                startIcon={<VideocamIcon />}
              >
                Projects
              </Button>
            </AnchorLink>
          </div>
          <Container></Container>
          <div className={classes.containers}>
            <Container>
              <div className={classes.mainHeading} id="projects">
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
            <div id="about"></div>
            <Container className={classes.mainHeading}>
              <div className={classes.mainHeading} id="about">
                About
              </div>
            </Container>
            <Container>
              <Trisha />
            </Container>
            <div id="credits"></div>
            <Container className={classes.mainHeading}>
              <div className={classes.mainHeading} id="credits">
                Credits
              </div>
            </Container>
            <Container>
              <Credits />
            </Container>
            <div id="contact"></div>
            <Container className={classes.mainHeading}>
              <div className={classes.mainHeading} id="contact">
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

export default Mobile;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import image from "./images/trisha_sm.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "white",
    color: "black",
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
    height: "550px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    position: "absolute",
    right: "15px",
    top: "10px",
  },
  divider: {
    backgroundColor: "#cd5c5c",
    width: "100%",
    height: "15px",
  },
  hero: {
    backgroundColor: "gray",
    width: "100%",
    height: "250px",
  },
  mainHeading: {
    textAlign: "center",
    height: "30px",
  },
  heading: {
    textAlign: "center",
    height: "30px",
  },
  projectsDivider: {
    backgroundColor: "lightblue",
    width: "100%",
    height: "25px",
  },
  cardImage: {
    width: "230px",
    height: "300px",
    backgroundColor: "white",
    position: "relative",
    left: "-10px",
    top: "20px",
  },
  image: {
    position: "relative",
    left: "0px",
    top: "15px",
    width: "200px",
    height: "270px",
  },
  cardcontent: {
    backgroundColor: "white",
    fontFamily: "roboto",
    fontSize: "20px",
  },
  right: {
    backgroundColor: "white",
    color: "black",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "roboto",
    fontSize: "20px",
    paddingTop: "40px",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "40px",
  },
  list: {
    width: "700px",
    position: "relative",
    top: "-310px",
    left: "240px",
  },
  typography: {
    fontFamily: "roboto",
    fontSize: "20x",
  },
  gridleft: {
    paddingLeft: "5x",
    paddingRight: "10px",
    marginTop: "-20px",
  },
  gridright: {
    paddingLeft: "20px",
    paddingRight: "5px",
    borderLeft: "solid",
    borderColor: "lightgray",
    borderWidth: "4px",
  },
  projectTitle: {
    fontFamily: "Roboto",
    fontSize: "28px",
  },
}));

const Trisha = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.projectTitle}>TRISHA CLARKE</div>
        <div className={classes.projectTitle}>Producer</div>
      </CardContent>

      <CardContent>
        <Paper className={classes.cardImage} elevation={5}>
          <img src={image} className={classes.image} alt="Trisha Clarke" />
        </Paper>
      </CardContent>

      <CardContent>
        <List className={classes.list}>
          <Grid container spacing={3} className={classes.grid}>
            <ListItem>
              <Grid item sm={6} className={classes.gridleft}>
                <p className={classes.typography}>
                  Trisha Clarke founded EuroArtMedia in order to produce
                  documentaries and mini series that are filmed internationally.
                  After leaving school, Trisha Clarke began dancing with The
                  Royal Ballet Company and then become an actress at Studio 68.
                  Trisha has undertaken acting roles in film, television and
                  theatre. After obtaining a BA in Fine Art at Central St
                  Martin's she went on to study on a BBC News Course in
                  Television Journalism.
                </p>
              </Grid>
              <Grid item sm={6} className={classes.gridright}>
                <p className={classes.typography}>
                  Trisha studied for a Post graduate MA in Media Production at
                  the University of Strathclyde. Whilst there she also undertook
                  a Script editing course run by Scottish Screen in Glasgow.
                  Continuing with her work as a script editor she trained as a
                  script mentor at FAMU in Prague. Trisha has enjoyed work as a
                  director, directing mainly documentary films which include:
                  'Responses'; 'Markus Wolfe - In From The Cold' and 'The Vital
                  Link'.
                </p>
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </CardContent>
    </Card>
  );
};

export default Trisha;

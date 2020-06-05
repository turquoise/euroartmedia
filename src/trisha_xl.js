import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import image from "./images/trisha_sm.png";
import image2 from "./images/trisha_right_bw.png";

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
  },
  cardImage2: {
    width: "230px",
    height: "300px",
    backgroundColor: "white",
    position: "relative",
    left: "60px",
  },
  image: {
    position: "relative",
    left: "0px",
    top: "15px",
    width: "200px",
    height: "270px",
  },
  image2: {
    position: "relative",
    left: "0px",
    top: "15px",
    width: "200px",
    height: "270px",
  },
  cardcontent: {
    backgroundColor: "white",
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20px",
  },
  right: {
    backgroundColor: "white",
    color: "black",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Roboto, Sans-Serif",
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
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20x",
    textAlign: "left",
  },
  title: {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "28px",
    marginBottom: "0px",
  },
  paperleft: {
    position: "relative",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "10px",
    backgroundColor: "white",
    width: "300px",
    height: "250px",
    borderRight: "3px solid lightgray",
    left: "-58px",
  },
  paperright: {
    position: "relative",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "10px",
    backgroundColor: "white",
    width: "300px",
    height: "250px",
    left: "-10px",
  },
}));

const Trisha = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <p className={classes.title}>TRISHA CLARKE</p>
        <p className={classes.title}>Producer</p>
      </CardContent>

      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={3}>
            <Paper className={classes.cardImage} elevation={5}>
              <img src={image} className={classes.image} alt="Trisha Clarke" />
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper elevation={0} className={classes.paperleft}>
              <p className={classes.typography}>
                Trisha Clarke founded EuroArtMedia in order to produce
                documentaries and mini series that are filmed internationally.
                After leaving school, Trisha Clarke began dancing with The Royal
                Ballet Company and then become an actress at Studio 68. Trisha
                has undertaken acting roles in film, television and theatre.
                After obtaining a BA in Fine Art at Central St Martin's she went
                on to study on a BBC News Course in Television Journalism.
              </p>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper elevation={0} className={classes.paperright}>
              <p className={classes.typography}>
                Trisha studied for a Post graduate MA in Media Production at the
                University of Strathclyde. Whilst there she also undertook a
                Script editing course run by Scottish Screen in Glasgow.
                Continuing with her work as a script editor she trained as a
                script mentor at FAMU in Prague. Trisha has enjoyed work as a
                director, directing mainly documentary films which include:
                'Responses'; 'Markus Wolfe - In From The Cold' and 'The Vital
                Link'.
              </p>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper className={classes.cardImage2} elevation={5}>
              <img src={image2} className={classes.image2} alt="Film Reel" />
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Trisha;

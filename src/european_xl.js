import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/european_sm.png";
import image2 from "./images/european_right.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: "white",
    color: "black",
    height: "700px",
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
  right: {
    backgroundColor: "#e1f5fe",
    color: "black",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Roboto",
    fontSize: "20px",
    paddingTop: "40px",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "40px",
  },
  cardImage: {
    height: "230px",
    width: "230px",
    backgroundColor: "white",
    position: "relative",
    left: "-10px",
  },
  cardImage2: {
    height: "230px",
    width: "230px",
    backgroundColor: "white",
    position: "relative",
    left: "60px",
  },
  cardcontent: {
    backgroundColor: "#e1f5fe",
    fontFamily: "Roboto",
    fontSize: "20px",
  },
  image: {
    position: "relative",
    left: "0px",
    top: "15px",
    width: "200px",
    height: "200px",
  },
  image2: {
    position: "relative",
    left: "0px",
    top: "15px",
    width: "200px",
    height: "200px",
  },
  credits: {
    color: "#133B4D",
    fontFamily: "Roboto",
    fontSize: "20px",
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: "20x",
    textAlign: "left",
  },
  list: {
    width: "700px",
    position: "relative",
    top: "-240px",
    left: "240px",
  },
  grid: {
    backgroundColor: "#e1f5fe",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  quotetext: {
    fontFamily: "KronaOne",
    fontSize: "20px",
    paddingTop: "0px",
    paddingLeft: "50px",
    paddingRight: "40px",
    color: "#133B4D",
    lineHeight: "1.5",
    marginTop: "-10px",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: "30px",
    marginTop: "20px",
    marginLeft: "20px",
  },
  paperleft: {
    position: "relative",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "10px",
    backgroundColor: "#e1f5fe",
    width: "300px",
    height: "220px",
    borderRight: "4px solid lightblue",
    left: "-50px",
  },
  paperright: {
    position: "relative",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "10px",
    backgroundColor: "#e1f5fe",
    width: "300px",
    height: "220px",
    left: "-10px",
  },
}));

const European = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <p className={classes.title}>EUROPEAN CAFES</p>
      </CardContent>

      <CardContent>
        <List>
          <Grid container spacing={0}>
            <ListItem>
              <Grid item lg={6}>
                <Container>
                  <Grid container spacing={0}>
                    <Grid item xs={6}>
                      <Paper elevation={0} className={classes.credits}>
                        Producer
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={0} className={classes.credits}>
                        Trisha Clarke
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={0} className={classes.credits}>
                        Line Producer
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={0} className={classes.credits}>
                        Kate Dain
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={0} className={classes.credits}>
                        Presenters
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={0} className={classes.credits}>
                        Georgio Locatelli and Ulrika Jonsson
                      </Paper>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item lg={6}>
                <Container>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <p className={classes.quotetext}>
                        A documentary series with 13 episodes exploring the
                        history and culture of the most enchanting European
                        cafes.
                      </p>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </CardContent>

      <CardContent>
        <Grid container spacing={2}>
          <Grid item sm={3}>
            <Paper className={classes.cardImage} elevation={5}>
              <img src={image} className={classes.image} alt="European Cafe" />
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper elevation={0} className={classes.paperleft}>
              <p className={classes.typography}>
                Series about the famous coffee houses in Europe 'my favourite
                cafes are almost as dear to me as the places I have lived.'
                Cafes are the window onto the world - you see ordinary people,
                locals as well as visitors coming and going taking timouts
                between work and home.
              </p>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper elevation={0} className={classes.paperright}>
              <p className={classes.typography}>
                When I go back to certain cities, 'I head for my favourite
                cafes' Georgio Locatelli observes their food and wine while
                discovering their history and culture. In Paris there is the
                romantic ideal to while away the afternoon in a sidewalk cafe.
              </p>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper className={classes.cardImage2} elevation={5}>
              <img src={image2} className={classes.image2} alt="Coffee Cup" />
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default European;

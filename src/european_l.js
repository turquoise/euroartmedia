import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/european_sm.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardImage: {
    height: "230px",
    width: "230px",
    backgroundColor: "white",
    position: "relative",
    left: "-10px",
    top: "20px",
  },
  card: {
    backgroundColor: "white",
    color: "black",
    height: "580px",
  },
  image: {
    position: "relative",
    left: "0px",
    top: "15px",
    width: "200px",
    height: "200px",
  },
  credits: {
    color: "#133B4D",
    fontFamily: "roboto",
    fontSize: "20px",
  },
  typography: {
    fontFamily: "roboto",
    fontSize: "20x",
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
  gridleft: {
    paddingLeft: "5x",
    paddingRight: "10px",
  },
  gridright: {
    paddingLeft: "20px",
    paddingRight: "5px",
    borderLeft: "solid",
    borderColor: "lightblue",
    borderWidth: "4px",
  },
  projectTitle: {
    fontFamily: "Roboto",
    fontSize: "28px",
  },
}));

const European = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.projectTitle}>EUROPEAN CAFES</div>
      </CardContent>

      <CardContent>
        <List>
          <Grid container className={classes.root} spacing={0}>
            <ListItem>
              <Grid item sm={3}></Grid>
              <Grid item sm={4}>
                <Paper elevation={0} className={classes.credits}>
                  Producer
                </Paper>
              </Grid>
              <Grid item sm={1}></Grid>
              <Grid item sm={4}>
                <Paper elevation={0} className={classes.credits}>
                  Trisha Clarke
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={3}></Grid>
              <Grid item sm={4}>
                <Paper elevation={0} className={classes.credits}>
                  Line Producer
                </Paper>
              </Grid>
              <Grid item sm={1}></Grid>
              <Grid item sm={4}>
                <Paper elevation={0} className={classes.credits}>
                  Kate Dain
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={3}></Grid>
              <Grid item sm={4}>
                <Paper elevation={0} className={classes.credits}>
                  Presenters
                </Paper>
              </Grid>
              <Grid item sm={1}></Grid>
              <Grid item sm={4}>
                <Paper elevation={0} className={classes.credits}>
                  Georgio Locatelli and Ulrika Jonsson
                </Paper>
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </CardContent>

      <CardContent>
        <Paper className={classes.cardImage} elevation={5}>
          <img src={image} className={classes.image} alt="European Cafe" />
        </Paper>
      </CardContent>

      <CardContent>
        <List className={classes.list}>
          <Grid container spacing={3} className={classes.grid}>
            <ListItem>
              <Grid item sm={6} className={classes.gridleft}>
                <p className={classes.typography}>
                  Series about the famous coffee houses in Europe 'my favourite
                  cafes are almost as dear to me as the places I have lived.'
                  Cafes are the window onto the world - you see ordinary people,
                  locals as well as visitors coming and going taking timouts
                  between work and home.
                </p>
              </Grid>
              <Grid item sm={6} className={classes.gridright}>
                <p className={classes.typography}>
                  When I go back to certain cities, 'I head for my favourite
                  cafes' Georgio Locatelli observes their food and wine while
                  discovering their history and culture. In Paris there is the
                  romantic ideal to while away the afternoon in a sidewalk cafe.
                </p>
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </CardContent>
    </Card>
  );
};

export default European;

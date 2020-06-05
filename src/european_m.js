import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import image from "./images/european_sm.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textexpand: {
    marginLeft: "auto",
  },
  textexpandopen: {
    marginLeft: "auto",
  },
  right: {
    backgroundColor: "#e1f5fe",
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
  cardImage: {
    height: "230px",
    width: "230px",
    backgroundColor: "white",
    display: "block",
  },
  cardcontent: {
    backgroundColor: "#e1f5fe",
    fontFamily: "roboto",
    fontSize: "20px",
  },
  image: {
    position: "relative",
    left: "15px",
    top: "15px",
    width: "200px",
    height: "200px",
  },
  credits: {
    color: "#133B4D",
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20px",
  },
  typography: {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20px",
    paddingLeft: "40px",
    paddingRight: "40px",
    textAlign: "left",
  },
  projectTitle: {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "28px",
  },
}));

const European = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardContent>
        <div className={classes.projectTitle}>EUROPEAN CAFES</div>
      </CardContent>
      <CardContent>
        <List>
          <Grid container className={classes.root} spacing={0}>
            <ListItem>
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
            </ListItem>
            <ListItem>
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
            </ListItem>
            <ListItem>
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
            </ListItem>
          </Grid>
        </List>

        <List>
          <Grid container spacing={0}>
            <ListItem>
              <Grid item sm={6}>
                <Paper className={classes.cardImage} elevation={5}>
                  <img
                    src={image}
                    className={classes.image}
                    alt="European Cafe"
                  />
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.right}>
                  A documentary series with 13 episodes exploring the history
                  and culture of the most enchanting European cafes.
                </Paper>
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </CardContent>

      <CardActions disableSpacing>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          className={clsx(classes.textexpand, {
            [classes.textexpandopen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <div>{expanded ? "Read Less" : "Read More"}</div>
        </Button>
      </CardActions>
      <CardContent></CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.cardcontent}>
          <p className={classes.typography}>
            Series about the famous coffee houses in Europe 'my favourite cafes
            are almost as dear to me as the places I have lived.' Cafes are the
            window onto the world - you see ordinary people, locals as well as
            visitors coming and going taking timouts between work and home.
          </p>
          <p className={classes.typography}>
            When I go back to certain cities, 'I head for my favourite cafes'
            Georgio Locatelli observes their food and wine while discovering
            their history and culture. In Paris there is the romantic ideal to
            while away the afternoon in a sidewalk cafe.
          </p>
        </CardContent>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
};

export default European;

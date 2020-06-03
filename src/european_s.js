import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import image from "./images/european_sm.png";

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
  cardImage: {
    height: "230px",
    width: "230px",
    backgroundColor: "white",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    width: "200px",
    height: "200px",
    position: "relative",
    top: "15px",
    left: "15px",
  },
  cardcontent: {
    backgroundColor: "#e1f5fe",
  },
  credits: {
    fontFamily: "roboto",
    fontSize: "14px",
    color: "#133B4D",
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
        <Typography variant="h6">EUROPEAN CAFES</Typography>
      </CardContent>
      <CardContent>
        <Grid container className={classes.root} spacing={0}>
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
      </CardContent>
      <Paper className={classes.cardImage} elevation={5}>
        <img src={image} className={classes.image} alt="European Cafe" />
      </Paper>
      <CardContent>
        <Typography>
          A documentary series with 13 episodes exploring the history and
          culture of the most enchanting European cafes.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          size="small"
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
          <Typography paragraph>
            Series about the famous coffee houses in Europe 'my favourite cafes
            are almost as dear to me as the places I have lived.' Cafes are the
            window onto the world - you see ordinary people, locals as well as
            visitors coming and going taking timouts between work and home.
          </Typography>
          <Typography paragraph>
            When I go back to certain cities, 'I head for my favourite cafes'
            Georgio Locatelli observes their food and wine while discovering
            their history and culture. In Paris there is the romantic ideal to
            while away the afternoon in a sidewalk cafe.
          </Typography>
        </CardContent>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
};

export default European;

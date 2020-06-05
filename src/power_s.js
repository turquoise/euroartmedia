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
import image from "./images/power_sm.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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
    left: "0px",
  },
  cardcontent: {
    backgroundColor: "#e1f5fe",
    textAlign: "left",
  },
  credits: {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "14px",
    color: "#133B4D",
  },
  typography: {
    fontFamily: "Roboto, Sans-Serif",
    textAlign: "left",
  },
}));

const Power = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">THE IMPOTENCE OF POWER</Typography>
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
                  Script
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} className={classes.credits}>
                  Keith Lindsay
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item xs={6}>
                <Paper elevation={0} className={classes.credits}>
                  Original book written by
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} className={classes.credits}>
                  Anthony Rawstron
                </Paper>
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </CardContent>
      <Paper className={classes.cardImage} elevation={5}>
        <img src={image} className={classes.image} alt="Large house" />
      </Paper>
      <CardContent className={classes.typography}>
        <p>
          In business and in politics a person's power is thought to broaden
          with every upward step they take, but in reality they become more
          dependent on others. A mini series about a powerful family.
        </p>
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
            In business and in politics a person's power is thought to broaden
            with every upward step they take, but in reality they become more
            dependent on others. A film about the rising power and downfall of a
            prominent family.
          </Typography>
          <Typography paragraph>
            Played out against gleaming marinas and the elegant Villa Picard to
            the seamier backstreets of Toulon and Marseilles. The Picards' story
            is seen through the eyes of Marcello, an outsider, the family lawyer
            who witnesses their downfall.
          </Typography>
        </CardContent>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
};

export default Power;

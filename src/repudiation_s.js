import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import image from "./images/repudiation_bw_sm.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardactions: {
    position: "relative",
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
  media: {
    position: "relative",
    width: "320px",
    height: "240px",
    left: "50%",
    marginLeft: "-160px",
  },
  credits: {
    fontFamily: "roboto",
    fontSize: "14px",
    color: "#133B4D",
    textAlign: "left",
  },
  typography: {
    fontFamily: "roboto",
    position: "relative",
    top: "-30px",
    textAlign: "left",
  },
}));

const Repudiation = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">REPUDIATION</Typography>
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
                  Trisha Clarke and Primavera Boman
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item xs={6}>
                <Paper elevation={0} className={classes.credits}>
                  Director
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} className={classes.credits}>
                  Waris Hussein
                </Paper>
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </CardContent>
      <CardContent>
        <Paper className={classes.cardImage} elevation={5}>
          <img src={image} className={classes.image} alt="Hilde Holger" />
        </Paper>
      </CardContent>
      <CardContent>
        <CardMedia className={classes.media} title="repudiation trailer">
          <div className="video-responsive">
            <iframe
              width="320"
              height="240"
              title="Hilde Holger"
              src="https://www.youtube.com/embed/2HaUJC5ZGlU"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </CardMedia>
      </CardContent>

      <CardContent className={classes.typography}>
        <p>
          A film about Hilde Holger (1905 - 2001) who was one of the most
          influential and original dancers of the 20th Century.
        </p>
      </CardContent>

      <CardActions disableSpacing className={classes.cardactions}>
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
            A film about the most influential and innovative dancer of the 20th
            Century, Hilde Holger (1905 - 2001) who transformed modern dance
            forever. This is a film about dance itself through the artistically
            and politically tumultuous 20th and 21st Centuries.
          </Typography>
          <Typography paragraph>
            We explore Hilde's life using dramatized moments in Nazi occupied
            Vienna, 'scandalous' dances on Mumbai's Juhu beach, and her dance
            school for all ages and abilities. This pioneering work now
            continues worldwide by students Royston Maldoom OBE, Carl Campbell
            and Wolfgang Stange.
          </Typography>
        </CardContent>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
};

export default Repudiation;

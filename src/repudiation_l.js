import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/repudiation_bw_sm.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  video: {
    backgroundColor: "gray",
    width: "320px",
    height: "240px",
    marginLeft: "auto",
    marginRight: "auto",
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
    height: "1000px",
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
    position: "relative",
    left: "-10px",
    top: "20px",
  },
  cardcontent: {
    backgroundColor: "#e1f5fe",
    fontFamily: "roboto",
    fontSize: "20px",
  },
  media: {
    position: "relative",
    top: "-200px",
    left: "50%",
    marginLeft: "-320px",
    width: "640px",
    height: "360px",
  },
  image: {
    position: "relative",
    left: "15px",
    top: "15px",
    height: "200px",
    width: "200px",
  },
  credits: {
    color: "#133B4D",
    fontFamily: "roboto",
    fontSize: "20px",
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
  typography: {
    fontFamily: "roboto",
    fontSize: "20x",
  },
  gridleft: {
    paddingLeft: "5x",
    paddingRight: "10px",
    marginTop: "-40px",
  },
  gridright: {
    paddingLeft: "20px",
    paddingRight: "5px",
    borderLeft: "solid",
    borderColor: "lightblue",
    borderWidth: "4px",
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
}));

const Repudiation = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">REPUDIATION</Typography>
      </CardContent>
      <CardContent>
        <Grid container className={classes.root} spacing={0}>
          <Grid item sm={3}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Producer
            </Paper>
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Trisha Clarke and Primavera Boman
            </Paper>
          </Grid>
          <Grid item sm={3}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Director
            </Paper>
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Waris Hussein
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Paper className={classes.cardImage} elevation={5}>
          <img src={image} className={classes.image} alt="Hilde Holger" />
        </Paper>
      </CardContent>
      <CardContent>
        <List className={classes.list}>
          <Grid container spacing={3} className={classes.grid}>
            <ListItem>
              <Grid item sm={6} className={classes.gridleft}>
                <p className={classes.typography}>
                  A film about the most influential and innovative dancer of the
                  20th Century, Hilde Holger (1905 - 2001) who transformed
                  modern dance forever. This is a film about dance itself
                  through the artistically and politically tumultuous 20th and
                  21st Centuries.
                </p>
              </Grid>
              <Grid item sm={6} className={classes.gridright}>
                <p className={classes.typography}>
                  We explore Hilde's life using dramatized moments in Nazi
                  occupied Vienna, 'scandalous' dances on Mumbai's Juhu beach,
                  and her dance school for all ages and abilities. This
                  pioneering work now continues worldwide by students Royston
                  Maldoom OBE, Carl Campbell and Wolfgang Stange.
                </p>
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </CardContent>
      <CardContent>
        <CardMedia className={classes.media} title="repudiation trailer">
          <div class="video-responsive">
            <iframe
              width="640"
              height="360"
              title="Hilde Holger"
              src="https://www.youtube.com/embed/2HaUJC5ZGlU"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </CardMedia>
      </CardContent>
    </Card>
  );
};

export default Repudiation;

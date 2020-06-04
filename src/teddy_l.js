import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/teddy_sm.png";
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
    height: "900px",
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
    marginTop: "50px",
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
  image: {
    position: "relative",
    left: "0px",
    top: "15px",
    height: "200px",
    width: "200px",
  },
  credits: {
    color: "#133B4D",
    fontFamily: "roboto",
    fontSize: "20px",
  },
  list: {
    width: "700px",
    position: "relative",
    top: "-240px",
    left: "240px",
  },
  typography: {
    fontFamily: "roboto",
    fontSize: "20x",
  },
  grid: {
    backgroundColor: "#e1f5fe",
    paddingLeft: "10px",
    paddingRight: "10px",
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
    borderColor: "lightblue",
    borderWidth: "4px",
  },
  projectTitle: {
    fontFamily: "Roboto",
    fontSize: "28px",
  },
}));

const Teddy = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.projectTitle}>TEDDY TALES</div>
      </CardContent>

      <CardContent>
        <Grid container className={classes.root} spacing={0}>
          <Grid item sm={3}></Grid>
          <Grid item xs={4}>
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
          <Grid item sm={3}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Co-Producer and Editor
            </Paper>
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Paddy Payne
            </Paper>
          </Grid>
          <Grid item sm={3}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Animation
            </Paper>
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Cadi Catlow
            </Paper>
          </Grid>
        </Grid>
      </CardContent>

      <CardContent>
        <Paper className={classes.cardImage} elevation={5}>
          <img src={image} className={classes.image} alt="Teddy Bears" />
        </Paper>
      </CardContent>

      <CardContent>
        <List className={classes.list}>
          <Grid container spacing={3} className={classes.grid}>
            <ListItem>
              <Grid item sm={6} className={classes.gridleft}>
                <p className={classes.typography}>
                  Since the nineteen hundreds, teddies have had inside knowledge
                  about every single historical event. Teddy Tales is a series
                  of six stop frame animations featuring some of the most famous
                  teddies that have walked in the woods.
                </p>
              </Grid>
              <Grid item sm={6} className={classes.gridright}>
                <p className={classes.typography}>
                  Every tale will tell a little slice of history as witnessed by
                  each of these much loved teddy bears. These iconic teddies are
                  in one of the world's greatest private collections. The
                  teddies will tell their stories through their own eyes.
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
              title="Teddy Tales"
              src="https://www.youtube.com/embed/8P0iM6ZYO_o"
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

export default Teddy;

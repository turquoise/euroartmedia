import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/repudiation_bw_sm.png";
import image2 from "./images/repudiation_right_bw.png";
import Container from "@material-ui/core/Container";
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
  card: {
    backgroundColor: "white",
    color: "black",
    height: "1050px",
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
  media: {
    position: "relative",
    height: "360px",
    width: "640px",
    left: "50%",
    marginLeft: "-320px",
  },
  image: {
    position: "relative",
    left: "0px",
    top: "15px",
    height: "200px",
    width: "200px",
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
  typography: {
    fontFamily: "Roboto",
    fontSize: "20x",
    textAlign: "left",
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
}));

const Repudiation = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <p className={classes.title}>REPUDIATION</p>
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
                        Trisha Clarke and Primavera Boman
                      </Paper>
                    </Grid>
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
                  </Grid>
                </Container>
              </Grid>
              <Grid item lg={6}>
                <Container>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <p className={classes.quotetext}>
                        A film about Hilde Holger (1905 - 2001) who was one of
                        the most influential and original dancers of the 20th
                        Century.
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
              <img src={image} className={classes.image} alt="Hilde Holger" />
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper elevation={0} className={classes.paperleft}>
              <p className={classes.typography}>
                A film about the most influential and innovative dancer of the
                20th Century, Hilde Holger (1905 - 2001) who transformed modern
                dance forever. This is a film about dance itself through the
                artistically and politically tumultuous 20th and 21st Centuries.
              </p>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper elevation={0} className={classes.paperright}>
              <p className={classes.typography}>
                We explore Hilde's life using dramatized moments in Nazi
                occupied Vienna, 'scandalous' dances on Mumbai's Juhu beach, and
                her dance school for all ages and abilities. This pioneering
                work now continues worldwide by students Royston Maldoom OBE,
                Carl Campbell and Wolfgang Stange.
              </p>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper className={classes.cardImage2} elevation={5}>
              <img
                src={image2}
                className={classes.image2}
                alt="Hilde Holger dancing"
              />
            </Paper>
          </Grid>
        </Grid>
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

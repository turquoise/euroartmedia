import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/teddy_sm.png";
import image2 from "./images/teddy_right.png";
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
    height: "1100px",
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
    left: "55px",
  },
  cardcontent: {
    backgroundColor: "#e1f5fe",
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20px",
  },
  media: {
    position: "relative",
    height: "360px",
    width: "640px",
    left: "50%",
    marginLeft: "-320px",
  },
  right: {
    backgroundColor: "#e1f5fe",
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
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20px",
  },
  list: {
    width: "700px",
    position: "relative",
    top: "-240px",
    left: "240px",
  },
  typography: {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20x",
    textAlign: "left",
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
  title: {
    fontFamily: "Roboto, Sans-Serif",
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
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "20px",
    paddingTop: "0px",
    paddingLeft: "50px",
    paddingRight: "40px",
    color: "#133B4D",
    lineHeight: "1.5",
    marginTop: "-10px",
  },
}));

const Teddy = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <p className={classes.title}>TEDDY TALES</p>
      </CardContent>

      <CardContent>
        <List>
          <Grid container spacing={0}>
            <ListItem>
              <Grid item xs={6}>
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
                        Co-Producer and Editor
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={0} className={classes.credits}>
                        Paddy Payne
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={0} className={classes.credits}>
                        Animation
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={0} className={classes.credits}>
                        Cadi Catlow
                      </Paper>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item xs={6}>
                <Container>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <p className={classes.quotetext}>
                        A childrens' stop frame animation series with historical
                        teddy bears from a private collection. The teddies all
                        tell their own unique stories about their owners' lives.
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
              <img src={image} className={classes.image} alt="Teddy Bears" />
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper elevation={0} className={classes.paperleft}>
              <p className={classes.typography}>
                Since the nineteen hundreds, teddies have had inside knowledge
                about every single historical event. Teddy Tales is a series of
                six stop frame animations featuring some of the most famous
                teddies that have walked in the woods.
              </p>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper elevation={0} className={classes.paperright}>
              <p className={classes.typography}>
                Every tale will tell a little slice of history as witnessed by
                each of these much loved teddy bears. These iconic teddies are
                in one of the world's greatest private collections. The teddies
                will tell their stories through their own eyes.
              </p>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper className={classes.cardImage2} elevation={5}>
              <img src={image2} className={classes.image2} alt="Teddy Bear" />
            </Paper>
          </Grid>
        </Grid>
      </CardContent>

      <CardContent>
        <CardMedia className={classes.media} title="teddy tales trailer">
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

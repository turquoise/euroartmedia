import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/power_sm.png";
import image2 from "./images/power_right.png";
import Container from "@material-ui/core/Container";
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
    height: "640px",
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
  cardcontent: {
    backgroundColor: "#e1f5fe",
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
  list: {
    width: "700px",
    position: "relative",
    top: "-240px",
    left: "240px",
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

const Power = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <p className={classes.title}>THE IMPOTENCE OF POWER</p>
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
                        Script
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={0} className={classes.credits}>
                        Keith Lindsay
                      </Paper>
                    </Grid>
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
                  </Grid>
                </Container>
              </Grid>
              <Grid item lg={6}>
                <Container>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <p className={classes.quotetext}>
                        A mini series about the rising power and downfall of a
                        powerful family.
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
              <img src={image} className={classes.image} alt="Large house" />
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper elevation={0} className={classes.paperleft}>
              <p className={classes.typography}>
                In business and in politics a person's power is thought to
                broaden with every upward step they take, but in reality they
                become more dependent on others. A film about the rising power
                and downfall of a prominent family.
              </p>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper elevation={0} className={classes.paperright}>
              <p className={classes.typography}>
                Played out against gleaming marinas and the elegant Villa Picard
                to the seamier backstreets of Toulon and Marseilles. The
                Picards' story is seen through the eyes of Marcello, an
                outsider, the family lawyer who witnesses their downfall.
              </p>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper className={classes.cardImage2} elevation={5}>
              <img
                src={image2}
                className={classes.image2}
                alt="Graffiti with stairs"
              />
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Power;

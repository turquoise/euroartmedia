import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/ishallbe_bw_s.png";
import image2 from "./images/ishallbe_right_bw.png";

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
  card: {
    backgroundColor: "white",
    color: "black",
    height: "640px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  mainHeading: {
    textAlign: "center",
    height: "30px",
  },
  heading: {
    textAlign: "center",
    height: "30px",
  },
  cardImage: {
    height: "230px",
    width: "230px",
    backgroundColor: "white",
    position: "relative",
  },
  cardImage2: {
    height: "230px",
    width: "230px",
    backgroundColor: "white",
    position: "relative",
    left: "55px",
  },
  button: {
    backgroundColor: "cd5c5c",
    color: "white",
    fontFamily: "roboto",
    fontSize: "40px",
  },
  cardcontent: {
    backgroundColor: "#e1f5fe",
    fontFamily: "roboto",
    fontSize: "20px",
  },
  gridtext: {
    fontFamily: "roboto",
    fontSize: "14px",
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
    left: "15px",
    top: "15px",
    width: "200px",
    height: "200px",
  },
  image2: {
    position: "relative",
    left: "15px",
    top: "15px",
    width: "200px",
    height: "200px",
  },
  credits: {
    color: "#133B4D",
    fontFamily: "roboto",
    fontSize: "20px",
  },
  grid: {
    backgroundColor: "#e1f5fe",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  list: {
    width: "700px",
    position: "relative",
    top: "-420px",
    left: "250px",
  },
  typography: {
    fontFamily: "roboto",
    fontSize: "20x",
  },
  quotetext: {
    fontFamily: "Krona One",
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
    width: "355px",
    height: "240px",
    borderRight: "3px solid lightblue",
    left: "-58px",
  },
  paperright: {
    position: "relative",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "10px",
    backgroundColor: "#e1f5fe",
    width: "355px",
    height: "240px",
    left: "-10px",
  },
}));

const Ishallbe = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <p className={classes.title}>I SHALL BE</p>
      </CardContent>

      <CardContent>
        <Grid container spacing={0}>
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
                    Director
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={0} className={classes.credits}>
                    Keith Farrell
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={0} className={classes.credits}>
                    Script
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={0} className={classes.credits}>
                    Valerie Appel and Sarah Olley
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
                    A film about Regina Jonas, who overcame extraordinary
                    difficulties and became the first female rabbi in 1936.
                  </p>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </CardContent>

      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={3}>
            <Paper className={classes.cardImage} elevation={5}>
              <img src={image} className={classes.image} alt="Regina Jonas" />
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper elevation={0} className={classes.paperleft}>
              <p className={classes.typography}>
                A film about triumph in the face of impossible odds. It is a
                story about family, community, love, hope and determination. It
                is the story of Regina Jonas, who overcame prejudice and
                achieved far more than anyone expected by becoming the first
                female rabbi in 1936.
              </p>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper elevation={0} className={classes.paperright}>
              <p className={classes.typography}>
                The film follows Regina's struggle to be ordained as a rabbi
                during the mid 1930s. Her quest to be ordained is set against
                the context of the rise of the Nazi party. Despite the rise of
                Nazism in Germany, Regina Jonas managed to survive until 1944
                when she was taken to Auschwitz and she died there.
              </p>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper className={classes.cardImage2} elevation={5}>
              <img
                src={image2}
                className={classes.image2}
                alt="Regina Jonas holding a book"
              />
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Ishallbe;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import image from "./images/ishallbe_bw_s.png";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: "white",
    color: "black",
    height: "580px",
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
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20px",
  },
  image: {
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
  grid: {
    backgroundColor: "#e1f5fe",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  list: {
    width: "700px",
    position: "relative",
    top: "-240px",
    left: "240px",
  },
  typography1: {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20x",
    position: "relative",
    top: "-18px",
  },
  typography2: {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20x",
  },
  gridleft: {
    paddingLeft: "5x",
    paddingRight: "10px",
  },
  gridright: {
    paddingLeft: "20px",
    paddingRight: "5px",
    borderLeft: "solid",
    borderColor: "lightblue",
    borderWidth: "4px",
  },
  projectTitle: {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "28px",
  },
  quotetext: {
    fontFamily: "KronaOne, Sans-Serif",
    fontSize: "16px",
    color: "#133B4D",
    lineHeight: "1.5",
    marginTop: "-10px",
  },
}));

const Ishallbe = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.projectTitle}>I SHALL BE</div>
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
            </ListItem>
          </Grid>
        </List>
      </CardContent>
      <CardContent>
        <Paper className={classes.cardImage} elevation={5}>
          <img src={image} className={classes.image} alt="Regina Jonas" />
        </Paper>
      </CardContent>

      <CardContent>
        <List className={classes.list}>
          <Grid container spacing={3} className={classes.grid}>
            <ListItem>
              <Grid item sm={6} className={classes.gridleft}>
                <p className={classes.typography1}>
                  A film about triumph in the face of impossible odds. It is a
                  story about family, community, love, hope and determination.
                  It is the story of Regina Jonas, who overcame prejudice and
                  achieved far more than anyone expected by becoming the first
                  female rabbi in 1936.
                </p>
              </Grid>
              <Grid item sm={6} className={classes.gridright}>
                <p className={classes.typography2}>
                  The film follows Regina's struggle to be ordained as a rabbi
                  during the mid 1930s. Her quest to be ordained is set against
                  the context of the rise of the Nazi party. Despite the rise of
                  Nazism in Germany, Regina Jonas managed to survive until 1944
                  when she was taken to Auschwitz and she died there.
                </p>
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </CardContent>
    </Card>
  );
};

export default Ishallbe;

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import image from "./images/ishallbe_bw_s.png";

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
  },
  button: {
    backgroundColor: "cd5c5c",
    color: "white",
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "40px",
  },
  cardcontent: {
    backgroundColor: "#e1f5fe",
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20px",
  },
  gridtext: {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "14px",
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
    left: "15px",
    top: "15px",
    width: "200px",
    height: "200px",
  },
  credits: {
    color: "#133B4D",
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20px",
  },
  typography: {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20px",
    paddingLeft: "40px",
    paddingRight: "40px",
    textAlign: "left",
  },
  projectTitle: {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "28px",
  },
}));

const Ishallbe = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardContent>
        <div className={classes.projectTitle}>I SHALL BE</div>
      </CardContent>

      <CardContent>
        <List>
          <Grid container spacing={0}>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Producer
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Trisha Clarke
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Line Producer
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Kate Dain
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Director
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Keith Farrell
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Script
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Valerie Appel and Sarah Olley
                </Paper>
              </Grid>
            </ListItem>
          </Grid>
        </List>

        <List>
          <Grid container spacing={0}>
            <ListItem>
              <Grid item sm={6}>
                <Paper className={classes.cardImage} elevation={5}>
                  <img
                    src={image}
                    className={classes.image}
                    alt="Regina Jonas"
                  />
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.right}>
                  A film about Regina Jonas, who overcame extraordinary
                  difficulties and became the first female rabbi in 1936.
                </Paper>
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </CardContent>

      <CardActions disableSpacing>
        <Button
          color="primary"
          variant="contained"
          size="medium"
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
          <p className={classes.typography}>
            A film about triumph in the face of impossible odds. It is a story
            about family, community, love, hope and determination. It is the
            story of Regina Jonas, who overcame prejudice and achieved far more
            than anyone expected by becoming the first female rabbi in 1936.
          </p>
          <p className={classes.typography}>
            The film follows Regina's struggle to be ordained as a rabbi during
            the mid 1930s. Her quest to be ordained is set against the context
            of the rise of the Nazi party. Despite the rise of Nazism in
            Germany, Regina Jonas managed to survive until 1944 when she was
            taken to Auschwitz and she died there.
          </p>
        </CardContent>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
};

export default Ishallbe;

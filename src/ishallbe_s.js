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
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    width: "200px",
    height: "200px",
    position: "relative",
    top: "15px",
    left: "15px",
  },
  button: {
    backgroundColor: "cd5c5c",
    color: "white",
  },
  cardcontent: {
    backgroundColor: "#e1f5fe",
  },
  credits: {
    fontFamily: "roboto",
    fontSize: "14px",
    color: "#133B4D",
  },
  typography: {
    fontFamily: "roboto",
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
        <Typography variant="h6">I SHALL BE</Typography>
      </CardContent>
      <CardContent>
        <Grid container className={classes.root} spacing={0}>
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
      </CardContent>
      <Paper className={classes.cardImage} elevation={5}>
        <img src={image} className={classes.image} alt="Regina Jonas" />
      </Paper>
      <CardContent className={classes.typography}>
        <p>
          A film about Regina Jonas, who overcame extraordinary difficulties and
          became the first female rabbi in 1936.
        </p>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          color="primary"
          variant="contained"
          size="small"
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
            A film about triumph in the face of impossible odds. It is a story
            about family, community, love, hope and determination. It is the
            story of Regina Jonas, who overcame prejudice and achieved far more
            than anyone expected by becoming the first female rabbi in 1936.
          </Typography>
          <Typography paragraph>
            The film follows Regina's struggle to be ordained as a rabbi during
            the mid 1930s. Her quest to be ordained is set against the context
            of the rise of the Nazi party. Despite the rise of Nazism in
            Germany, Regina Jonas managed to survive until 1944 when she was
            taken to Auschwitz and she died there.
          </Typography>
        </CardContent>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
};

export default Ishallbe;

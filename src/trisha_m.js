import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import image from "./images/trisha_sm.png";

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
    width: "230px",
    height: "300px",
    backgroundColor: "white",
    display: "block",
  },
  image: {
    position: "relative",
    left: "15px",
    top: "15px",
    width: "200px",
    height: "270px",
  },
  cardcontent: {
    backgroundColor: "white",
    fontFamily: "roboto",
    fontSize: "20px",
  },
  right: {
    backgroundColor: "white",
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
    fontSize: "20px",
    paddingLeft: "40px",
    paddingRight: "40px",
  },
}));

const Trisha = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">TRISHA CLARKE</Typography>
        <Typography variant="h6">Producer</Typography>
      </CardContent>
      <CardContent>
        <List>
          <Grid container spacing={0}>
            <ListItem>
              <Grid item sm={6}>
                <Paper className={classes.cardImage} elevation={5}>
                  <img
                    src={image}
                    className={classes.image}
                    alt="Trisha Clarke"
                  />
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.right}>
                  Trisha Clarke founded EuroArtMedia in order to produce
                  documentaries and mini series that are filmed internationally.
                </Paper>
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </CardContent>

      <CardActions disableSpacing>
        <Button
          size="medium"
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
          <p className={classes.typography}>
            After leaving school, Trisha Clarke began dancing with The Royal
            Ballet Company and then become an actress at Studio 68. Trisha has
            undertaken acting roles in film, television and theatre. After
            obtaining a BA in Fine Art at Central St Martin's she went on to
            study on a BBC News Course in Television Journalism.
          </p>
          <p className={classes.typography}>
            Trisha studied for a Post graduate MA in Media Production at the
            University of Strathclyde. Whilst there she also undertook a Script
            editing course run by Scottish Screen in Glasgow. Continuing with
            her work as a script editor she trained as a script mentor at FAMU
            in Prague. Trisha has enjoyed work as a director, directing mainly
            documentary films which include: 'Responses'; 'Markus Wolfe - In
            From The Cold' and 'The Vital Link'.
          </p>
        </CardContent>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
};

export default Trisha;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import contactimage from "./images/contact_xl.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  contact: {
    color: "black",
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20px",
  },
  contactphoto: {
    position: "relative",
    width: "100%",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Paper elevation={0}>
          <img
            src={contactimage}
            alt="Bath Canal"
            className={classes.contactphoto}
          />
        </Paper>
      </CardContent>
      <CardContent>
        <List>
          <Grid container className={classes.root} spacing={0}>
            <ListItem>
              <Grid item lg={2}></Grid>
              <Grid item lg={10}>
                <Paper elevation={0} className={classes.contact}>
                  EuroArt Media Ltd
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item lg={2}></Grid>
              <Grid item lg={10}>
                <Paper elevation={0} className={classes.contact}>
                  3 Bridge Lock Mews
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item lg={2}></Grid>
              <Grid item lg={10}>
                <Paper elevation={0} className={classes.contact}>
                  Pultney Road
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item lg={2}></Grid>
              <Grid item lg={10}>
                <Paper elevation={0} className={classes.contact}>
                  Bath, BA24DG, UK
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item lg={2}></Grid>
              <Grid item sm={4}>
                <Paper elevation={0} className={classes.contact}>
                  Email
                </Paper>
              </Grid>
              <Grid item lg={4}>
                <Paper elevation={0} className={classes.contact}>
                  euroart1@btinternet.com
                </Paper>
              </Grid>
              <Grid item lg={2}></Grid>
            </ListItem>
            <ListItem>
              <Grid item lg={2}></Grid>
              <Grid item lg={4}>
                <Paper elevation={0} className={classes.contact}>
                  Phone
                </Paper>
              </Grid>
              <Grid item lg={4}>
                <Paper elevation={0} className={classes.contact}>
                  + 44 12255462701
                </Paper>
              </Grid>
              <Grid item lg={2}></Grid>
            </ListItem>
            <ListItem>
              <Grid item lg={2}></Grid>
              <Grid item lg={4}>
                <Paper elevation={0} className={classes.contact}>
                  Mobile
                </Paper>
              </Grid>
              <Grid item lg={4}>
                <Paper elevation={0} className={classes.contact}>
                  + 44 7768876874
                </Paper>
              </Grid>
              <Grid item lg={2}></Grid>
            </ListItem>
          </Grid>
        </List>
      </CardContent>
    </Card>
  );
};

export default Contact;

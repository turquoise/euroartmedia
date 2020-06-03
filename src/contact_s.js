import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import contactimage from "./images/contact_canal_s.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  contact: {
    color: "black",
    fontFamily: "roboto",
    fontSize: "16px",
  },
  contactphoto: {
    position: "relative",
    width: "auto",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Paper className={classes.contactphoto} elevation={0}>
          <img src={contactimage} alt="Bath Canal" />
        </Paper>
      </CardContent>
      <CardContent>
        <List>
          <Grid container className={classes.root} spacing={0}>
            <ListItem>
              <Paper elevation={0} className={classes.contact}>
                EuroArt Media Ltd
              </Paper>
            </ListItem>
            <ListItem>
              <Paper elevation={0} className={classes.contact}>
                3 Bridge Lock Mews
              </Paper>
            </ListItem>
            <ListItem>
              <Paper elevation={0} className={classes.contact}>
                Pultney Road
              </Paper>
            </ListItem>
            <ListItem>
              <Paper elevation={0} className={classes.contact}>
                Bath, BA24DG, UK
              </Paper>
            </ListItem>
            <ListItem>
              <Grid item xs={4}>
                <Paper elevation={0} className={classes.contact}>
                  Email
                </Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper elevation={0} className={classes.contact}>
                  euroart1@btinternet.com
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item xs={4}>
                <Paper elevation={0} className={classes.contact}>
                  Phone
                </Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper elevation={0} className={classes.contact}>
                  + 44 12255462701
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item xs={4}>
                <Paper elevation={0} className={classes.contact}>
                  Mobile
                </Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper elevation={0} className={classes.contact}>
                  + 44 7768876874
                </Paper>
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </CardContent>
    </Card>
  );
};

export default Contact;

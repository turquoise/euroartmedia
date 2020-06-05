import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  listitem: {
    marginTop: "0px",
  },
  credits: {
    color: "#133B4D",
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20px",
    marginTop: "0px",
  },
}));

const Credits = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <List>
          <Grid container className={classes.root} spacing={0}>
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
                  Co-Producers
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Primavera Boman (Repudiation), David Farrell (I Shall Be -
                  Ireland), Paddy Payne (Teddy Tales)
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Producer's Assistant
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Natasha Montefiore
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Directors
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Keith Farrell (I Shall Be), Waris Hussein (Repudiation)
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Stop motion Animation
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Cadi Catlow (Teddy Tales)
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
                  Kate Daines
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Scriptwriters
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Valeria Appell and Sarah Olley (I Shall Be), Keith Lindsay
                  (The Impotence of Power), Larry Barker (Teddy Tales)
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Cameraman
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Colm Whelan
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Gaffer (working with Colm)
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Simon Magee
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Editor
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Paddy Payne
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Make-up
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Lisa Caldognetto, Patsy Giles (Ireland)
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Music
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Rick Wentworth, Becky Wentworth
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  IT Director
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Chris Haughton-Brown
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Website Designer
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Monica Gosschalk
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Wardrobe Designer
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Joan Bergin
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Wardrobe Supervisor
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Mary Singh
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Dresser
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Flavia Piniera
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Location Manager
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Colin Farrell (Ireland), Roman Kuntz (Germany), David
                  Piechaczek (South of France)
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Location Fixer
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Guatam Pandey (India)
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Translation Manager
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Ruswel Piniero
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Translator
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Eric Collins (English / French), Thomas Kampe (English /
                  German)
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Production Accountant
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  James Clarke
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Company Accountants
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Shabana and Mohammed Querschi
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Company Auditor
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Paul Mee at Mazars (Ireland)
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Production Assistants
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Yaris Udden, Nicholas Singh, James Lovick, Verity Lovick
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Storyboards
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Mathew Meadows
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Audio Producer
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Carly Butler
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Sound - post production audio
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Ed Tristram
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Sound Engineer
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Richard Mason
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Set Designer
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  David Bryan
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  On-set props
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Fran Cooper
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Art department - production buyer
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Freya Closs
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Teddy Collector
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Loraine Hitchings
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Nurse
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Jenny Tooley
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Stunts
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Elaine Ford
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Casting
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Joyce Nettles
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  P.A. to Acting stars
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Mary Mullen
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Audio Producer
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Carly Butler (Ireland)
                </Paper>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  Distributor
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper elevation={0} className={classes.credits}>
                  David Cornwall, Scorpion TV
                </Paper>
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </CardContent>
    </Card>
  );
};

export default Credits;

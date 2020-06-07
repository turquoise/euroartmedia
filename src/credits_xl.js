import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
    textAlign: "left",
  },
  link: {
    color: "black",
  },
}));

const Credits = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Grid container className={classes.root} spacing={0}>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Producer
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Trisha Clarke
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Co-Producers
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Primavera Boman (Repudiation), David Farrell (I Shall Be -
              Ireland), Paddy Payne (Teddy Tales)
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Producer's Assistant
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Natasha Montefiore
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Directors
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              <a
                href="https://www.imdb.com/name/nm1686849/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Keith Farrell
              </a>{" "}
              (I Shall Be), {""}
              <a
                href="https://www.imdb.com/name/nm0404014/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Waris Hussein
              </a>{" "}
              (Repudiation)
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Stop motion Animation
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              <a
                href="https://www.cadicatlow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Cadi Catlow
              </a>{" "}
              (Teddy Tales)
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Line Producer
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Kate Daines
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Scriptwriters
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Valeria Appell and {""}
              <a
                href="http://www.scriptsurgery.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Sarah Olley
              </a>{" "}
              (I Shall Be),
              <a
                href="http://www.futermanrose.co.uk/lindsay.html"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Keith Lindsay
              </a>{" "}
              (The Impotence of Power),
              <a
                href="https://www.larry-barker.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Larry Barker
              </a>{" "}
              (Teddy Tales)
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Cameraman
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              <a
                href="https://www.imdb.com/name/nm1372437/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Colm Whelan
              </a>
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Gaffer (working with Colm)
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Simon Magee
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Editor
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              <a
                href="https://www.thetalentmanager.com/talent/14530/paddy-payne"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Paddy Payne
              </a>
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Make-up
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              <a
                href="https://lisacaldognetto.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Lisa Caldognetto
              </a>{" "}
              , Patsy Giles (Ireland)
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Music
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Rick Wentworth, Becky Wentworth
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              IT Director
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Chris Haughton-Brown
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Website Designer
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              <a
                href="https://monicagosschalk.com/profile"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Monica Gosschalk
              </a>
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Wardrobe Designer
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Joan Bergin
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Wardrobe Supervisor
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Mary Singh
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Dresser
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Flavia Piniera
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Location Manager
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Colin Farrell (Ireland), Roman Kuntz (Germany), David Piechaczek
              (South of France)
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Location Fixer
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Guatam Pandey (India)
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Translation Manager
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Ruswel Piniero
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Translator
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Eric Collins (English / French), Thomas Kampe (English / German)
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Production Accountant
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              James Clarke
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Company Accountants
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Shabana and Mohammed Qureschi
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Company Auditor
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Paul Mee at Mazars (Ireland)
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Production Assistants
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Yaris Udden, Nicholas Singh, James Lovick, Verity Lovick
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Storyboards
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              <a
                href="http://meadowsmatthew.wixsite.com/storyboards/about"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Mathew Meadows
              </a>
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Audio Producer
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Carly Butler
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Sound - post production audio
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Ed Tristram
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Sound Engineer
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Richard Mason
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Set Designer
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              <a
                href="https://www.davidbryandesigner.co.uk/about"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                David Bryan
              </a>
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              On-set props
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Fran Cooper
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Art department - production buyer
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Freya Closs
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Teddy Collector
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Loraine Hitchings
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Nurse
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Jenny Tooley
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Stunts
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              <a
                href="https://www.stuntproducer.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Elaine Ford
              </a>
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Casting
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Joyce Nettles
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              P.A. to Acting stars
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Mary Mullen
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Audio Producer
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Carly Butler (Ireland)
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              Distributor
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper elevation={0} className={classes.credits}>
              <a
                href="http://scorpiontv.com"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                David Cornwall, Scorpion TV
              </a>
            </Paper>
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Credits;

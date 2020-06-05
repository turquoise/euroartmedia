import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "1440px",
    position: "relative",
    left: "50%",
    marginLeft: "-720px",
  },
  copyrighticon: {
    fontSize: "20px",
    position: "relative",
    left: "-580px",
  },
  copyrighttext: {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "20px",
    position: "relative",
    top: "-28px",
    left: "-450px",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Paper elevation={0} className={classes.footer}>
          <CopyrightIcon className={classes.copyrighticon} />{" "}
          <div className={classes.copyrighttext}>EuroArt Media Ltd, 2020</div>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default Footer;

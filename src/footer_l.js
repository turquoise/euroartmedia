import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme) => ({
  footer: {
    fontFamily: "Roboto, Sans-Serif",
    fontSize: "12px",
  },
  copyrighticon: {
    fontSize: "22px",
    position: "relative",
    left: "-450px",
  },
  copyrighttext: {
    fontSize: "22px",
    position: "relative",
    top: "-28px",
    left: "-310px",
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

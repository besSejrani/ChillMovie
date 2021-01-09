import React from "react";

import { Link } from "react-router-dom";

import { Breadcrumbs, Link as Linko, Typography, createStyles, makeStyles, Theme } from "@material-ui/core";

const Navigation = ({ movie }) => {
  const classes = useStyles();

  return (
    <div className={classes.navigation}>
      <Breadcrumbs aria-label="breadcrumb">
        <Linko color="inherit" href="/">
          Home
        </Linko>

        <Typography color="textPrimary">{movie}</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Navigation;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navigation: {
      width: "100%",
      height: "50px",
      background: "#353535",
      color: "#fff",
      position: "relative",
      padding: "20px",
      boxSizing: "border-box",
      margin: "0",
      paddingTop: "10px",
    },
  })
);

/* .rmdb-navigation-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

}

.rmdb-navigation-content p {
  font-family: 'Abel', sans-serif;
  font-size: 22px;
  float: left;
  color: #fff;
  padding-right: 10px;
  text-decoration: none;
  margin: 0;
} */

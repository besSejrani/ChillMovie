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
      position: "absolute",
      left: "16.5%",
      top: "8%",
      color: "#fff",
      background: "white",
      textDecoration: "none"
    },
  })
);

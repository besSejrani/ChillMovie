import React from "react";

import { Link } from "react-router-dom";

import { Breadcrumbs, Typography, createStyles, makeStyles, Theme } from "@material-ui/core";

const Navigation = ({ movie }) => {
  const classes = useStyles();

  console.log(movie);
  return (
    <Breadcrumbs component={Link} to="/" aria-label="breadcrumb">
      <Typography className={classes.navigation}>Home / {movie}</Typography>
    </Breadcrumbs>
  );
};

export default Navigation;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navigation: {
      color: "white",
      fontSize: "20px",
      marginBottom: "10px",
    },
  })
);

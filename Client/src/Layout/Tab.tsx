import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden, BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";

const TabNavigation = () => {
  const classes = useStyles();

  return (
    <Hidden only={["sm", "md", "lg", "xl"]}>
      <BottomNavigation className={classes.root}>
        <BottomNavigationAction component={Link} to="/" icon={<HomeIcon color="secondary" />} />

        <BottomNavigationAction
          component={Link}
          to="/search"
          icon={<SearchIcon color="secondary" />}
          style={{ width: "100%" }}
        />
      </BottomNavigation>
    </Hidden>
  );
};

export default TabNavigation;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#212121",
  },
}));

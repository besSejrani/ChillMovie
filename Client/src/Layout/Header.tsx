import React from "react";
import { AppBar, Toolbar, Typography, IconButton, makeStyles, createStyles, Theme } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { toggleSideDrawer } from "../redux/ui/uiAction";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => dispatch(toggleSideDrawer())}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            component={Link}
            to="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            Chill Movie
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "64px",
      position: "relative",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  createStyles,
  Theme,
  Badge,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import QueueIcon from "@material-ui/icons/Queue";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { toggleSideDrawer } from "../redux/ui/uiAction";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Container>
          <Toolbar className={classes.toolbar}>
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

            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} style={{ color: "red", zIndex: 5 }}>
                <QueueIcon style={{ color: "white", zIndex: 10 }} />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
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
      [theme.breakpoints.down("sm")]: {
        height: "55px",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
      padding: 0,
    },
  })
);

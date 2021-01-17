import React from "react";

import { Link } from "react-router-dom";

import {
  makeStyles,
  createStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

import useShareContent from "../../hooks/useShareContent";

const MovieThumb = ({ movieId, clickable, movieName, image }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {clickable ? (
        <Card elevation={3}>
          <CardActionArea>
            <Link
              to={{
                pathname: `/${movieId}`,
                movie: `${movieName}`,
              }}
            >
              <CardMedia className={classes.media} image={image} title="Contemplative Reptile" />
            </Link>
          </CardActionArea>
          <CardContent className={classes.title}>
            <Typography variant="h5">{movieName}</Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button size="small" color="primary" onClick={useShareContent}>
              Share
            </Button>
            <Button size="small" color="primary">
              Watch Later
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Card elevation={3}>
          <CardActionArea>
            <Link
              to={{
                pathname: `/${movieId}`,
                movie: `${movieName}`,
              }}
            >
              <CardMedia className={classes.media} image={image} title="Contemplative Reptile" />
            </Link>
          </CardActionArea>
          <CardContent className={classes.title}>
            <Typography variant="h5">{movieName}</Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Watch Later
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default MovieThumb;

// ========================================================================================================

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 390,
      marginRight: "20px",
      marginBottom: "20px",
    },
    title: {
      height: 40,
    },
    media: {
      height: 520,
    },
    actions: {
      justifyContent: "flex-start",
    },
  })
);

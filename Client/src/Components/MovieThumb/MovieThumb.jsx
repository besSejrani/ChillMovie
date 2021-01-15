import React from "react";

import { Link } from "react-router-dom";

import { makeStyles, createStyles, Card, CardActionArea, CardMedia, CardContent, Container } from "@material-ui/core";

const MovieThumb = ({ movieId, clickable, movieName, image }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {clickable ? (
        <Link
          to={{
            pathname: `/${movieId}`,
            movie: `${movieName}`,
          }}
        >
          <Card elevation={3}>
            <CardActionArea>
              <CardMedia className={classes.media} image={image} title="Contemplative Reptile" />
              <CardContent>{movieName}</CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ) : (
        <Card elevation={3}>
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title="Contemplative Reptile" />
            <CardContent>{movieName}</CardContent>
          </CardActionArea>
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
      width: 300,
      margin: 4,
    },
    media: {
      height: 520,
    },
  })
);

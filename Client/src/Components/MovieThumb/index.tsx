import React from "react";

import { Link } from "react-router-dom";

import { makeStyles, createStyles, Theme, Card, CardActionArea, CardMedia } from "@material-ui/core";

const MovieThumb: React.FC<any> = ({ movieId, clickable, movieName, image }) => {
  const classes = useStyles();

  return (
    <div className={classes.clickable}>
      {clickable ? (
        <Link
          to={{
            pathname: `/${movieId}`,
            //movieName: `${movieName}`,
          }}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={image} title="Contemplative Reptile" />
            </CardActionArea>
          </Card>
        </Link>
      ) : (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title="Contemplative Reptile" />
          </CardActionArea>
        </Card>
      )}
    </div>
  );
};

export default MovieThumb;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      transition: "all 0.3s",
      boxSizing: "border-box",
    },
    clickable: {
      cursor: "pointer",
      "&:hover": {
        opacity: 0.8,
      },
    },
    media: {
      height: 520,
    },
  })
);

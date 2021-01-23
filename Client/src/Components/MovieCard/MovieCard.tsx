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

// Redux
import { useDispatch } from "react-redux";
import { openShareDialog, shareMovie } from "../../redux/ui/uiAction";

const MovieThumb = ({ movieId, clickable, movieName, image }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const shareContent = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "hello",
          url: "https://chillmovie.netlify.app",
          text: "test",
        });
      }
      await dispatch(shareMovie({ id: movieId, movie: movieName }));
      await dispatch(openShareDialog());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      {clickable && (
        <Card elevation={3}>
          <CardActionArea>
            <Link
              to={
                {
                  pathname: `/${movieId}`,
                  movie: `${movieName}`,
                } as any
              }
            >
              <CardMedia className={classes.media} image={image} title="Contemplative Reptile" />
            </Link>
          </CardActionArea>
          <CardContent className={classes.title}>
            <Typography variant="h5">{movieName}</Typography>
          </CardContent>

          <CardActions className={classes.actions}>
            <Button size="small" color="primary" onClick={shareContent}>
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

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: 390,
      marginRight: "20px",
      marginBottom: "20px",
      [theme.breakpoints.down("sm")]: {
        marginRight: "0px",
      },
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

import React from "react";

import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../config";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

import { Typography, Theme, createStyles, makeStyles, Container, CardMedia, Hidden } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const MovieInfo = ({ movie, directors }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.movieInfo}
      style={{
        background: movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}/${movie.backdrop_path}')` : "#000",
      }}
    >
      <Container>
        <Hidden only="xs">
          <BreadCrumbs movie={movie.title} />
        </Hidden>
        <div className={classes.movieInfoContent}>
          <Hidden only="xs">
            <CardMedia
              className={classes.media}
              image={
                movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : "./images/no-image.jpg"
              }
              title="Contemplative Reptile"
            />
          </Hidden>

          <div className={classes.movieInfoText}>
            <Typography variant="h1" className={classes.h1}>
              {movie.title}
            </Typography>

            <Typography variant="h3" className={classes.h3}>
              PLOT
            </Typography>

            <Typography variant="body1" className={classes.p}>
              {movie.overview}
            </Typography>

            <Typography variant="h3" className={classes.h3}>
              IMDB RATING
            </Typography>

            <div className={classes.rating}>
              <Rating
                name="read-only"
                defaultValue={movie.vote_average}
                precision={0.1}
                max={10}
                readOnly
                style={{ marginRight: "20px" }}
              />
              <Typography variant="body1" style={{ marginTop: "2px" }}>
                {movie.vote_average} / 10
              </Typography>
            </div>

            {directors.length > 1 ? (
              <Typography variant="h3" className={classes.h3}>
                DIRECTORS
              </Typography>
            ) : (
              <Typography variant="h3" className={classes.h3}>
                DIRECTOR
              </Typography>
            )}

            {directors.map((element, i) => {
              return (
                <Typography variant="body1" key={i}>
                  {element.name}
                </Typography>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MovieInfo;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInfo: {
      backgroundSize: "cover !important",
      backgroundPosition: "center !important",
      height: "calc(100vh - 60px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        height: "calc(100vh - 50px)",
      },
    },
    breadCrumbs: {
      justifyContent: "flex-start",
    },
    movieInfoContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.7)",
      padding: 0,
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        height: 450,
        overflow: "scroll",
      },
    },
    media: {
      width: "350px",
      height: "500px",
    },
    movieInfoText: {
      height: "100%",
      width: "800px",
      color: "#fff",
      padding: "0px 50px 0px 50px",
      [theme.breakpoints.down("sm")]: {
        width: "250px",
        padding: "20px 20px",
      },
    },
    h1: {
      fontSize: "44px",
      margin: "0",
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
        margin: "20px 0px 0px 0px",
      },
    },
    h3: {
      fontSize: "20px",
      lineHeight: "0",
      margin: "30px 0px 20px 0px",

      [theme.breakpoints.down("sm")]: {
        margin: "30px 0px 20px 0px",
      },
    },
    p: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    rating: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
  })
);

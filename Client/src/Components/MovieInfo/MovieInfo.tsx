import React from "react";

import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../config";
import MovieThumb from "../MovieThumb/MovieThumb";

import { Typography, Theme, createStyles, makeStyles } from "@material-ui/core";
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
      <div className={classes.movieInfoContent}>
        <div className={classes.movieInfoThumb}>
          <MovieThumb
            movieId={movie.id}
            movieName={movie.title}
            image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : "./images/no-image.jpg"}
            clickable={false}
          />
        </div>

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
            <p style={{ marginTop: "2px" }}>{movie.vote_average} / 10</p>
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
              <p key={i} className="rmdb-director">
                {element.name}
              </p>
            );
          })}
        </div>
      </div>
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
      width: "100%",
      height: "600px",
      padding: "40px 20px",
      boxSizing: "border-box",
    },
    movieInfoContent: {
      maxWidth: "1280px",
      width: "100%",
      height: "100%",
      margin: "0 auto",
      background: "rgb(0, 0, 0, 0.7)",
      position: "relative",
    },
    movieInfoThumb: {
      width: "350px",
      height: "100%",
      overflow: "hidden",
      position: "absolute",
      left: "0px",
    },
    movieInfoText: {
      fontFamily: "Arial, Helvetica, sans-serif",
      height: "100%",
      width: "auto",
      padding: "40px",
      color: "#fff",
      overflow: "hidden",
      boxSizing: "border-box",
      position: "absolute",
      left: "360px",
    },
    h1: {
      fontFamily: "Abel, sans-serif",
      fontSize: "44px",
      margin: "0",
    },
    h3: {
      fontSize: "20px",
      lineHeight: "0",
      margin: "30px 0px 20px 0px",
    },
    p: {
      fontFamily: "Abel, sans-serif",
      fontSize: "18px",
      lineHeight: "26px",
    },
    rating: {
      display: "flex",
    },

    meter: {
      background: "linear-gradient(to bottom, #16d47b)",
      "&::-webkit-meter-bar": {
        background: "#fff",
        width: "200px",
      },
      "&::-webkit-meter-optimum-value": {
        background: "linear-gradient(to bottom, #fbb450)",
      },
      "&::-webkit-meter-even-less-good-value": {
        background: "linear-gradient(to bottom, #ee5f5b)",
      },
    },
  })
);

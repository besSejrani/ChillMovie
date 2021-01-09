import React from "react";

import { Link } from "react-router-dom";

import { makeStyles, createStyles, Theme } from "@material-ui/core";

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
          <img src={image} alt="moviethumb" className={classes.root} />
        </Link>
      ) : (
        <img src={image} alt="moviethumb" className={classes.root} />
      )}
    </div>
  );
};

export default MovieThumb;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "500px",
      height: "auto",
      maxWidth: "100%",
      maxHeight: "100%",
      transition: "all 0.3s",
      boxSizing: "border-box",
    },
    clickable: {
      cursor: "pointer",
      "&:hover": {
        opacity: 0.8,
      },
    },
  })
);

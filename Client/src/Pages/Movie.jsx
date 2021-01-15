import React, { useState, useEffect } from "react";

import { API_KEY, API_URL } from "../config";
import Navigation from "../Components/BreadCrumbs/BreadCrumbs";
import MovieInfo from "../Components/MovieInfo/MovieInfo";
import MovieInfoBar from "../Components/MovieInfoBar/MovieInfoBar";
import Actor from "../Components/Actor/Actor";
import Spinner from "../Components/Spinner";

import { Container, createStyles, makeStyles, theme } from "@material-ui/core";

import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

const Movie = () => {
  const classes = useStyles();
  const { movieId } = useParams();
  let location = useLocation();

  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState(null);
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    fetchItems(endpoint);
  }, []);

  const fetchItems = async (endpoint) => {
    try {
      const result = await axios.get(endpoint);

      if (result.status_code) {
        setLoading(true);
      } else {
        setMovie(result.data);

        const endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        const nextResult = await axios.get(endpoint);

        const directors = nextResult.data.crew.filter((member) => member.job === "Director");

        setActors(nextResult.data.cast);
        setDirectors(directors);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div>
      {movie ? (
        <div>
          <Navigation movie={location.movie} />
          <MovieInfo movie={movie} directors={directors} />
          <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
        </div>
      ) : null}

      {actors ? (
        <Container className={classes.root}>
          {actors.map((element, i) => {
            return <Actor key={i} actor={element} />;
          })}
        </Container>
      ) : null}

      {!actors && !loading ? <h1>No movie Found</h1> : null}
      {loading ? <Spinner /> : null}
    </div>
  );
};

export default Movie;

// ========================================================================================================

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
  })
);

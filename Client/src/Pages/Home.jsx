import React, { useState, useEffect } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../config";

import HeroImage from "../Components/HeroImage/HeroImage";
import SearchBar from "../Components/SearchBar/index";
import MovieThumb from "../Components/MovieThumb/MovieThumb";
import LoadMoreBtn from "../Components/LoadMore/LoadMore";
import Spinner from "../Components/Spinner/index";

import axios from "axios";

import { createStyles, makeStyles, Theme, Container, Typography } from "@material-ui/core";

const initialState = {
  movies: [],
  heroImage: null,
  loading: false,
  currentPage: 0,
  totalPages: 0,
  searchTerm: "",
};

const Home = () => {
  const classes = useStyles();
  const [myState, setMyState] = useState(initialState);

  useEffect(() => {
    if (localStorage.getItem("HomeState")) {
      const state = JSON.parse(localStorage.getItem("HomeState"));
      setMyState((prevState) => ({ ...prevState }));
    } else {
      setMyState((prevState) => ({ ...prevState, loading: true }));

      const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      fetchItems(endpoint);
    }
  }, []);

  const searchItems = (searchTerm) => {
    let endpoint = "";
    setMyState((prevState) => ({ ...prevState, movie: [], loading: true, searchTerm }));

    if (searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    fetchItems(endpoint);
  };

  const loadMoreItems = () => {
    let endpoint = "";
    setMyState((prevState) => ({ ...prevState, loading: true }));

    if (myState.searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${myState.currentPage + 1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${myState.searchTerm}&page=${
        myState.currentPage + 1
      }`;
    }
    fetchItems(endpoint);
  };

  const fetchItems = async (endpoint) => {
    try {
      const { data } = await axios.get(endpoint);

      setMyState(
        (prevState) => ({
          ...prevState,
          ...{
            movies: [...data.results],
            heroImage: prevState.heroImage || data.results[0],
            loading: false,
            currentPage: data.page,
            totalPages: data.total_pages,
          },
        }),

        () => {
          localStorage.setItem("HomeState", JSON.stringify(myState));
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {myState.heroImage ? (
        <>
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${myState.heroImage.backdrop_path} `}
            title={myState.heroImage.original_title}
            text={myState.heroImage.overview}
          />
          <SearchBar callback={searchItems} />
        </>
      ) : null}
      <Container>
        <Typography variant="h2" className={classes.title}>
          Popular Movies
        </Typography>
      </Container>
      <Container className={classes.root}>
        {myState.movies.map((element, i) => {
          return (
            <MovieThumb
              key={i}
              clickable={true}
              image={
                element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : "./images/no_images.jpg"
              }
              movieId={element.id}
              movieName={element.title}
            />
          );
        })}

        {myState.loading ? <Spinner /> : null}
        {myState.currentPage <= myState.totalPages && !myState.loading ? (
          <LoadMoreBtn text="Load More" onClick={loadMoreItems} />
        ) : null}
      </Container>
    </>
  );
};

export default Home;

// ========================================================================================================

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    title: {
      marginBottom: 30,
    },
  })
);

import React, { useState, useEffect } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../config";

import HeroImage from "../Components/HeroImage/HeroImage";
import SearchBar from "../Components/SearchBar/index";
import MovieCard from "../Components/MovieCard/MovieCard";
import Spinner from "../Components/Spinner/index";

import axios from "axios";
import useOnScreen from "../hooks/useOnScreen";

import { createStyles, makeStyles, Container, Typography, IconButton, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const initialState = {
  movies: [],
  heroImage: null,
  loading: false,
  totalPages: 0,
  searchTerm: "",
};

const Home = () => {
  const classes = useStyles();

  const [myState, setMyState] = useState(initialState);
  const [count, setCount] = useState(1);

  const [ref, visible] = useOnScreen({ threshold: 1 });

  const options = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Histoy",
    "Horror",
    "Musical",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Sport",
    "Superhero",
    "Thriller",
    "War",
    "Western",
  ];

  const ITEM_HEIGHT = 48;

  useEffect(() => {
    load();
  }, [visible]);

  const load = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${count}`;
    fetchItems(endpoint);
  };

  const searchItems = (searchTerm) => {
    let endpoint = "";
    setMyState((prevState) => ({ ...prevState, movie: [], loading: true, searchTerm }));

    if (searchTerm === "") {
      console.log(1);
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      console.log(2);
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    fetchItems(endpoint);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchItems = async (endpoint) => {
    try {
      const { data } = await axios.get(endpoint);

      setMyState((prevState) => ({
        ...prevState,
        ...{ movies: [...prevState.movies, ...data.results] },
        ...{
          heroImage: prevState.heroImage || data.results[0],
          loading: false,
          totalPages: data.total_pages,
        },
      }));

      setCount(data.page);
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

          <Container className={classes.searchOptions}>
            <SearchBar callback={searchItems} />

            <div>
              <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option} selected={option === "Pyxis"} onClick={handleClose}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Container>
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
            <MovieCard
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

        <div ref={ref}></div>
      </Container>
    </>
  );
};

export default Home;

// ========================================================================================================

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    title: {
      marginBottom: 55,
      [theme.breakpoints.down("sm")]: {
        marginBottom: 20,
        fontSize: "1.75rem",
      },
    },

    searchOptions: {
      display: "flex",
      alignItems: "center",
    },
  })
);

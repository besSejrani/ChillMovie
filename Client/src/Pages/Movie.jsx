import React, { Component } from "react";
import "./Movie.css";

import { API_KEY, API_URL } from "../config";
import Navigation from "../Components/Navigation";
import MovieInfo from "../Components/MovieInfo";
import MovieInfoBar from "../Components/MovieInfoBar";
import FourColGrid from "../Components/FourColGrid";
import Actor from "../Components/Actor";
import Spinner from "../Components/Spinner";

class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
    this.fetchItems(endpoint);
  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        if (result.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState({ movie: result }, () => {
            const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
            fetch(endpoint)
              .then((result) => result.json())
              .then((result) => {
                const directors = result.crew.filter((member) => member.job === "Director");
                this.setState({
                  actors: result.cast,
                  directors,
                  loading: false,
                });
              });
          });
        }
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <div className="rmdb-movie">
        {this.state.movie ? (
          <div>
            <Navigation movie={this.props.location.movieName} />
            <MovieInfo movie={this.state.movie} directors={this.state.directors} />
            <MovieInfoBar
              time={this.state.movie.runtime}
              budget={this.state.movie.budget}
              revenue={this.state.movie.revenue}
            />
          </div>
        ) : null}
        {this.state.actors ? (
          <div className="rmdb-movie-grid">
            <FourColGrid header={"Actors"}>
              {this.state.actors.map((element, i) => {
                return <Actor key={i} actor={element} />;
              })}
            </FourColGrid>
          </div>
        ) : null}
        {!this.state.actors && !this.state.loading ? <h1>No movie Found</h1> : null}
        {this.state.loading ? <Spinner /> : null}
      </div>
    );
  }
}

export default Movie;

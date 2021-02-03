import React from "react";
import Layout from "../Layout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Movie from "../Pages/Movie";
import Search from "../Pages/Search";
import WatchList from "../Pages/WatchList";
// import NotFound from "../Pages/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/:movieId" component={Movie} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/watchlist" component={WatchList} />
          <Route exact path="/" component={Home} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;

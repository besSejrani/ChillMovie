import React from "react";
import Layout from "../Layout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Movie from "../Pages/Movie";
import Search from "../Pages/Search";
import WatchList from "../Pages/WatchList";
import NotFound from "../Pages/NotFound";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:movieId" exact component={Movie} />
          <Route path="/search" exact component={Search} />
          <Route path="/watchlist" exact component={WatchList} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Layout from "../Layout/Layout";
import theme from "../Layout/theme";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home/index";
import Movie from "../Pages/Movie/";
import NotFound from "../Pages/NotFound";

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:movieId" exact component={Movie} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default Routes;

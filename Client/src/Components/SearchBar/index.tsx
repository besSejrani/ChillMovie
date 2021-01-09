import React, { useState, useEffect, ChangeEvent } from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core";

const SearchBar = ({ callback }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  useEffect(() => {
    doSearch(value);
  }, []);

  let timeout: any;

  const doSearch = (event) => {
    setValue(event);

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    <div className={classes.searchBar}>
      <div className={classes.searchBarContent}>
        <input
          type="text"
          className={classes.searchBarInput}
          placeholder="Search"
          onChange={(event) => doSearch(event.target.value)}
          value={value}
        />
      </div>
    </div>
  );
};

export default SearchBar;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBar: {
      width: "100%",
      height: "100px",
      background: "#1c1c1c",
      position: "relative",
      padding: "25px 20px 0px 20px",
      boxSizing: "border-box",
      color: "#fff",
    },
    searchBarContent: {
      maxWidth: "1280px",
      width: "100%",
      height: "55px",
      background: "#353535",
      margin: "0 auto",
      borderRadius: "40px",
      position: "relative",
      color: "#fff",
    },
    searchBarInput: {
      fontFamily: "Abel, sans-serif",
      fontSize: "38px",
      position: "absolute",
      left: "70px",
      top: "7px",
      border: "0",
      background: "transparent",
      height: "40px",
      color: "#fff",
      "&:focus": {
        outline: "none",
      },
    },
  })
);

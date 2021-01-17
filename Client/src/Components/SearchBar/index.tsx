import React, { useState, useEffect } from "react";

import { Theme, makeStyles, createStyles, TextField } from "@material-ui/core";

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
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Search Movie"
        variant="outlined"
        fullWidth
        onChange={(event) => doSearch(event.target.value)}
        value={value}
      />
    </form>
  );
};

export default SearchBar;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "100%",
      margin: "50px 0px",
      paddingLeft: 0,
      paddingRight: 0,
    },
  })
);

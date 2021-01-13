import React, { useState, useEffect } from "react";

import { Theme, makeStyles, createStyles, TextField, Container } from "@material-ui/core";

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
    // <div className={classes.searchBar}>
    //   <div className={classes.searchBarContent}>
    //     </div>
    //   </div>
<Container>
      <form className={classes.root} noValidate autoComplete="off">

        <TextField id="outlined-basic" label="Search Movie" variant="outlined"  onChange={(event) => doSearch(event.target.value)}
          value={value} />
      </form>
</Container>

  );
};

export default SearchBar;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
root:{
  display: "flex"
}
  })
);

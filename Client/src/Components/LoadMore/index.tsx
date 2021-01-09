import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

/* type Props = {
  text: string;
  onClick: Function
}; */

const LoadMore: React.FC<any> = ({ text, onClick }) => {
  const classes = useStyles();

  return (
    <Button className={classes.root} variant="contained" color="secondary" onClick={onClick}>
      {text}
    </Button>
  );
};

export default LoadMore;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      boxShadow: "none",
      width: "100%",
      minHeight: "50px",
      textAlign: "center",
      color: "#fff",
      cursor: "pointer",
      transition: "all 0.3s",
    },
  })
);

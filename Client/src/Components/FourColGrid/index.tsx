import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const FourColGrid: React.FC<any> = ({ loading, header, children }) => {
  const classes = useStyles();

  const cards = () => {
    const gridElements = children.map((element, i) => {
      return (
        <div key={i} className={classes.element}>
          {element}
        </div>
      );
    });
    return gridElements;
  };

  return (
    <div className="rmdb-grid">
      {header && !loading ? <h1>{header}</h1> : null}
      <div className={classes.content}>{cards()}</div>
    </div>
  );
};

export default FourColGrid;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: "flex",
      flexWrap: "wrap",
    },
    element: {
      margin: "10px 10px 10px 10px",
      height: "350px",
      width: "234px",
      overflow: "hidden",
      border: "1px solid grey",
    },
  })
);

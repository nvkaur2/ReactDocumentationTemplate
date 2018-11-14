import React from "react";
import classes from "./Link.module.css";

const Link = props => {
  return (
    <a href={props.href || "_"} className={classes.Link}>
      {props.text}
    </a>
  );
};

export default Link;

import React, { Component, Fragment } from "react";
import classes from "./Paragraph.module.css";
const Paragraph = props => {
  return (
    <Fragment>
      <p className={classes.heading}>{props.heading}</p>
      <p className={classes.paragraph}>{props.children}</p>
    </Fragment>
  );
};

export default Paragraph;

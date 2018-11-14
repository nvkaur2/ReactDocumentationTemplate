import React, { Component } from "react";
import classes from "./Heading.module.css";
const Heading = props => {
  return <h4 className={classes.Heading}>{props.text}</h4>;
};

export default Heading;

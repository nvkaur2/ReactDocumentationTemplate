import React from "react";
import classes from "./Input.module.css";
const Input = props => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={classes.Input}
    />
  );
};

export default Input;

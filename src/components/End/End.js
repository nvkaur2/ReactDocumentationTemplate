import React, { Component, Fragment } from "react";
import Button from "../Button/Button";
import Link from "../Links/Link";
import classes from "./End.module.css";
const End = () => {
  return (
    <div className={classes.End}>
      <Button text="Get Started" />
      <Link text="Take a tutorial" />
    </div>
  );
};

export default End;

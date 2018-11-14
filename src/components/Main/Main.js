import React, { Component, Fragment } from "react";
import classes from "./Main.module.css";
import Button from "../Button/Button";
import Link from "../Links/Link";
const Main = () => {
  return (
    <div className={classes.Main}>
      <div className={classes.data}>React</div>
      <div className={classes.data1}>
        A JavaScript library for building user interfaces
      </div>
      <Button text="Get Started" />
      <Link text="Take a tutorial" />
    </div>
  );
};

export default Main;

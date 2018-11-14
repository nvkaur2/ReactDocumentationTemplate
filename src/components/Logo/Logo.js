import React from "react";
import logo from "./react.png";
import classes from "./Logo.module.css";

const Logo = () => {
  const divStyle = {
    color: "#63d1f4",
    fontSize: "20px",
    fontWeight: "bold"
  };
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="logo" className={classes.Img} />
      <p style={divStyle}> React</p>
    </div>
  );
};

export default Logo;

import Link from "../Links/Link";
import React from "react";
import classes from "./Nav.module.css";
import Input from "../Input/Input";
const Nav = () => {
  return (
    <ul className={classes.Nav}>
      <Link text="Docs" className={classes.item1} />
      <Link text="Tutorial" className={classes.item2} />
      <Link text="Community" className={classes.item3} />
      <Link text="Blog" className={classes.item4} />
      <Input type="text" placeholder="Search docs" className={classes.item5} />
      <Link
        href="https://github.com/"
        text="Github"
        className={classes.item6}
      />
    </ul>
  );
};

export default Nav;

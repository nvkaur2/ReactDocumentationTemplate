import React from "react";
import Link from "../Links/Link";
import classes from "./Footer.module.css";
import Heading from "../Heading/Heading";
const Footer = () => {
  return (
    <div className={classes.Container}>
      <Heading text="DOCS" />
      <Link text="Installation" />
      <Link text="Main Concepts" />
      <Link text="Hooks" />
      <Link text="Contributions" />
      <Link text="FAQ" />
      <Heading text="CHANNELS" />
      <Link text="Twitter" />
      <Link text="Facebook" />
      <Link text="Stack Overflow" />
      <Link text="LinkedIn" />
      <Link text="GIT" />
      <Heading text="MORE" />
      <Link text="Tools" />
      <Link text="Resources" />
      <Link text="Blogs" />
      <Link text="Tutorials" />
      <Link text="Acknowledgements" />
    </div>
  );
};

export default Footer;

import React, { Component, Fragment } from "react";

import Nav from "./src/components/Nav/Nav";
import Logo from "./src/components/Logo/Logo";
import Main from "./src/components/Main/Main";
import Paragraph from "./src/components/Paragraph/Paragraph";
import End from "./src/components/End/End";
import Footer from "./src/components/Footer/Footer";
import classes from "./App.module.css";
// import Input from "./components/Input/Input";
// import Link from "./components/Links/Link";
class App extends Component {
  render() {
    return (
      <Fragment>
        <header className={classes.App}>
          <Logo />
          <Nav />
        </header>
        <Main />
        <div className={classes.Content}>
          <Paragraph heading="Declarative">
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
            Declarative views make your code more predictable and easier to
            debug. Component-Based Build encapsulated components that manage
            their own state, then compose them to make complex UIs. Since
            component logic is written in JavaScript instead of templates, you
            can easily pass rich data through your app and keep state out of the
            DOM.
          </Paragraph>
          <Paragraph heading="Component-Based">
            Build encapsulated components that manage their own state, then
            compose them to make complex UIs. Since component logic is written
            in JavaScript instead of templates, you can easily pass rich data
            through your app and keep state out of the DOM
          </Paragraph>
          <Paragraph heading="Learn Once, Write Anywhere">
            We donât make assumptions about the rest of your technology stack,
            so you can develop new features in React without rewriting existing
            code. React can also render on the server using Node and power
            mobile apps using React Native.
          </Paragraph>
          <Paragraph heading="Simple Component">
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
            Declarative views make your code more predictable and easier to
            debug. Component-Based Build encapsulated components that manage
            their own state, then compose them to make complex UIs. Since
            component logic is written in JavaScript instead of templates, you
            can easily pass rich data through your app and keep state out of the
            DOM.
          </Paragraph>
          <Paragraph heading="React Lib">
            Build encapsulated components that manage their own state, then
            compose them to make complex UIs. Since component logic is written
            in JavaScript instead of templates, you can easily pass rich data
            through your app and keep state out of the DOM
          </Paragraph>
          <Paragraph heading="Reausability">
            We donât make assumptions about the rest of your technology stack,
            so you can develop new features in React without rewriting existing
            code. React can also render on the server using Node and power
            mobile apps using React Native.
          </Paragraph>
        </div>
        <End />
        <Footer />
      </Fragment>
    );
  }
}

export default App;

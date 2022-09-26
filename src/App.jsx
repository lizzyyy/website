import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <Router>
        <>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <Home section="about" />
            </Route>
            <Route exact path="/experience">
              <Home section="experience" />
            </Route>
            <Route exact path="/projects">
              <Home section="projects" />
            </Route>
            <Route exact path="/contact">
              <Home section="contact" />
            </Route>
          </Switch>
        </>
      </Router>
    </ChakraProvider>
  );
};

export default App;

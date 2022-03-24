import React from "react";
import { Navbar, CurvySVG, CurvySVG2, CurvySVG3, Socials } from "./components";
import { Content, content, Footer, footer } from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="Header">
        <Navbar></Navbar>
        <CurvySVG></CurvySVG>
      </div>
      <div className="emptyDiv"></div>
      <Content></Content>
      <div className="footer">
        <CurvySVG2></CurvySVG2>
      </div>
      <button className="joinButton" type="button">
        Join Now
      </button>
      <Socials></Socials>
    </div>
  );
};

export default App;

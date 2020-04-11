import React, { Component } from "react";
import Carousel from "./Sections/Carousel";
import Benefits from "./Sections/Benefits";
import "./Home.css";
import Features from "./Sections/Features";
import CXDeployer from "./Sections/CXDeployer";
import Customerexperience from "./Sections/Customerexperience";
import AboveFooter from "./Sections/AboveFooter";

export default class extends Component {
  render = () => {
    return (
      <div>
        <div className="bg-gradient px-5 py-3">
          <Carousel />
        </div>
        <div className="container mt-5">
          <div id="benefits" className="mt-5">
            <Benefits />
          </div>
          <div id="CXDeployer" className="mt-5">
            <CXDeployer />
          </div>
          <div id="Customerexperience" className="mt-5">
            <Customerexperience />
          </div>
          <div id="features" className="mt-5">
            <Features />
          </div>
          <div className="mt-5">
            <AboveFooter />
          </div>
        </div>
      </div>
    );
  };
}

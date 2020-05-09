import React from "react";

const Section = () => {
  return <div>
    <h4 className="text-center mb-3">Persona</h4>
    <h2 className="text-center">Design your customer’s persona</h2>
  </div>
}

export default () => {
  return (
    <div className="container pt-5">
      <div className="intro-text text-center py-md-5 mb-5">
        <div className="intro-desc mb-0">
          <h5>The only solution you need to </h5>
        </div>
        <div className="intro-lead-in text-uppercase ">
          <h1 style={{ color: "blue" }}>
            <strong>Manage and Improve Your Customer’s Experience </strong>
          </h1>
        </div>
        <div className="intro-desc mt-5">
          The best integrated experience management and design thinking tool
          with all features to design personas, empathy mapping, journey
          mapping, business model canvas, capture ideas to improve the current
          experience and manage implementation of the best idea to realize the
          future experience.
        </div>
        <div style={{ textAlign: "center" }}>
          <a
            rel="noopener noreferrer"
            href="http://app.cxdeployer.com/#/"
            target="_blank"
            className="btn btn-primary"
          >
            <font color="white">Try CXDeployer for free</font>
          </a>
        </div>
      </div>
      <Section />
    </div>
  );
};

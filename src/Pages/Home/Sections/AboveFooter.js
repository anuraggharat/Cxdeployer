import React from "react";

export default () => (
  <div className="container">
    <div
      className="rounded-lg p-5 px-3 px-md-5   text-center"
      style={{ backgroundColor: "#dcd6f7" }}
    >
      <div className="h3">
        CXDeployer transforms the way you conduct
        design thinking workshops.
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center py-4">
        <div
          className="btn rounded-lg text-white px-4 py-2"
          style={{ backgroundColor: "rgb(22, 41, 80)" }}
        >
          <a
            rel="noopener noreferrer"
            href="https://app.cxdeployer.com/#/"
            target="_blank"
            className="text-white"
          >
            Try for free
          </a>
        </div>
        <div className="btn btn-secondary rounded-lg px-4 py-2 ml-md-4 mt-2 mt-md-0">
          Request a demo
        </div>
      </div>
    </div>
  </div>
);

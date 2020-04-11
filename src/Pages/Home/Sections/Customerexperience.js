import React from "react";

export default () => {
  return (
    <div class="container">
      <div
        class="jumbotron "
        style={{ textAlign: "Center", backgroundColor: "light blue" }}
      >
        <h2 style={{ marginLeft: "-50px" }}>
          The best customer experience management solution.
        </h2>
        <br style={{ marginLeft: "0px" }}></br>You are just minutes away from
        CXDeployer.
        <p>
          <a
            class="btn btn-primary btn-lg"
            role="button"
            style={{ marginRight: "0px", marginTop: "50px" }}
            href="http://app.cxdeployer.com/#/sign-in"
          >
            Start here
          </a>
        </p>
      </div>
    </div>
  );
};

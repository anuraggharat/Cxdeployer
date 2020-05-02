import React from "react";
import Banner1 from "../../../assets/Home/CX-deployer-banner-3.png";
import Banner2 from "../../../assets/Home/CX-deployer-banner-2.png";
import Banner3 from "../../../assets/Home/CX-deployer-banner-1.png";
import Banner4 from "../../../assets/Home/CX-deployer-banner-4.png";
import Banner1Sm from "../../../assets/Home/CX-deployer-banner-3-sm.png";
import Banner2Sm from "../../../assets/Home/CX-deployer-banner-2-sm.png";
import Banner3Sm from "../../../assets/Home/CX-deployer-banner-1-sm.png";
import Banner4Sm from "../../../assets/Home/CX-deployer-banner-4-sm.png";

// Gradient
// #0a1d44 top
// #3360d9

export default () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel bg-white rounded-lg slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        <li data-target="#carouselExampleIndicators" data-slide-to={3} />
      </ol>
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          style={{
            backgroundImage: `url(${Banner1})`,
            minHeight: "80vh",
            height: "auto",
          }}
        >
          <div className="d-flex align-items-center h-100">
            <div className="row ">
              <div className="col-12 d-md-none">
                <img
                  src={Banner1Sm}
                  alt=""
                  className="img-fluid"
                  width="100%"
                  style={{ minHeight: "10px" }}
                />
              </div>
              <div className="col-12 col-md-6">
                <div className="intro-text p-md-5">
                  <div className="intro-lead-in text-uppercase ">
                    <font style={{ fontFamily: "arial", color: "blue" }}>
                      <strong>Transform your customer experience </strong>
                    </font>
                  </div>
                  <div className="intro-desc">
                    <font style={{ fontFamily: "Arial" }}>
                      The Design thinking platform for you and your team for
                      Designing personas and business models,mapping customer
                      journeys,experience innovation and excution to improve
                      customer experience.
                    </font>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <a
                      rel="noopener noreferrer"
                      href="http://app.cxdeployer.com/#/"
                      target="_blank"
                      className="btn btn-primary"
                      style={{ zIndex: "100", align: "left", width: "10" }}
                    >
                      <font color="white">Try for free</font>
                    </a>
                    <p>
                      <small>No Credit Card Required!</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{
            backgroundImage: `url(${Banner2})`,
            minHeight: "80vh",
            height: "auto",
          }}
        >
          <div className="d-flex align-items-center h-100">
            <div className="row ">
              <div className="col-12 d-md-none">
                <img
                  src={Banner2Sm}
                  alt=""
                  width="100%"
                  style={{ minHeight: "10px" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-6">
                <div className="intro-text p-md-5">
                  <div className="intro-lead-in text-uppercase ">
                    <font style={{ fontFamily: "arial", color: "blue" }}>
                      <strong>
                        Collaborate and map the current experience
                      </strong>
                    </font>
                  </div>
                  <div className="intro-desc">
                    <font style={{ fontFamily: "Arial" }}>
                      The simplest tool to capture the current experience by
                      mapping persona, empathy and customer journey. Accomplish
                      more by collaborating and sharing feedback with the team
                      in real time.
                    </font>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <a
                      rel="noopener noreferrer"
                      href="http://app.cxdeployer.com/#/"
                      target="_blank"
                      className="btn btn-primary"
                      style={{ zIndex: "100", align: "left", width: "10" }}
                    >
                      <font color="white">Try for free</font>
                    </a>
                    <p>
                      <small>No Credit Card Required!</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{
            backgroundImage: `url(${Banner3})`,
            minHeight: "80vh",
            height: "auto",
          }}
        >
          <div className="d-flex align-items-center h-100">
            <div className="row ">
              <div className="col-12 d-md-none">
                <img
                  src={Banner3Sm}
                  alt=""
                  width="100%"
                  style={{ minHeight: "10px" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-6">
                <div className="intro-text p-md-5">
                  <div className="intro-lead-in text-uppercase ">
                    <font style={{ fontFamily: "arial", color: "blue" }}>
                      <strong>Capture ideas to improve experience </strong>
                    </font>
                  </div>
                  <div className="intro-desc">
                    <font style={{ fontFamily: "Arial" }}>
                      A powerful and intuitive tool to capture and discover the
                      most impactful ideas from everyone to innovate on user
                      experience.
                    </font>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <a
                      rel="noopener noreferrer"
                      href="http://app.cxdeployer.com/#/"
                      target="_blank"
                      className="btn btn-primary"
                      style={{ zIndex: "100", align: "left", width: "10" }}
                    >
                      <font color="white">Try for free</font>
                    </a>
                    <p>
                      <small>No Credit Card Required!</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{
            backgroundImage: `url(${Banner4})`,
            minHeight: "80vh",
            height: "auto",
          }}
        >
          <div className="d-flex align-items-center h-100">
            <div className="row ">
              <div className="col-12 d-md-none">
                <img
                  src={Banner4Sm}
                  alt=""
                  width="100%"
                  style={{ minHeight: "10px" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-6">
                <div className="intro-text p-md-5">
                  <div className="intro-lead-in text-uppercase ">
                    <font style={{ fontFamily: "arial", color: "blue" }}>
                      <strong>Manage deployment of the best idea </strong>
                    </font>
                  </div>
                  <div className="intro-desc">
                    <font style={{ fontFamily: "Arial" }}>
                      An integrated software to project manage the execution of
                      the best idea with visual task management to realize the
                      future state of the customer experience.
                    </font>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <a
                      rel="noopener noreferrer"
                      href="http://app.cxdeployer.com/#/"
                      target="_blank"
                      className="btn btn-primary"
                      style={{ zIndex: "100", align: "left", width: "10" }}
                    >
                      <font color="white">Try for free</font>
                    </a>
                    <p>
                      <small>No Credit Card Required!</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

import React from "react";
import Banner1 from "../../../assets/images/Home/CX-deployer-banner-1.png";
import Banner2 from "../../../assets/images/Home/CX-deployer-banner-2.png";
import Banner3 from "../../../assets/images/Home/CX-deployer-banner-3.png";

// #0a1d44 top
// #3360d9

export default () => {
  return (
    <div
      className="container-fluid bg-white rounded-lg"
      style={{ height: "100%" }}
    >
      <div>
        <div id="carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#carousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
            {/* 
              <li data-target="#carousel" data-slide-to="3"></li>
              <li data-target="#carousel" data- slide-to="4"></li>
              <li data-target="#carousel" data-slide-to="5"></li>
          */}
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="100000">
              <div className="container">
                <div
                  className="row justify-content-end"
                  style={{ height: "100%" }}
                >
                  <div className="col-7">
                    <div className="carousel-img-text">
                      Collaborate and Map the <br /> current Experience
                    </div>
                    <div
                      style={{
                        backgroundImage: `url(${Banner1})`,
                        ...styles.backgroundImage,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-interval="100000">
              <div className="row justify-content-end">
                <div className="col-7">
                  <div className="carousel-img-text">
                    Capture ideas to improve <br /> experience
                  </div>

                  <div
                    style={{
                      backgroundImage: `url(${Banner2})`,
                      ...styles.backgroundImage,
                      position: "relative",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-interval="100000">
              <div className="row justify-content-end">
                <div className="col-7">
                  <div className="carousel-img-text">
                    Exceute the Best idea and <br /> map the future Experience
                  </div>
                  <div
                    style={{
                      backgroundImage: `url(${Banner3})`,
                      ...styles.backgroundImage,
                      position: "relative",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev text-dark mr-3"
            href="#carousel"
            role="button"
            data-slide="prev"
          >
            <div className="fas fa-chevron-left"></div>
          </a>
          <a
            className="carousel-control-next text-dark"
            href="#carousel"
            role="button"
            data-slide="next"
          >
            <div className="fas fa-chevron-right"></div>
          </a>
          <header className="masthead">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-5 pl-5 ml-4 pt-5">
                  <div className="intro-text ">
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
          </header>
        </div>
      </div>
    </div>
  );
};

const styles = {
  backgroundImage: {
    backgroundColor: "blue",
    backgroundSize: "cover",
    backgroundPosition: "top",
    minWidth: "100wh",
    minHeight: "425px",
    maxHeight: "425px",
  },
  carouselImage: {
    position: "absolute",
    left: "50%",
    top: "10%",
    width: "100%",
    textalign: "center",
    fontsize: "18px",
    fontFamily: "Arial Rounded MtT Bold",
    color: "#4da6ff",
    fontSize: "28px",
  },
};

import React, { useEffect } from "react";
import Logo1 from "../../assets/Logo1.png";
import { Link } from "react-router-dom";

const $ = window.$;
const location = window.location;

export default () => {
  useEffect(() => {
    $("body").ready(() => {
      // Toggle navbar-shrink class when page is scrolled
      var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
          $("#mainNav").addClass("navbar-shrink");
        } else {
          $("#mainNav").removeClass("navbar-shrink");
        }
      };
      navbarCollapse();
      $(window).scroll(navbarCollapse);

      // Smooth scrolling
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
          location.pathname.replace(/^\//, "") ===
            this.pathname.replace(/^\//, "") &&
          location.hostname === this.hostname
        ) {
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            $("html, body").animate(
              {
                scrollTop: target.offset().top - 56,
              },
              1000,
              "easeInOutExpo"
            );
            return false;
          }
        }
      });

      // Closes responsive menu when a scroll trigger link is clicked
      $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
      });

      // Activate scrollspy to add active class to navbar items on scroll
      $("body").scrollspy({
        target: "#mainNav",
        offset: 56,
      });
    });
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top sticky-top"
      style={{ backgroundColor: "#162950" }}
      id="mainNav"
    >
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/#carousel">
          <img
            src={Logo1}
            tintcolor="red"
            alt="CXDeployer"
            width="150"
            height="50"
          />
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            {/* <li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#benefits">Benefits</a>
					</li> */}
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/Pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/Contactus">
                Contact US
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger"
                href="http://app.cxdeployer.com/#/sign-in"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                rel="noopener noreferrer"
                href="http://app.cxdeployer.com/#/"
                target="_blank"
                className="nav-link btn btn-light py-1 pb-3 pb-lg-1"
              >
                <font color="black">Try for free</font>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

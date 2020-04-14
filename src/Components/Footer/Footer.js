import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/images/Logo1.png";

export default () => {
  return (
    /* <!--FOOTER  --> */
    <footer className="custom-footer p-3">
      <div className="row mb-3">
        <div className="col-12 col-md-6">
          <Link to="/">
            <img src={Logo1} alt="Logo" width="auto" height="80" />
          </Link>
          <div className="text-white w-50">
            The only one platform you need to transform your customer experience
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-end align-items-center">
          <div className="bg-white d-inline-block p-3 px-5">
            <div>
              <a href="mailto:contact@cxdeployer.com" className="nav-link p-0">
                contact@cxdeployer.com
              </a>
            </div>
            <i className="fab fa-2x mr-2 text-secondary fa-facebook-square " ></i>
            <i className="fab fa-2x mr-2 text-secondary fa-medium"></i>
            <i className="fab fa-2x mr-2 text-secondary fa-twitter-square"></i>
            <i className="fab fa-2x mr-2 text-secondary fa-linkedin"></i>
            <i className="fab fa-2x mr-2 text-secondary fa-instagram-square"></i>
          </div>
        </div>
      </div>
      <div class="text-center pb-3">
        <Link class=" ml-4 text-white card-link text-white" to="/terms">
          Terms of Use
        </Link>
        <Link class="ml-4  card-link text-white" to="/privacypolicy">
          Privacy Policy
        </Link>
        <Link class="ml-4  card-link text-white" to="/Cookies">
          Cookie Policy
        </Link>
      </div>
    </footer>
  );
};

import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/Logo1.png";
import {FaFacebookF,FaLinkedin, FaInstagram, FaTwitter, FaGoogle} from 'react-icons/fa'

export default () => {
  return (
    /* <!--FOOTER  --> */
    // <footer className="custom-footer p-2 p-md-3">
    //   <div className="row mb-3 no-gutters">
    //     <div className="col-12  mb-3 mb-md-0 col-md-6">
    //       <Link to="/">
    //         <img src={Logo1} alt="Logo" width="auto" height="80" />
    //       </Link>
    //       <div className="text-white logo-content w-50">
    //         The only platform that you require, so that you can transform your customer experience
    //       </div>
    //     </div>
    //     <div className="col-12 col-md-6 d-flex justify-content-end align-items-center">
    //       <div className="bg-light rounded d-inline-block p-3 px-5">
    //         <div>
    //           <a href="mailto:contact@cxdeployer.com" className="nav-link p-0">
    //             contact@cxdeployer.com
    //           </a>
    //         </div>
    //         <i className="fab fa-2x mr-2 fa-facebook-square "></i>
    //         <i className="fab fa-2x mr-2 fa-medium"></i>
    //         <i className="fab fa-2x mr-2 fa-twitter-square"></i>
    //         <i className="fab fa-2x mr-2 fa-linkedin"></i>
    //         <i className="fab fa-2x mr-2 fa-instagram-square"></i>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="text-center pb-3">
    //     <Link className=" ml-4 text-white card-link text-white" to="/terms">
    //       Terms of Use
    //     </Link>
    //     <Link className="ml-4 card-link text-white" to="/privacypolicy">
    //       Privacy Policy
    //     </Link>
    //     <Link className="ml-4 card-link text-white" to="/Cookies">
    //       Cookie Policy
    //     </Link>
    //   </div>
    // </footer>
    <footer className="w-100  pt-5 mt-5">
        <div className="row text-center">
          <img src={Logo1} alt="Footer Logo"  className=" mx-auto" height="50px" />
        </div>
        <div className="w-100 mt-4">
            <div className="w-50 mx-auto d-flex justify-content-between">
              <Link to="/" className="">Terms Of Use</Link>
              <Link to="/" className="">Privacy Policy</Link>
              <Link to="/" className="">Cookie Policy</Link>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-between mt-5">
          <div className=" d-flex justify-content-around w-25">
            <FaLinkedin className="Footer-links"/>
            <FaFacebookF className="Footer-links"/>
            <FaInstagram className="Footer-links"/>
            <FaTwitter className="Footer-links"/>
            <FaGoogle className="Footer-links"/>
          </div>
          <div className="text-white pr-2">
            <p>2020 Cxdeployer. All Rights Reserved.</p>
          </div>
        </div>
    </footer>
  );
};

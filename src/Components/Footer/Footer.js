import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/Logo1.png";
import {FaFacebookF,FaLinkedin, FaInstagram, FaTwitter, FaGoogle} from 'react-icons/fa'

export default () => {
  return (
    <footer className="w-100  pt-5 mt-5">
        <div className="row text-center">
          <img src={Logo1} alt="Footer Logo"  className=" mx-auto" height="50px" />
        </div>
        <div className="w-100 mt-4">
            <div className="w-50 mx-auto d-flex justify-content-between">
              <Link to="/" className="footer-pages">Terms Of Use</Link>
              <Link to="/" className="footer-pages">Privacy Policy</Link>
              <Link to="/" className="footer-pages">Cookie Policy</Link>
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
            <p className="footer-pages">2020 Cxdeployer. All Rights Reserved.</p>
          </div>
        </div>
    </footer>
  );
};

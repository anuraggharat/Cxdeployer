import React from 'react';
import "./Footer.css";
import Logo from "../../assets/images/logo.png";

export default () => {
	return (
		/* <!--FOOTER  --> */
		<footer className='custom-footer col-sm-12' >
			<div className='container px-0 py-4'>
				<div className="row d-flex align-items-center">
					<div className="col-12 col-lg-4 mb-3">
						<img src={Logo} alt="Logo" width="150" height="50" />
						<p>Transform your customer experience</p>
						<div className="footer-link">
							<a className="js-scroll-trigger" href="#carousel">Home</a>
							<a className="js-scroll-trigger" href="#benefits">Benefits</a>
							<a className="js-scroll-trigger" href="#features">Features</a>
							<a className="js-scroll-trigger" href="#pricing">Pricing</a>
						</div>
					</div>
					<div className="col-12 col-lg-4 mt-3 mt-lg-0">
						<h5>About the company</h5>
						<p className="text-justify">
							Design a Customer Journey experience with various kanban board and map. Design a customer journey with various design solution.
						</p>
					</div>
					<div className="col-12 col-lg-4 mt-3 mt-lg-0">
						<div className="footer-link mt-3 pl-lg-3">
							<a href="tel:+919669911101">+91-9669911101</a>
						</div>
						<div className="footer-link mt-3 pl-lg-3">
							<a href="mailto:contact@cxdeployer.in">contact@cxdeployer.in</a>
						</div>
						<div className='footer-icons mt-3'>
							<a href="/"><i className='fab fa-facebook fa-1x mx-4 px-2' /></a>
							<a href="/"><i className='fab fa-instagram fa-1x mx-4 px-2' /></a>
							<a href="/"><i className='fab fa-linkedin fa-1x mx-4 px-2' /></a>
							<a href="/"><i className='fab fa-whatsapp fa-1x mx-4 px-2' /></a>
						</div>
					</div>
				</div>
			</div>
		</footer >
	)
}

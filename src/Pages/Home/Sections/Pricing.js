import React, { useState } from "react";
import PricingFeatures from "./PricingFeatures";
//import Pricing from "./Sections/Pricing";

export default () => {
	
	const [isYearly, setIsYearly] = useState(true);

	return <section className="Pricing">
		<div id="pricing" className="mt-5">
					<PricingFeatures />
				
				</div>
		<div className="container mt-5">
			<div className="h2  pricing-lead text-center">Simple pricing for customer experience transformation.</div>
			<div className="h4  pricing-lead-second text-center">No start up fees, no credit card and no commitment.</div>
			<div className="row">
				<div className="col-12 text-center mt-4 ">
					<div className="btn-group" role="group">
						<button type="button" onClick={setIsYearly.bind(this, false)} className={`btn border btn-${isYearly ? 'light' : "primary"}`}>Monthly</button>
						<button type="button" onClick={setIsYearly.bind(this, true)} className={`btn border btn-${isYearly ? "primary" : "light"}`}>Yearly (save 20%)</button>
					</div>
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-lg-3 mb-3 mb-lg-0">
					<div className="card mb-5 mb-lg-0 h-100">
						<div className="card-body">
							<h5 className="card-title text-muted text-uppercase text-center">Free</h5>
							<h6 className="card-price text-center">$0<span className="period"> per user/month</span></h6>
							<hr />
							<h6 className="pricing-text text-secondary">
								Get started and try our design thinking tools. Upgrade at any time.
							</h6>
							<a rel="noopener noreferrer" href="http://app.cxdeployer.com/#/" target="_blank" className="btn btn-block btn-primary text-uppercase">Try for free</a>
						</div>
					</div>
				</div>
				<div className="col-lg-3 mb-3 mb-lg-0">
					<div className="card mb-5 mb-lg-0 h-100">
						<div className="card-body">
							<h5 className="card-title text-muted text-uppercase text-center">Startup</h5>
							<h6 className="card-price text-center">${isYearly ? 10 : 12}<span className="period">per month</span></h6>
							<hr />
							<h6 className="pricing-text text-secondary">
								For individuals, consultants and startups to digitize their design thinking workshps.
							</h6>
							<a href="/" className="btn btn-block btn-primary text-uppercase">Subscribe</a>
						</div>
					</div>
				</div>
				<div className="col-lg-3 mb-3 mb-lg-0">
					<div className="card mb-5 mb-lg-0 h-100">
						<div className="card-body">
							<h5 className="card-title text-muted text-uppercase text-center">Growth</h5>
							<h6 className="card-price text-center">${10 ? 20 : 24}<span className="period"> per user/month</span></h6>
							<hr />
							<div style={{height:"129px"}}>
							<h6 className="pricing-text text-secondary">
					       For growing organization and consulting teams to create and deliver design thinking.
						   </h6>
						   </div>
							
							<a href="/" className="btn btn-block btn-primary text-uppercase">Subscribe</a>
						</div>
					</div>
				</div>
				<div className="col-lg-3 mb-3 mb-lg-0">
					<div className="card mb-5 mb-lg-0 h-100">
						<div className="card-body">
							<h6 className="card-title text-muted text-uppercase text-center">Enterprise</h6>
							<h6 className="card-text text-center" style={{ fontSize: "15px" }}>Install on your private server</h6>
							<hr />
							<h6 className="pricing-text text-secondary">
								For large organization that belives in design thinking as a way of life.
							</h6>
							<a href="/" className="btn btn-block btn-primary text-uppercase">Contact Us</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</section >

}
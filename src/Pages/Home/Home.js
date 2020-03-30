import React, { Component } from "react";
import Carousel from "./Sections/Carousel";
import Benefits from "./Sections/Benefits";
import "./Home.css"
import Features from "./Sections/Features";
import PricingFeatures from "./Sections/PricingFeatures";
import Pricing from "./Sections/Pricing";

export default class extends Component {
	render = () => {
		return <div>
			<Carousel />
			<div className="container mt-5">
				<div id="benefits" className='mt-5'>
					<Benefits />
				</div>
				<div id="features" className="mt-5">
					<Features />
				</div>
				<div id="pricing" className="mt-5">
					<PricingFeatures />
					<Pricing />
				</div>
			</div>
		</div>
	}
}
import React, { Component } from "react";
import Carousel from "./Sections/Carousel";
import Benefits from "./Sections/Benefits";
import "./Home.css"
import Features from "./Sections/Features";
//import PricingFeatures from "./Sections/PricingFeatures";
//import Pricing from "./Sections/Pricing";
import CXDeployer from "./Sections/CXDeployer"
import Persona from "./Sections/Persona"
import Businesscanvas from "./Sections/Businesscanvas";
import Customerjourney from "./Sections/Customerjourney";
import Idea from "./Sections/Idea";
import Kanbanboard from "./Sections/Kanbanboard";
import Customerexperience from "./Sections/Customerexperience";



export default class extends Component {
	render = () => {
		return <div>
			<Carousel />
			<div className="container mt-5">
				<div id="benefits" className='mt-5'>
					<Benefits />
				</div>
				<div id="CXDeployer" className="mt-5">
					<CXDeployer />
				</div>
				<div id="Persona" className="mt-5">
					<Persona/>
				</div>
				<div id="Businesscanvas" className="mt-5">
					<Businesscanvas/>
				</div>
				<div id="Customerjourney" className="mt-5">
					<Customerjourney/>
				</div>
				<div id="Idea" className="mt-5">
					<Idea/>
				</div>
				<div id="Kanbanboard" className="mt-5">
					<Kanbanboard/>
				</div>
				<div id="Customerexperience" className="mt-5">
					<Customerexperience />
				</div>
				<div id="features" className="mt-5">
					<Features />
				</div>
				
				
			</div>
		</div>
	}
}
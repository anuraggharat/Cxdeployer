import React from "react";
import Benefit1 from "../../../assets/images/Home/Benefit1.svg"
import Benefit2 from "../../../assets/images/Home/Benefit2.svg"
import Benefit3 from "../../../assets/images/Home/Benefit3.svg"
import Benefit4 from "../../../assets/images/Home/Benefit4.svg"
import Benefit5 from "../../../assets/images/Home/Benefit5.svg"
import Benefit6 from "../../../assets/images/Home/Benefit6.svg"
import Benefit7 from "../../../assets/images/Home/Benefit7.svg"
import Benefit8 from "../../../assets/images/Home/Benefit8.svg"

const BenefitsCard = ({ img, title, text }) => {
	return <div className="card d-felx align-items-center c-pointer border-0 rounded-lg mb-2">
		<img src={img} style={{ width: "100px", height: "100px", paddingTop: "20px" }} className="card-img-top" alt="..." />
		<div className="card-body">
			<h5 className="card-title text-center  d-flex flex-column justify-content-center">{title}</h5>
			<p className="card-text text-center d-flex flex-column justify-content-center">{text}</p>
		</div>
	</div >
}

export default () => {
	return <div className="row">
		<div className="col-12 col-md-4 col-lg-3">
			<BenefitsCard
				img={Benefit1}
				title="Achieve experience excellence."
				text="Create As-Is and To-Be journey map, identify improvement ideas and execute those ideas."
			/>
		</div>
		<div className="col-12 col-md-4 col-lg-3">
			<BenefitsCard
				img={Benefit2}
				title="Clearly define the service offerings."
				text="Draw and articulate the service offerings to your customers and enhance the customer experience."
			/>
		</div>
		<div className="col-12 col-md-4 col-lg-3">
			<BenefitsCard
				img={Benefit3}
				title="Support Operational Excellence."
				text="Enable current-state insights, improvement opportunity analysis,and better decision making."
			/>
		</div>
		<div className="col-12 col-md-4 col-lg-3">
			<BenefitsCard
				img={Benefit4}
				title="See the big picture."
				text="Develop a clear vision of the future by mapping end-to-end of a journey."
			/>
		</div>
		<div className="col-12 col-md-4 col-lg-3">
			<BenefitsCard
				img={Benefit5}
				title="Powerful visual communication."
				text="Increate the retention – 80% of what we see, 20% of what we read and 10% of what we hear."
			/>
		</div>
		<div className="col-12 col-md-4 col-lg-3">
			<BenefitsCard
				img={Benefit6}
				title="Realize benefits faster."
				text="Involve everyone, get ideas and easily implement those ideas."
			/>
		</div>
		<div className="col-12 col-md-4 col-lg-3">
			<BenefitsCard
				img={Benefit7}
				title="Increase productivity."
				text="Organize everything in one place to complete your improvement project in one place and execute faster across distributed teams."
			/>
		</div>
		<div className="col-12 col-md-4 col-lg-3">
			<BenefitsCard
				img={Benefit8}
				title="Better Customer Experiences."
				text="Visualize and validate different ideas and enhance your customer experience."
			/>
		</div>
	</div>
}
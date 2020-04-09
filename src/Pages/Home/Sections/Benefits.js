import React from "react";
import Achieveexperienceexcellence from "../../../assets/images/Home/Achieveexperienceexcellence.svg"
import Clearlydefinetheserviceofferings from "../../../assets/images/Home/Clearlydefinetheserviceofferings.svg"
import SupportOperationalExcellence from "../../../assets/images/Home/SupportOperationalExcellence.svg"
import Seethebigpicture from "../../../assets/images/Home/Seethebigpicture.svg"
import Powerfulvisualcommunication from "../../../assets/images/Home/Powerfulvisualcommunication.svg"
import Realizebenefitsfaster from "../../../assets/images/Home/Realizebenefitsfaster.svg" 
import Increaseproductivity from "../../../assets/images/Home/Increaseproductivity.svg"
import BetterCustomerExperiences from "../../../assets/images/Home/BetterCustomerExperiences.svg"
import Benefit9 from "../../../assets/images/Home/a.png"
const BenefitsCard = ({ img, title, text }) => {
	return <div className="card d-felx align-items-center c-pointer border-0 rounded-lg mb-2 "style={{ backgroundColor:"#52527a",width:"320px",height:"320px" , marginLeft:"20px"}}>
		<img src={img} style={{ width: "100px", height: "100px" ,padding:"10px" , marginBottom:"10px",backgroundColor:"#52527a"}} className="card-img-top" alt="..." />
		<div className="card-body">
			<h5 className="card-title text-center  d-flex flex-column justify-content-center" style={{color:"white"}}>{title}</h5>
			<p className="card-text text-center d-flex flex-column justify-content-center"style={{color:"white"}}>{text}</p>
		</div>
	</div >
}

export default () => {
	return <div className="container" >
	
	<div className="row">
				<div className="col-12 col-md-4">
			<BenefitsCard 
				img={Achieveexperienceexcellence}
				title="Achieve experience excellence"
				text="Create As-Is and To-Be journey map, identify improvement ideas and execute those ideas."
			/>
		</div>
				<div className="col-12 col-md-4">
			<BenefitsCard
				img={Clearlydefinetheserviceofferings}
				title="Clearly define the service offerings."
				text="Draw and articulate the service offerings to your customers and enhance the customer experience."
			/>
		</div>
				<div className="col-12 col-md-4">
			<BenefitsCard
				img={SupportOperationalExcellence}
				title="Support Operational Excellence."
				text="Enable current-state insights, improvement opportunity analysis,and better decision making."
			/>
		</div>
		</div>
		
		<	div className="row">
			<div className="col-12 col-md-4">
			<BenefitsCard
				img={Seethebigpicture}
				title="See the big picture."
				text="Develop a clear vision of the future by mapping end-to-end of a journey."
			/>
		</div>
			<div className="col-12 col-md-4">
			<BenefitsCard
				img={Powerfulvisualcommunication}
				title="Powerful visual communication."
				text="Increate the retention – 80% of what we see, 20% of what we read and 10% of what we hear."
			/>
		</div>
			<div className="col-12 col-md-4">
				
			<BenefitsCard
				img={Realizebenefitsfaster}
				title="Realize benefits faster."
				text="Involve everyone, get ideas and easily implement those ideas."
			/>
			</div>
			
		</div>
			<div className="row">
				<div className="col-12 col-md-4">
					<BenefitsCard
					img={Increaseproductivity}
					title="Increase productivity."
					text="Organize everything in one place to complete your improvement project in one place and execute faster across distributed teams."
					/>
				</div>
				
				<div className="col-12 col-md-4">
					<BenefitsCard
					img={BetterCustomerExperiences}
					title="Better Customer Experiences."
					text="Visualize and validate different ideas and enhance your customer experience."
					/>
				</div>
				<div className="col-12 col-md-4">
					<BenefitsCard
					img={Benefit9}
					title="Realize the Yackit potential of everyone"
					text="Involve everyone ,connect and get insights and ideas across teams from any location"
					/>
				</div>
			</div>
	
			</div>
}
	
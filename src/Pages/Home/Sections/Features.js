import React from "react";
import FeatureImg1 from "../../../assets/images/Home/feature-1.png"
import FeatureImg2 from "../../../assets/images/Home/feature-2.png"
import FeatureImg3 from "../../../assets/images/Home/feature-3.png"
import FeatureImg4 from "../../../assets/images/Home/feature-4.svg"
import FeatureImg5 from "../../../assets/images/Home/feature-5.webp"
import FeatureImg6 from "../../../assets/images/Home/feature-6.jpg"
//import Features from "./Features";

const PillTabs = ({ image, index, title, subtitle }) => {
	return <div
		className={`tab-pane fade show ${index === "1" && "active"}`}
		id={`v-pills-tab-${index}`}
		role="tabpanel"
		aria-labelledby={`v-pills-${index}`}
	>
		<div
			className="d-flex flex-column col-lg-10 col-12 align-items-center text-center justify-content-center mx-auto p-0"
		>
			<div
				className={`d-flex col-lg-10 col-12 col-md-12 features-container key-feature-image-container py-5 px-3 v-pills-bg-${index}`}>
				<img alt="" src={image}
					className="overview-image key-feature-image px-4"
				/>
			</div>
			<p className="h2 my-3 font-weight-regular">{title}</p>
			<p className="text-justify ">
				{subtitle}
			</p>
		</div >
	</div>
}

export default () => {
	return <section className="Features">
		
	<div className="row">
		<div className="col-12 col-md-8">
			<div className="tab-content" id="v-pills-tabContent">
				<PillTabs
					index="1"
					image={FeatureImg1}
					title='Real-time collaboration'
					subtitle="Comments and discussions in a customer journey map."
				/>
				<PillTabs
					index="2"
					image={FeatureImg2}
					title="Audit log"
					subtitle="Trace all change to a diagram."
				/>
				<PillTabs
					index="3"
					image={FeatureImg3}
					title="Connected maps"
					subtitle="Avoid confusion and duplication by linking related journey maps."
				/>
				<PillTabs
					index="4"
					image={FeatureImg4}
					title="Export your maps in multiple formats"
					subtitle="Export to PDF, PNG or CSV and Create impactful presentations."
				/>
				<PillTabs
					index="5"
					image={FeatureImg5}
					title="Secure cloud storage"
					subtitle="No need to worry on missing documents."
				/>
				<PillTabs
					index="6"
					image={FeatureImg6}
					title="Easy admin control"
					subtitle="Quick setup, configuration and governance."
				/>
			</div>
		</div>

		<div className="col-12 col-md-4">
			<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
				<a className="nav-link active" id="v-pills-1" data-toggle="pill" href="#v-pills-tab-1"
					role="tab" aria-controls="v-pills-home">
					Real time collaboration
				</a>
				<a className="nav-link" id="v-pills-2" data-toggle="pill" href="#v-pills-tab-2" role="tab"
					aria-controls="v-pills-profile">
					Audit log
				</a>
				<a className="nav-link" id="v-pills-3" data-toggle="pill" href="#v-pills-tab-3" role="tab"
					aria-controls="v-pills-messages">
					Connected maps
				</a>
				<a className="nav-link" id="v-pills-4" data-toggle="pill" href="#v-pills-tab-4" role="tab"
					aria-controls="v-pills-settings">
					Export your maps in multiple formats
				</a>
				<a className="nav-link" id="v-pills-5" data-toggle="pill" href="#v-pills-tab-5" role="tab"
					aria-controls="v-pills-settings">
					Secure cloud storage
				</a>
				<a className="nav-link" id="v-pills-6" data-toggle="pill" href="#v-pills-tab-6" role="tab"
					aria-controls="v-pills-settings">
					Easy admin control
				</a>
			</div>
		</div>
	</div>
	</section>
}
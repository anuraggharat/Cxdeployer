import React from "react";
import Banner1 from "../../../assets/images/Home/CX-deployer-banner-1.png"
import Banner2 from "../../../assets/images/Home/CX-deployer-banner-2.png"
import Banner3 from "../../../assets/images/Home/CX-deployer-banner-3.png"


const Overlay = () => <div style={{ width: "100% ", height: "100%", backgroundColor: "#f8f9fa85"}}></div>

// #0a1d44 top
// #3360d9

export default () => {

	return <div  backgroundImage= 'linear-gradient("to bottom", "#430089","#82ffa1")' style={{width:"100%",height:"10%"}}  >
	
	<div id="carousel" className="carousel slide" data-ride="carousel"  >
	
		<ol className="carousel-indicators"  >
		
			<li data-target="#carousel" data-slide-to="0" className="active"></li>
			<li data-target="#carousel" data-slide-to="1"></li>
			<li data-target="#carousel" data-slide-to="2"></li>
			{/* <li data-target="#carousel" data-slide-to="3"></li>
			<li data-target="#carousel" data-slide-to="4"></li>
			<li data-target="#carousel" data-slide-to="5"></li> */}
			
		</ol>
		
		<div className="carousel-inner" >
		
			<div className="carousel-item active" data-interval="3000" >
				<div style={styles.carouselImage}> Collaborate and Map the current Experience</div>
				<div style={{ backgroundImage: `url(${Banner1})`, ...styles.backgroundImage }}></div>
			</div>
			<div className="carousel-item" data-interval="3000">
				<div style={{ backgroundImage: `url(${Banner2})`, ...styles.backgroundImage,position: "relative" }}>
				<div style={styles.carouselImage}>Capture ideas to improve experience</div>
			
				</div>
			</div>
			<div className="carousel-item" data-interval="3000">
				<div style={{ backgroundImage: `url(${Banner3})`, ...styles.backgroundImage,position: "relative" }}>
				<div style={styles.carouselImage}>Exceute the Best idea and map the future Experience</div>
				</div>
			</div>
			
			
		</div>

		<a className="carousel-control-prev text-dark mr-3" href="#carousel" role="button" data-slide="prev">
			
			<div className="fas fa-chevron-left"></div>
		</a>
		<a className="carousel-control-next text-dark" href="#carousel" role="button" data-slide="next">
			<div className="fas fa-chevron-right"></div>
		</a>
		<header className="masthead"  >
			<div className="container" >
				<div className="row">
					<div className="col-12 col-lg-6 pl-5">
						<div className="intro-text " style={{padding:"60px 0px 10px"}}>
							<div className="intro-lead-in text-uppercase "><font style={{  fontFamily:"arial", color:"blue" }}><strong>Transform your customer experience	</strong> </font></div>
							<div className="intro-desc">
								<font style={{fontFamily:"Arial"}}>
								The Design thinking platform  for you  and your team  for Designing personas and business models,mapping customer journeys,experience innovation and excution to improve customer experience.</font>
							</div>
							<div style={{textAlign: "center"}} >							
								<a rel="noopener noreferrer" 
							href="http://app.cxdeployer.com/#/" 
							target="_blank" className="btn btn-primary" style={{ zIndex: "100", align:"left", width:"10"}}>
								<font color="white">Try for free</font></a>
							<h6 color= "Black" style={{ fontSize: "10px",marginLeft:"48px 48px 5px 5px",zIndex: "100"}}><sub>No Credit Card Required!</sub></h6>
							</div>

						
						</div>
					</div>
				</div>
			</div>
		</header>
	</div>
	
	</div>
}

const styles = {
	backgroundImage: {
		
		backgroundColor:"blue",
		backgroundSize: "cover",
		backgroundPosition: "center",
		minWidth: "100wh",
		height: "100vh"
		
	},
	carouselImage: {  
		position:"absolute" ,
		left: "50%",
		top: "10%",
		width: "100%",
		
		textalign: "center",
		fontsize: "18px",
		fontFamily:"Arial Rounded MtT Bold",
		color:"#4da6ff",
		fontSize:"28px" ,
		
	}
}
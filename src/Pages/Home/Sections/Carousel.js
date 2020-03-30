import React from "react";
import Banner1 from "../../../assets/images/Home/CX-deployer-banner-1.png"
import Banner2 from "../../../assets/images/Home/CX-deployer-banner-2.png"
import Banner3 from "../../../assets/images/Home/CX-deployer-banner-3.png"
import Banner4 from "../../../assets/images/Home/CX-deployer-banner-4.png"
import Banner5 from "../../../assets/images/Home/CX-deployer-banner-5.png"
import Banner6 from "../../../assets/images/Home/CX-deployer-banner-6.png"

const Overlay = () => <div style={{ width: "100%", height: "100%", backgroundColor: "#f8f9fa85" }}></div>

export default () => {
	return <div id="carousel" className="carousel slide" data-ride="carousel">
		<ol className="carousel-indicators">
			<li data-target="#carousel" data-slide-to="0" className="active"></li>
			<li data-target="#carousel" data-slide-to="1"></li>
			<li data-target="#carousel" data-slide-to="2"></li>
			<li data-target="#carousel" data-slide-to="3"></li>
			<li data-target="#carousel" data-slide-to="4"></li>
			<li data-target="#carousel" data-slide-to="5"></li>
		</ol>
		<div className="carousel-inner">
			<div className="carousel-item active" data-interval="8000">
				<div style={{ backgroundImage: `url(${Banner1})`, ...styles.backgroundImage }}>
					<Overlay />
				</div>
			</div>
			<div className="carousel-item" data-interval="8000">
				<div style={{ backgroundImage: `url(${Banner2})`, ...styles.backgroundImage }}>
					<Overlay />
				</div>
			</div>
			<div className="carousel-item" data-interval="8000">
				<div style={{ backgroundImage: `url(${Banner3})`, ...styles.backgroundImage }}>
					<Overlay />
				</div>
			</div>
			<div className="carousel-item" data-interval="8000">
				<div style={{ backgroundImage: `url(${Banner4})`, ...styles.backgroundImage }}>
					<Overlay />
				</div>
			</div>
			<div className="carousel-item" data-interval="8000">
				<div style={{ backgroundImage: `url(${Banner6})`, ...styles.backgroundImage }}>
					<Overlay />
				</div>
			</div>
			<div className="carousel-item" data-interval="8000">
				<div style={{ backgroundImage: `url(${Banner5})`, ...styles.backgroundImage, transform: "scaleX(-1)" }}>
					<Overlay />
				</div>
			</div>
		</div>
		<a className="carousel-control-prev text-dark mr-3" href="#carousel" role="button" data-slide="prev">
			<div className="fas fa-chevron-left"></div>
		</a>
		<a className="carousel-control-next text-dark" href="#carousel" role="button" data-slide="next">
			<div className="fas fa-chevron-right"></div>
		</a>
		<header className="masthead">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-6 pl-5">
						<div className="intro-text">
							<div className="intro-lead-in text-uppercase">Transform your customer experience</div>
							<div className="intro-desc">
								Map any experience and create journey maps in fun, flexible, visual way and improve customer experience using our cloud-based digital thinking platform.
							</div>
							<a rel="noopener noreferrer" href="http://app.cxdeployer.com/#/" target="_blank" className="btn btn-outline-dark" style={{ zIndex: "100" }}>Sign Up</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	</div>
}

const styles = {
	backgroundImage: {
		backgroundSize: "cover",
		backgroundPosition: "center",
		minWidth: "100wh",
		height: "100vh"
	},
	lightOverlay: {

	}
}
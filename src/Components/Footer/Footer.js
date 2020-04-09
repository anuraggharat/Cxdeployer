import React from 'react';
import "./Footer.css";
import Logo from "../../assets/images/logo.png";
import footerwaa from "../../assets/images/Home/footerwaa.png";

export default () => {    
	return (   
		/* <!--FOOTER  --> */
		<footer className='custom-footer col-sm-12' >
				<div className="row" style={{margin:"30px 30px 30px 30px"}}>
					<div className="col">
					<img src={Logo} alt="Logo" width="150" height="80" />
						<p style={{color:"white"}}>The only one platform you need to transform your customer experience</p>
					
					</div>
					<div className="col">


					</div>
					<div className="col">
						<br></br>
					
					<a href="www.facebook.com"><img src={footerwaa} alt="footerwa"   width="180px" height="60px" style={{ textAlign:"right", marginLeft:"50%"}} /></a>
					</div>
{/*1nd  Row  div close */}
				</div>
				<div className="row" >
				
				
				<div className="col"> </div>
				
				
				<div className="col-6 ">
				<div class="d-flex text-strong">
				
  				<div class="p-2  flex-fill text-white" ><a class="card-link text-white" data-toggle="collapse" href="/Cookies/#collapseOne">Terms of Use</a> </div>
  				<a class="p-2  flex-fill text-white" href="/Cookies">Privacy Policy</a>
  				<a class="p-2  flex-fill text-white" href="/Cookies">Cookie Policy</a>
				</div>
				</div>
				
				<div className="col"></div>
					
{/*2nd  Row  div close */}
				</div>
				

			{/* <div className='container px-0 py-4'>
				<div className="row d-flex align-items-center">
					<div className="col-12 col-lg-4 mb-3">
						<img src={Logo} alt="Logo" width="150" height="50" />
						<p style={{color:"white"}}>The only one platform you need to transform your customer experience</p>
						<div className="footer-link">
						
							<a className="js-scroll-trigger" href="Cookies">Cookies </a>
							<i className="fab fa-facebook-square"></i>
						</div>
					</div>
					<div className="col-12 col-lg-4 mt-3 mt-lg-0">
						
					</div>
					<div className="col-12 col-lg-4 mt-0 mt-lg-0">
						<img src={footerwaa} alt="footerwa" class="ml-lg mt-0 rectangle" width="180px"  height="80" float="right|top"  position="absolute" top= "0px" right= "0px" left="1080px"  />
						</div>
					</div>
				</div> */}
		</footer >
	)
}

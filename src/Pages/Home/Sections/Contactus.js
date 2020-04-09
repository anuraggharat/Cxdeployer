import React, { useState } from "react";
import Livechat from "../../../assets/images/Home/Livechat.svg"
import Schedulemeeting from "../../../assets/images/Home/Schedulemeeting.svg"
import Submitrequest from "../../../assets/images/Home/Submitrequest.svg"

export default () => {
	
    const [isYearly, setIsYearly] = useState(true);
    
    // return <section className="Contactus">
	// 	<div id="Contactus" className="mt-5">
	// 				<Aboutus />
				
	// 			</div>
 return <div>
 <div >
 <div class="jumbotron text-light " style={{textAlign:"Center",backgroundColor:"#005688"}}>
 <h1> Contact Us </h1> 

 <hr size="30" color="red" width="300px"></hr>
 </div>
 <br></br>

</div>

 
     <div class="card-deck">
  <div className="card">
    <img className="card-img-top" src={Livechat}style={{ width: "100px", height: "100px" ,padding:"10px" , marginBottom:"10px"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Live Chat</h5>
      <p className="card-text">Wait time: less than 2 minutes<br></br><p></p>

                            Working hours: 8:00am - 3:00pm</p>
                            <div style={{margin:"8px 8px 10px 50px"}} >							
								<a rel="noopener noreferrer" 
							href="http://whatsapp.com" 
							target="_blank" class="btn btn-light" style={{ zIndex: "100", align:"Center"}}>
								<font color="black">Availabe Soon
                            </font></a>
					</div>
     
    </div>
  
  </div>
  <div className="card">
    <img className="card-img-top" src={Schedulemeeting}style={{ width: "100px", height: "100px" ,padding:"10px" , marginBottom:"10px"}} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Schedule a meeting</h5>
      <p className="card-text">
                        Mail us at contact@tech.edunomics.in :<br></br><p></p>

                        Get a call within 24hrs</p>
                        <div style={{margin:"8px 8px 10px 70px"}} >							
								<a rel="noopener noreferrer" 
							href="http://app.cxdeployer.com/#/" 
							target="_blank" class="btn btn-light" style={{ zIndex: "100", align:"Center"}}>
								<font color="black">Schedule</font></a>
					</div>
     
    </div>
    </div>
  <div className="card">
    <img className="card-img-top" src={Submitrequest}style={{ width: "100px", height: "100px" ,padding:"10px" , marginBottom:"10px"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Submit a request</h5>
      <p className="card-text">Send a request directly to us!<br></br><p></p>

                        Maximun response time: within 1 business day</p>
                        <div style={{margin:"8px 8px 10px 70px"}} >							
								<a rel="noopener noreferrer" 
							href="http://app.cxdeployer.com/#/" 
							target="_blank" class="btn btn-light" style={{ zIndex: "100", align:"Center"}}>
								<font color="black">Submit</font></a>
					</div>
  
    </div>
  
</div>
</div>

</div>

}



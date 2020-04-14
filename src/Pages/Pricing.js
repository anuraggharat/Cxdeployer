import React, { useState, useEffect } from "react";
import PricingFeatures from "./PricingFeatures";
import "../index.css"
import { render } from "@testing-library/react";
import $ from 'jquery';
import FeatureImg6 from "../assets/images/Home/free.svg";
import professional from "../assets/images/Home/professional.svg";
import business from "../assets/images/Home/business.svg";
import enterprise from "../assets/images/Home/enterprise.svg";





export default () => {
  const [isYearly, setIsYearly] = useState(true);
  useEffect(()=>{
    
      $("#toggle").click();
  
  })

  return (
    <section className="Pricing" id="pricinghome" style={{color: isYearly ? 'col1' : 'col2'}}>
      
      <div className="container mt-5">

      <div className="h3  pricing-lead-fourth text-center" >
       <font color=" #999999">CXDeployer</font>
        </div>
        <div className="h3  pricing-lead text-center">
          Simple pricing for customer<br></br> experience transformation.
        </div>
        <div className="h4  pricing-lead-second text-center">
       <font color="#8c8c8c"> No fees to get started. You don’t even have to input a credit card.</font>
        </div>
        <p></p><br></br>
        <div className="row" style={{marginLeft:"39%"}}>
        <div className="btn-group" role="group">
              <button
                type="button"
                onClick={setIsYearly.bind(this, false)}
                className={`btn border btn-${isYearly ? "light" : "primary"}`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={setIsYearly.bind(this, true)}
                className={`btn border btn-${isYearly ? "primary" : "light"}`}
              >
                    Annualy
              </button>
            </div>
        <div id ="menu1">
        <font color="blue"><strong ><div ></div>  </strong></font>
</div>

          
          {/* <label class="switch">
          <input type="checkbox"  id="toggle"/>
        <span class="slider round"></span>

        </label>
      
      <div id ="menu2">
<     font color="blue"><strong>Annualy</strong></font>
      </div> */}
        

          


          {/* <div className="col-12 text-center mt-4 ">
            <div className="btn-group" role="group">
              <button
                type="button"
                onClick={setIsYearly.bind(this, false)}
                className={`btn border btn-${isYearly ? "light" : "primary"}`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={setIsYearly.bind(this, true)}
                className={`btn border btn-${isYearly ? "primary" : "light"}`}
              >
                Yearly (save 20%)
              </button>
            </div>
          </div> */}
        </div>
        <div className="row mt-5">
          <div className="col-lg-3 mb-3 mb-lg-0">
                <div class="card-group">
                  <img class="card-img-top" src={FeatureImg6} alt="Card image" style={{margin:"10px 15px 2px 10px"}}  />
                  <br></br>
                     <div class="card-body text-center">
                       <h4 class="card-title">Free</h4>
                       <hr></hr>
                       <p class="card-text">Get started and try our design thinking tools. Upgrade at any time.</p>
                       <br></br>
                       <h5 className="card-price text-center">
                       <h1><font color="blue"> <sup >$</sup>{isYearly ?0 : 0}</font></h1>
                    
                       </h5> 
                       <small><strong>per user /Monthly</strong></small>
                      <div className="text-center">
                    <a href="#" class="btn btn-outline-primary ">Try for Free</a>
                    <hr color="blue"></hr>
                    
                    <div style={{}}>
                    
        <ul style={{textAlign:"left"}}>
        <small><strong>Free plan includes:</strong></small>
        <br></br>
        <i className="fa fa-check" style={{color:"lightgreen" }}></i>Up to 1 User <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Up to 1 Projects<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen" }}></i>Up to 1 Customer Journey Map<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Up to 1 Buisness Canvas Modal<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen" }}></i>Up to 1 Personas<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Export to PDF & PNG<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Up to 50MB Storage<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Includes Audit Trial<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Community Support<br></br><p></p>
        </ul>
        </div>
                </div>
          </div>
          </div>
          </div>
          <div className="col-lg-3 mb-3 mb-lg-0">
          <div class="card-group" >
    <img class="card-img-top" src={professional} alt="Card image" style={{margin:"10px 15px 6px 10px"}} />
    <br></br>
    <div class="card-body  text-center">
      <h4 class="card-title">Startup</h4>
      <hr></hr>
      <p class="card-text">For individuals, consultants and startups to digitize their design thinking workshps.</p>
      <br></br>
      <h5 className="card-price text-center">
                <h1><font color="blue"><sup >$</sup>{isYearly ?10 :12}</font> </h1>
              
                </h5> 
        <small><strong>per user /Monthly</strong></small>
                <div className="text-center">
        <a href="#" class="btn btn-outline-primary ">Subscribe</a>
        <hr  color="blue"></hr>
        
        <div style={{}}>
        <ul style={{textAlign:"left"}}>
        <small><strong>All Free features plus:</strong></small>
        <br></br>
        <i className="fa fa-check" style={{color:"lightgreen" }}></i>Up to 5 User<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Projects <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen" }}></i>Unlimited Customer Journey map<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Business canvas model<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen" }}></i>Unlimited Personas<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Idwations <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Kanban Boards <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Comments <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Views <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Export to PDF & PNG<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Up to 1 GB Storage<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Includes Audit Trial<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>E-mail Support<br></br><p></p>
        </ul>
        </div>
        </div>
         </div>
  </div>
          </div>
          <div className="col-lg-3 mb-3 mb-lg-0">
          <div class="card-group " >
    <img class="card-img"  src={business} alt="Card image" style={{margin:"10px 15px 16px 10px"}}/>

    <div class="card-body  text-center">
      <h4 class="card-title ">Growth</h4>
      <hr></hr>
      <p class="card-text ">For growing organization and consulting teams to create and deliver design thinking.</p>
      <br></br>
      <h5 className="card-price text-center">
                <h1><font color="blue"> <sup >$</sup>{isYearly ?20 : 24}</font></h1>
                  
                </h5> 
        <small><strong>per user /Monthly</strong></small>
                <div className="text-center">
        <a href="#" class="btn btn-outline-primary ">Subscribe</a>
        <hr  color="blue"></hr>
    
      <div style={{}}>
        <ul style={{textAlign:"left" ,padding:"0px 10px 20px"}}>
        <small><strong>All Professional features plus:</strong></small>
        <br></br>
        <i className="fa fa-check" style={{color:"lightgreen" }}></i>Unlimited User<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Projects <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen" }}></i>Unlimited Customer Journey map<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Business canvas model<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen" }}></i>Unlimited Personas<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Idwations <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Kanban Boards <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Comments <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Views <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Export to PDF & PNG<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Storage<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Includes Audit Trial<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i> Live chat & E-mail Support<br></br><p></p>
        </ul>
        </div>
        </div>
         </div>
  </div>
          </div>
          <div className="col-lg-3 mb-3 mb-lg-0">
          <div class="card-group">
    <img class="card-img" src={enterprise} alt="Card image" style={{margin:"10px 15px 28px 10px"}} />
    
    <div class="card-body text-center">
      <h4 class="card-title">enterprise</h4>
      <hr></hr>
      
      <p class="card-text">For large organization that belives in design thinking as a way of life.</p>
      
          <br></br>
         
       <h5 className="card-price text-center">
       <font color="blue">  Install on your private server </font>
                </h5> 
                
        <small><strong>per user /Monthly</strong></small>
        <font className="period" size="2px" ></font>
        <div className="text-center">
        <a href="#" class="btn btn-outline-primary" target="_blank" title="Try for free">Contact Us</a>
        <hr  color="blue"></hr>
      
        <div style={{}}>
        <ul style={{textAlign:"left"}}>
        <small><strong>All Business features plus:</strong></small>
        <br></br>
        <i className="fa fa-check" style={{color:"lightgreen" }}></i>Unlimited User<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Projects <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen" }}></i>Unlimited Customer Journey map<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Business canvas model<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen" }}></i>Unlimited Personas<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Idwations <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Kanban Boards <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Comments <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Views <br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Export to PDF & PNG<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Unlimited Storage<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Includes Audit Trial<br></br><p></p>
        <i className="fa fa-check" style={{color:"lightgreen"}}></i>Single Sign-On Support<br></br><p></p>
        </ul>
        </div>
        <p></p>
        <br></br>
        <p></p>
        <br></br>
        <br></br>
        <p></p>
        <p></p><br></br>
        
        </div>
         </div>
  </div>
          </div>
        </div>
      </div>
      <br></br>
      <div id="pricing" className="mt-5">
        <PricingFeatures />
      </div>
      <div class="container" >
        
      <div className="col-12 text-justify col-md-10 m-auto">
        
          <div className="mt-3">
            <p>
         <h1>Frequently Asked Questions</h1>  <br></br> 
         <strong><font color="#2e4056" fontsize="18px">  Here are the answers to the most common questions we get</font>
         </strong>
       <br></br>
       </p>
<p>
<h5>What if I need to add someone new to my team?</h5> 
<font color="#2e4056" fontsize="16px">If you need to add new members, you can do that. The value charged per new user will be the same for the other members included in the plan chosen by your company
</font>
</p>
<p>
<h5>Can I change plans anytime I want? How long are the contracts?</h5>
<font color="#2e4056" fontsize="16px">CXDeployer plans work on a month-to-month basis. You can start/stop or make changes to your plan any time you want – however, we won’t give refunds for cancellation or plan downgrades.
</font>
</p><p>
<h5>Do I need any advanced technical skills or professional support services to implement CXDeployer?</h5>
<font color="#2e4056" fontsize="16px">CXDeployer is designed to be simple and easy, allowing anyone to configure their own processes and workflows. However, in large and complex operations some companies like to have the support of our professional consultants – in this case we can recommend companies that offer those services.
</font>
</p><p>
<h5>Will my data be private and safe?</h5>
<font color="#2e4056" fontsize="16px">Short answer: Yes. Long answer: take a look at all the security measures we take to protect your business and your customers by checking out our security whitepaper.
</font>
</p><p>
<h5>Does CXDeployer integrate with other systems and applications?</h5>
<font color="#2e4056" fontsize="16px">You can integrate CXDeployer with over 500 web apps using Zapier. Also, you can pretty much build anything you want via our open developer API.
</font>
</p>
          
          </div>
          </div>
          </div>
    </section>
    
  );
};

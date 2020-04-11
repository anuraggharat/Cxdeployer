import React from "react";
import BMC from "../../../assets/images/Home/bmcsc.jpg";
import Persona from "../../../assets/images/Home/personasc.jpg";
import CJM from "../../../assets/images/Home/cjmsc.jpg";
import KBB from "../../../assets/images/Home/kbb.png";
import Ideate from "../../../assets/images/Home/ideate.png";

export default () => {
  return (
    <div>
      <div>
        <h1 className="text-center">What is CXDeployer?</h1>
        <div className="text-center px-lg-5">
          CXDeployer is a cloud based all-in-one solution that enables design
          thinking professionals to deploy, and transform the customer
          experience by creating, sharing and presenting the persona map,
          business model canvas, customer journey map, ideation and execution
          management of the best idea.
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-md-6 my-5 d-flex justify-content-center flex-column">
          <h1>Map the persona</h1>
          <p>
            Know your custome or users by mapping ,their goals, aspirations,
            lifestyle, interest and digital habits. What matters most to the
            persona and whose experience should be enhanced?
          </p>
        </div>
        <div className="col-12 col-md-6 my-5">
          <img src={Persona} alt="persona" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 my-5">
          <img src={BMC} alt="bmc" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 my-5 d-flex justify-content-center flex-column">
          <h1>Design the value proposition</h1>
          <p>
            Use the business model canvas to identify and design values an
            organization should deliver to satisfy needs of the customer. >What
            customer wants to achieve? digital habits.
          </p>
        </div>
        <div className="col-12 col-md-6 my-5 d-flex justify-content-center flex-column">
          <h1>Map the customer journey</h1>
          <p>
            Map the moments of truth, touchpoints, activities, interactions and
            customer experience and storyboard the journey. What is the start
            and end point of the experience?
          </p>
        </div>
        <div className="col-12 col-md-6 my-5">
          <img src={CJM} alt="cjm" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 my-5">
          <img src={KBB} alt="kbb" className="img-fluid" />
        </div>
        <div className="col-md-6 my-5 d-flex justify-content-center flex-column">
          <h1>Ideate on the experience</h1>
          <p>
            Engage everyone, capture great ideas and tap the untapped knowledge
            by building on other’s ideas to transform the customer experience.
            What solutions will lead to enhanced customer experience?
          </p>
        </div>
        <div className="col-md-6 my-5 d-flex justify-content-center flex-column">
          <h1>Manage execution of the best idea</h1>
          <p>
            Project manage the execution of the bestidea, prototype, accelerate
            idea toimplementation and continuously improve the experience. What
            is the time to market to realize thetransformed experience?
          </p>
        </div>
        <div className="col-12 col-md-6 my-5">
          <img src={Ideate} alt="cjm" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

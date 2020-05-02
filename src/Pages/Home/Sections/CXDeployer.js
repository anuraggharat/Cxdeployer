import React from "react";
import Arrow from "../../../assets/Home/Arrow1.2.png";
import BMC from "../../../assets/Home/CX_deployer-step-2.svg";
import Persona from "../../../assets/Home/CX_deployer-step-1.svg";
import CJM from "../../../assets/Home/CX_deployer-step-3.svg";
import KBB from "../../../assets/Home/CX_deployer-step4.svg";
import Ideate from "../../../assets/Home/CX_deployer-step-5.svg";

const Section = ({ img, title, text, step, isReversed }) => (
  <div className="row ">
    <div
      className={`col-12 col-md-6 my-5 d-flex justify-content-center flex-column ${
        isReversed && "order-2 pr-5"
      }`}
    >
      <div className="step h4">{step}</div>
      <h1>{title}</h1>
      <p style={{ fontSize: "1.2em" }}>{text}</p>
    </div>
    <div className={`col-12 col-md-6 my-5 ${isReversed && "order-1"}`}>
      <img
        src={img}
        alt="persona"
        className="img-fluid"
        style={{ height: "300px" }}
      />
    </div>
  </div>
);

export default () => {
  return (
    <div className="pt-4">
      <div className="py-4">
        <h1 className="text-center">What is CXDeployer?</h1>
        <p className="text-center px-lg-5">
          CXDeployer is a cloud based all-in-one solution that enables design
          thinking professionals to deploy, and transform the customer
          experience by creating, sharing and presenting the persona map,
          business model canvas, customer journey map, ideation and execution
          management of the best idea.
        </p>
      </div>
      <Section
        title="Map the persona"
        text="Know your customer or users by mapping ,their goals, aspirations, lifestyle, interest and digital habits. What matters most to the persona and whose experience should be enhanced?"
        img={Persona}
        step="Step 1"
      />
      <div className="container d-none d-md-block">
        <img
          src={Arrow}
          alt=""
          style={{
            height: "200px",
            marginLeft: "40px",
          }}
        />
      </div>
      <Section
        title="Design the value proposition"
        text="Use the business model canvas to identify and design values an organization should deliver to satisfy needs of the customer. >What customer wants to achieve? digital habits."
        img={BMC}
        step="Step 2"
        isReversed
      />
      <div className="container d-none d-md-block">
        <img
          src={Arrow}
          alt=""
          style={{
            height: "200px",
            marginLeft: "40px",
            transform: "scaleX(-1)",
          }}
        />
      </div>
      <Section
        title="Map the customer journey"
        text="Map the moments of truth, touchpoints, activities, interactions and customer experience and storyboard the journey. What is the start and end point of the experience?"
        img={CJM}
        step="Step 3"
      />
      <div className="container d-none d-md-block">
        <img
          src={Arrow}
          alt=""
          style={{
            height: "200px",
            marginLeft: "40px",
          }}
        />
      </div>
      <Section
        title="Ideate on the experience"
        text="Engage everyone, capture great ideas and tap the untapped knowledge by building on other’s ideas to transform the customer experience. What solutions will lead to enhanced customer experience?"
        img={KBB}
        step="Step 4"
        isReversed
      />
      <div className="container d-none d-md-block">
        <img
          src={Arrow}
          alt=""
          style={{
            height: "200px",
            marginLeft: "40px",
            transform: "scaleX(-1)",
          }}
        />
      </div>
      <Section
        title="Manage execution of the best idea"
        text="Project manage the execution of the bestidea, prototype, accelerate idea toimplementation and continuously improve the experience. What is the time to market to realize thetransformed experience?"
        img={Ideate}
        step="Step 5"
      />
    </div>
  );
};

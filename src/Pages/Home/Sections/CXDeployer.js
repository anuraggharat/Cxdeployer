import React from "react";
import BMC from "../../../assets/Home/CX_deployer-step-2.svg";
import Persona from "../../../assets/Home/CX_deployer-step-1.svg";
import CJM from "../../../assets/Home/CX_deployer-step-3.svg";
import KBB from "../../../assets/Home/CX_deployer-step4.svg";
import Ideate from "../../../assets/Home/CX_deployer-step-5.svg";

const Section = ({ img, title, text, text2, step, isReversed }) => (
  <div className="row ">
    <div
      className={`col-12 col-md-6 my-5 order-lg-1 ${
        isReversed && "order-lg-3"
        }`}
    >
      <img
        src={img}
        alt="persona"
        className="img-fluid"
        style={{ height: "300px" }}
      />
    </div>
    <div
      className={`col-12 col-md-6 my-5 order-lg-2 d-flex justify-content-center flex-column ${
        isReversed && "order-2 pr-5"
        }`}
    >
      <div className="step h4">{step}</div>
      <h1>{title}</h1>
      <p style={{ fontSize: "1.2em" }}>{text}</p>
      <p style={{ fontSize: "1.2em" }}>{text2}</p>
    </div>
  </div>
);

export default () => {
  return (
    <div className="">
      <div className="py-5">
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
        text="Know your customer or users by mapping, their goals, aspirations, lifestyle, interest and digital habits."
        text2="What matters most to the persona and whose experience should be enhanced?"
        img={Persona}
        step="Step 1"
      />
      <Section
        title="Design the value proposition"
        text="Use the business model canvas to identify and design values an organization should deliver to satisfy needs of the customer. What customer wants to achieve?"
        text2="What customer wants to achieve?"
        img={BMC}
        step="Step 2"
        isReversed
      />
      <Section
        title="Map the customer journey"
        text="Map the moments of truth, touchpoints, activities, interactions and customer experience and storyboard the journey. What is the start and end point of the experience?"
        text2="What is the start and end point of the experience?"
        img={CJM}
        step="Step 3"
      />
      <Section
        title="Ideate on the experience"
        text="Engage everyone, capture great ideas and tap the untapped knowledge by building on other’s ideas to transform the customer experience. What solutions will lead to enhanced customer experience?"
        text2="What solutions will lead to enhanced customer experience?"
        img={KBB}
        step="Step 4"
        isReversed
      />
      <Section
        title="Manage execution of the best idea"
        text="Project manage the execution of the bestidea, prototype, accelerate idea toimplementation and continuously improve the experience. What is the time to market to realize thetransformed experience?"
        text2="What is the time to market to realize thetransformed experience?"
        img={Ideate}
        step="Step 5"
      />
    </div>
  );
};

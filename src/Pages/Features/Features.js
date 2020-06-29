import React from "react";
import Tick from "../../assets/Home/tick.png"
import Img1 from "../../assets/Features/1.png"
import Img2 from "../../assets/Features/2.png"
import Img3 from "../../assets/Features/3.png"
import Img4 from "../../assets/Features/4.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


export default () => {
AOS.init();

  return (
    <div className=" pt-5 bg-features">
      <div className="intro-text text-center py-md-5 mb-5 p-5">
        <div className="intro-desc mb-0">
          <h5>The only solution you need to </h5>
        </div>
        <div className="intro-lead-in text-uppercase ">
          <h1 className="text-first">
            <strong>Manage and Improve Your Customer’s Experience </strong>
          </h1>
        </div>
        <div className="intro-desc mt-5">
          The best integrated experience management and design thinking tool
          with all features to design personas, empathy mapping, journey
          mapping, business model canvas, capture ideas to improve the current
          experience and manage implementation of the best idea to realize the
          future experience.
        </div>
        <div style={{ textAlign: "center" }}>
          <a
            rel="noopener noreferrer"
            href="https://app.cxdeployer.com/#/"
            target="_blank"
            className="btn btn-first"
          >
            <font color="white">Try CXDeployer for free</font>
          </a>
        </div>
      </div>
      <div className="features-section gradient-1 p-5 ">
        <h3 className="text-center  font-italic">Persona</h3>
        <h2 className="text-center my-3 ">Design your customer’s persona</h2>
        <div className="row">
          <div className="col-12 col-md-6 mt-5  px-5 "
          >
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Create custom layout</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Upload pictures</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Rich Text Editor</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Multiple Persona views</h5>
            </div>
          </div>
          <div className="col-12 col-md-6 "          >
            <img src={Img3} className="img-fluid" alt="" 
              />
          </div>
        </div>
        <div className="text-center mt-3">
          <a
            rel="noopener noreferrer"
            href="https://app.cxdeployer.com/#/"
            target="_blank" className="btn bg-white primary-text shadow-lg p-4">DESIGN PERSONA ONLINE NOW</a>
        </div>
      </div>
      <div className="features-section p-5">
        <h3 className="text-center ">Empathy Map</h3>
        <h2 className="text-center my-3">Describe your customer’s thinking, feeling, fear, hope and dreams</h2>
        <div className="row">
        <div className="col-12 col-md-6  ">
            <img src={Img4} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-6 mt-5  p-5">
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Map empathy for multiple personas</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Compare and analyze empathy maps</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Intuitive platform with zero leaning curve</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>A complete activity log history</h5>
            </div>
          </div>

        </div>
        <div className="text-center mt-3">
          <a rel="noopener noreferrer"
            href="https://app.cxdeployer.com/#/"
            target="_blank" className="btn gradient-1 border-0 shadow-lg  p-4">CREATE EMPATHY MAP ONLINE NOW</a>
        </div>
      </div>
      <div className="features-section  gradient-1 p-5">
        <h3 className="text-center text-white">Business Model Canvas</h3>
        <h2 className="text-center text-white my-3">Design and analyze solution’s value proposition</h2>
        <div className="row">
          <div className="col-12 col-md-6 mt-5  p-5">
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Easy to organize in a page</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Add multiple cards per section</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Real time collaboration</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Comments and feedback</h5>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2 p-5">
            <img src={Img1} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="text-center mt-3">
          <a rel="noopener noreferrer"
            href="https://app.cxdeployer.com/#/"
            target="_blank" className="btn bg-white primary-text shadow-lg p-4">CREATE BUSINESS  MODEL CANVAS ONLINE NOW</a>
        </div>
      </div>
      <div className="features-section p-5">
        <h3 className="text-center ">Customer Journey Map</h3>
        <h2 className="text-center my-3">Visualize your customer’s experience and create professional looking journey map </h2>
        <div className="row">
          <div className="col-12 col-md-6 order-1 order-md-2">
            <img src={Img2} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-6 mt-5  ">
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Natural layout to quickly onboard  your team</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Export to PDF, PNG and SVG</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Multiple lane types – Phase, Card, Bubble, Line, Image and File</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Add visuals – icon and images</h5>
            </div>
          </div>
          
        </div>
        <div className="text-center mt-3">
          <a rel="noopener noreferrer"
            href="https://app.cxdeployer.com/#/"
            target="_blank" className="btn gradient-1 border-0 shadow-lg p-4">MAP CUSTOMER JOURNEY ONLINE NOW</a>
        </div>
      </div>
      {/* <div className="features-section">
        <h3 className="text-center ">Ideation</h3>
        <h2 className="text-center my-3">Involve and engage everyone to get ideas to improve customer experience </h2>
        <div className="row">
          <div className="col-12 col-md-6 mt-5 order-2 order-md-1">
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Share and build on each other’s ideas</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Crowd vote and score ideas</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Categorize by benefit type and tag ideas</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Post idea anonymously</h5>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2">
            <img src={Logo} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-secondary">TRY CXDEPLOYER NOW</button>
        </div>
      </div> */}
      {/* <div className="features-section">
        <h3 className="text-center ">Kanban Board</h3>
        <h2 className="text-center my-3">Manage tasks to implement the best improvement idea </h2>
        <div className="row">
          <div className="col-12 col-md-6 mt-5 order-2 order-md-1">
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Select from a ranges of improvement methodologies</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Pre-build tasks to get you started</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Set deadline to complete</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img src={Tick} alt="" className="img-fluid mr-5" width="40" height="40" />
              <h5>Drag and drop task as it progresses to easily change status</h5>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2">
            <img src={Logo} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-secondary">TRY CXDEPLOYER NOW</button>
        </div>
      </div> */}
    </div>
  );
};

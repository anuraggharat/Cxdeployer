import React from "react";
import Livechat from "../assets/Home/live chat.svg";
import Schedulemeeting from "../assets/Home/meeting.svg";
import Submitrequest from "../assets/Home/request.svg";

export default () => {
  return (
    <div>
      <div>
        <div
          class="jumbotron text-light "
          style={{ textAlign: "Center", backgroundColor: "rgb(22, 41, 80)" }}
        >
          <h1> Contact Us </h1>
          <hr size="30" color="red" width="300px"></hr>
        </div>
      </div>
      <div className="container mt-3">
        <div class="card-deck">
          <div className="card border-0 shadow-lg">
            <div className="d-flex justify-content-center">
              <img
                className="card-img-top pt-4"
                src={Livechat}
                style={styles.cardImg}
                alt="Card cap2"
                style={{ height: "180px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Live Chat</h5>
              <p className="card-text">Wait time: less than 2 minutes</p>
              <p> Working hours: 8:00am - 3:00pm</p>
            </div>
            <div class="card-footer mb-3 text-center bg-transparent border-top-0">
              <a
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=+919669911101"
                target="_blank"
                class="btn btn-primary"
              >
                Chat Now
              </a>
            </div>
          </div>
          <div className="card border-0 shadow-lg">
            <div className="d-flex justify-content-center">
              <img
                className="card-img-top pt-4"
                src={Schedulemeeting}
                style={styles.cardImg}
                alt="Card cap1"
                style={{ height: "180px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Schedule a meeting</h5>
              <p>Get a call within 24hrs</p>
            </div>
            <div class="card-footer mb-3 text-center bg-transparent border-top-0">
              <a
                rel="noopener noreferrer"
                href="https://app.cxdeployer.com/#/"
                target="_blank"
                class="btn btn-primary"
              >
                Schedule
              </a>
            </div>
          </div>
          <div className="card border-0 shadow-lg">
            <div className="d-flex justify-content-center">
              <img
                className="card-img-top pt-4"
                src={Submitrequest}
                style={styles.cardImg}
                alt="Card cap3"
                style={{ height: "180px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Submit a request</h5>
              <p className="card-text">Send a request directly to us!</p>
              <p>Maximun response time: within 1 business day</p>
            </div>
            <div class="card-footer mb-3 text-center bg-transparent border-top-0">
              <a
                rel="noopener noreferrer"
                href="mailto:anuraggharat55@gmail.com"
                target="_blank"
                class="btn btn-primary"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardImg: {
    width: "100px",
    height: "100px",
    padding: "10px",
    marginBottom: "10px",
  },
};

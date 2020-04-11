import React from "react";
import ScrollToTop from "./Components/ScrollTop";
import { Navbar, Footer } from "./Components";
import {
  Home,
  Pricing,
  Contactus,
  Cookies,
  PrivacyPolicy,
  TermsOfUse,
} from "./Pages";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // very important for Routing

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Pricing" component={Pricing} />
            <Route path="/Contactus" component={Contactus} />
            <Route path="/Cookies" component={Cookies} />
            <Route path="/privacypolicy" component={PrivacyPolicy} />
            <Route path="/terms" component={TermsOfUse} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;

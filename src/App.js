import React from 'react';
import { Navbar, Footer } from './Components';
import  {Home,Pricing, Contactus,Cookies} from './Pages';



import {BrowserRouter as Router, Route,Switch} from "react-router-dom";   // very important for Routing

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/Pricing" component={Pricing} />    
      <Route  path="/Contactus" component={Contactus} />  
      <Route  path="/Cookies" component={Cookies} /> 
      
      
      </Switch>
      
      <Footer />
      </Router>
    </div>
  );
}

export default App;

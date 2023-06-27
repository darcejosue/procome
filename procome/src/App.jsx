import React, { useState } from "react";
import "./App.css";

import Lateral from "./pages/lateral";
import Body from "./pages/main";
import Footer from "./pages/footer";

function App() {
  return (
  <div>
    <div className="row">
      <div className="col-3">
        {" "}
        <Lateral />
      </div>
      <div className="col-9">
      {" "}
        <Body />
      </div>
      
      
    </div>
    <Footer className="footer" />
  </div>
    
    
  );
}

export default App;

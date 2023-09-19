import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Lateral from "./pages/lateral";
import Body from "./pages/main";
import Footer from "./pages/footer";



function App() {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          {" "}
          <Lateral />
        </div>
        <div className="col-10">
          {" "}
            <BrowserRouter>
            <Body />
            </BrowserRouter>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;

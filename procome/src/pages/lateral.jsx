import React from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";

import "./../styles/buttons.css"
import "./../styles/general.css"

function Lateral() {
  return (
    <div className="panel-lateral">
      <div className="panel panel-logo"></div>

      <div className="container">
        <a href="/" className="button is-primary lateral-btn">Primero</a>
        <a href="/Any" className="button is-primary lateral-btn">Segundo</a>
        <button className="button is-danger lateral-btn">Trier</button>
        <button className="button is-primary lateral-btn">4</button>
        <button className="button is-primary lateral-btn">5</button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Lateral;

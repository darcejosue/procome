import React from "react";
import "./../styles/buttons.css"
import "./../styles/general.css"

function Lateral() {
  return (
    <div className="">
      <div className="panel panel-logo">Logo de la empresa</div>

      <div className="container">
        <button className="button is-primary lateral-btn">1</button>
        <button className="button is-primary lateral-btn">2</button>
        <button className="button is-primary lateral-btn">3</button>
        <button className="button is-primary lateral-btn">4</button>
        <button className="button is-primary lateral-btn">5</button>
      </div>
    </div>
  );
}

export default Lateral;

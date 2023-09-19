import React from "react";
import Router from "../routes/router";
import NuevoEmpleado from "./admin/pages/nuevoEmpleado";
import HorariosTurnos from "./admin/pages/horariosTurnos";


function Body() {
  return (
    <div>
      <br />
      <hr />
      <div >
        <HorariosTurnos></HorariosTurnos>      </div>
    </div>
  );
}

export default Body;

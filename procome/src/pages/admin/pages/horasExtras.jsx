import React from "react";
import "../style/horasExtras.css"


function HorasExtras({nombre, apellido}){
    const nombres = nombre;
    const apellidos = apellido;
    return(
        <div className="contenedor-he">
            
            <hr />
            <label htmlFor="" className="label" id="he_Nombres">Nombre</label>
            <input type="text" value={nombres} />
            <label htmlFor="" className="label" id="he_Nombres">Apellidos</label>
            <input type="text" value={apellidos} />
            <label htmlFor="" className="label" id="he_Nombres">Horas Extras Acumuladas</label>
            <input type="text" value={apellidos} />
        </div>
    )
}


export default HorasExtras;
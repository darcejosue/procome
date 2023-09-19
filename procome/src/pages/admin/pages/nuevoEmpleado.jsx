import React from "react";
import "../style/registro.css";


function NuevoEmpleado() {
  return (
    <div className="nuevoEmpleado">
      <div className="field">
        <label className="label">Nombres</label>
        <div className="control">
          <input className="input" type="text" placeholder="Nombres" />
        </div>

        <label className="label">Apellidos</label>
        <div className="control">
          <input className="input" type="text" placeholder="Apellidos" />
        </div>

        <label className="label">Correo Electronico</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="ejemplo@gmail.com"
          />
        </div>

        <label className="label">Numero de telefono</label>
        <div className="control">
          <input className="input" type="number" placeholder="Telefono" />
        </div>

        <label className="label">Cedula de identidad</label>
        <div className="control">
          <input className="input" type="text" placeholder="Cedula" />
        </div>

        <label className="label">Fecha de Nacimiento</label>
        <div className="control">
          <input className="input" type="text" placeholder="Cumpleaños" />
          </div>
        <label className="label">Direccion domiciliar</label>
        <div className="control">
          <input className="input" type="text" placeholder="Direccion" />
        </div>

        <label className="label">Sexo</label>
        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />F
            </label>
            <label className="radio">
              <input type="radio" name="question" />M
            </label>
          </div>

          <div className="field">
          <label className="label">Puesto de trabajo</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Cocinera</option>
                  <option>Ayudanta</option>
                  <option>Administradora</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-grouped btns">
        <div className="control">
          <button className="button is-text">Cancelar</button>
        </div>
        <div className="control">
          <button className="button is-link">Guardar</button>
        </div>
      </div>
    </div>
  );
}

export default NuevoEmpleado;

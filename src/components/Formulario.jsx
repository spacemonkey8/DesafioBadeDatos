import BaseColaboradores from "../BaseColaboradores";
import React, { useState } from "react";
import ListaColaboradores from "./ListaColaboradores";
import Buscador from './Buscador';
import Button from 'react-bootstrap/Button';

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");

  const AgregarColaborador = (e) => {
    e.preventDefault();

    if (nombre === "" || mail === "") {
      alert("Debes ingresar todos los campos");
    }
    else {
      const newId = BaseColaboradores.length + 1;
      BaseColaboradores.push({
        id: String(newId),
        nombre: nombre,
        correo: mail,
      });
    }
    setNombre("");
    setMail("");
  };

  return (

    <div class="formulario">
      
      <Buscador />
      <div class="form">
        <div class="agregar">
          <form onSubmit={AgregarColaborador}>
            <div class="users">
              <label>Nombre del colaborador</label>
              <input class="inputAgregar"
                type="text" onChange={(e) => { setNombre(e.target.value); }}
                placeholder="Ingresa el nombre del colaborador"
                value={nombre} />
            </div>
            <div class="emails">
              <label>Correo del colaborador</label>
              <input class="inputAgregar"
                type="text" onChange={(e) => { setMail(e.target.value); }}
                placeholder="Ingresa correo del colaborador"
                value={mail}
              />
            </div>
            <Button type="submit">Agregar colaborador</Button>
          </form> </div>

        <div class="displayList"><ListaColaboradores /></div> </div>
    </div>
  );
}

export default Formulario;
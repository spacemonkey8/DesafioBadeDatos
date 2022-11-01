import React, { useState } from "react";
import BaseColaboradores from "../BaseColaboradores";

const Buscador = () => {

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    const result = BaseColaboradores.filter((element) =>
      element.nombre.toLowerCase().includes(search.toLowerCase())
    );

    if (search === "") {
      alert("Por favor ingrese un nombre");

      return;
    } else if (result.length === 0) {
      alert("No se encontro ningun colaborador con ese nombre");

      return;
    } else {
      setSearchResult(result);
      console.log(searchResult)
    }

    setSearch("");
  };

  return (
    <>
      <div class="buscador">
        <h4>Buscador de Colaboradores</h4>
        <input
          type="text"
          placeholder="Buscar un colaborador"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
       
        {searchResult.map((colaborador) => (
          <p key={colaborador.id}>
            <div class="resultado">
              <div> {colaborador.nombre}</div>
              <div>{colaborador.correo}</div>
            </div>
          </p>
        ))}
      </div>
    </>
  );
};
export default Buscador;
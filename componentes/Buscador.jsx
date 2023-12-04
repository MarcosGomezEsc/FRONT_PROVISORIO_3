import React, { useState, useContext } from "react";
import { AutoContext } from "../contexto/Fetch_Api";
import "../cssDiseñoHeader/Buscador.css";

const BuscadorAutos = (data) => {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const buscarAutos = () => {
    const resultadosFiltrados = data.filter((auto) =>
      auto.Marca.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultados(resultadosFiltrados);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por marca"
        value={busqueda}
        onChange={handleBusqueda}
      />
      <button onClick={buscarAutos}>Buscar</button>

      {resultados.length > 0 && (
        <ul>
          {resultados.map((auto, index) => (
            <li key={index}>
              {auto.Marca} - {auto.Modelo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BuscadorAutos;

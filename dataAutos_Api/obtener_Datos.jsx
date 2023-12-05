import React, { useState } from "react";
import "../cssDiseñoAutos/Data_Autos.css";
import EliminarAuto from "../componentes/EliminarAuto";
import ActualizarAuto from "../componentes/ActualizarAuto";

const DataAutos = ({ data }) => {
  const [autosEliminar, setAutosEliminar] = useState([]);
  const [autosActualizar, setAutosActualizar] = useState([]);

  const handleEliminarClick = (autoId) => {
    setAutosEliminar((prevAutosEliminar) => [...prevAutosEliminar, autoId]);
  };

  const handleCancelarEliminar = (autoId) => {
    setAutosEliminar((prevAutosEliminar) =>
      prevAutosEliminar.filter((id) => id !== autoId)
    );
  };

  const handleActualizarClick = (autoId) => {
    setAutosActualizar((prevAutosActualizar) => [
      ...prevAutosActualizar,
      autoId,
    ]);
  };

  const handleCancelarActualizar = (autoId) => {
    setAutosActualizar((prevAutosActualizar) =>
      prevAutosActualizar.filter((id) => id !== autoId)
    );
  };

  return (
    <div className="autos-container ">
      <h2>Datos de Autos</h2>
      <ul className="auto-card">
        {data.map((auto) => (
          <li className="autos-list" key={auto.id}>
            {auto.id}
            <h3 className="titulo_del_auto">
              {auto.Marca} - {auto.Modelo}
            </h3>
            <p className="año">Año: {auto.Anio}</p>
            <p className="color">Color: {auto.Color}</p>
            <p className="precio">Precio: {auto.Precio}</p>
            {/* Agrega más detalles según tus necesidades */}
            <img
              width={200}
              src={auto.Imagen}
              alt={`Imagen de ${auto.Marca} ${auto.Modelo}`}
            />
            <button
              onClick={() => handleEliminarClick(auto.id)}
              className="Eliminar"
              type="button"
            >
              Eliminar
            </button>
            <button
              onClick={() => handleActualizarClick(auto.id)}
              className="Act"
              type="button"
            >
              Actualizar
            </button>

            {autosEliminar.includes(auto.id) && (
              <EliminarAuto
                key={auto.id}
                autoId={auto.id}
                onClose={() => handleCancelarEliminar(auto.id)}
              />
            )}

            {autosActualizar.includes(auto.id) && (
              <ActualizarAuto
                key={auto.id}
                autoId={auto.id}
                onClose={() => handleCancelarActualizar(auto.id)}
                // Puedes pasar otras propiedades necesarias para la actualización
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataAutos;

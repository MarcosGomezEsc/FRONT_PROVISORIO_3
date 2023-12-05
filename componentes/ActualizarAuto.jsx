import React, { useState } from "react";

const ActualizarAuto = ({ autoId, onClose }) => {
  const [nuevosDatos, setNuevosDatos] = useState({
    Marca: "",
    Modelo: "",
    Anio: "",
    Color: "",
    Precio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevosDatos((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };

  const handleActualizar = async () => {
    try {
      const response = await fetch(`http://localhost:3000/${autoId}`, {
        method: "PATCH", // o "PATCH" si es más apropiado para tu backend
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevosDatos),
      });

      if (response.ok) {
        console.log("Auto actualizado con éxito");
        onClose();
      } else {
        console.error("Error al actualizar el auto");
      }
    } catch (error) {
      console.error("Error en la solicitud de actualización:", error);
    }
  };

  return (
    <div className="actualizar-auto">
      <h2>Actualizar Auto</h2>
      <form>
        <label>
          Precio:
          <input
            type="text"
            name="Precio"
            value={nuevosDatos.Precio}
            onChange={handleChange}
          />
        </label>{" "}
        <label>
          Modelo:
          <input
            type="text"
            name="Modelo"
            value={nuevosDatos.Modelo}
            onChange={handleChange}
          />
        </label>{" "}
        <label>
          Año:
          <input
            type="text"
            name="Anio"
            value={nuevosDatos.Anio}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleActualizar} className="Act" type="button">
          Actualizar
        </button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default ActualizarAuto;

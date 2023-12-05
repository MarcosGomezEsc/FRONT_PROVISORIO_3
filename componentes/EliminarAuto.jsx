// EliminarAuto.jsx
import React from "react";

const EliminarAuto = ({ autoId }) => {
  const handleEliminarConfirmar = async () => {
    try {
      // Realizar la lógica para eliminar el auto usando el autoId y la API / endpoint correspondiente
      const response = await fetch(`http://localhost:3000/${autoId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el auto");
      }

      console.log("Auto eliminado exitosamente");
    } catch (error) {
      console.error("Error al eliminar el auto:", error);
    }
  };

  return (
    <div>
      <p>¿Estás seguro de que quieres eliminar este auto?</p>
      <button onClick={handleEliminarConfirmar}>Confirmar</button>
    </div>
  );
};

export default EliminarAuto;

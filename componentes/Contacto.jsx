import React from "react";
import "../cssFooter/Contacto.css";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  return (
    <div className="container_Contacto" id="Contacto">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>

      <button onClick={() => window.history.back()} href="#Navar">
        Volver
      </button>
    </div>
  );
};

export default Contacto;

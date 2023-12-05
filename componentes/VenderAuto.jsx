import React, { useState } from "react";
import "../cssFooter/VenderAutos.css";

const AutoFormulario = () => {
  const [autoData, setAutoData] = useState({
    Marca: "",
    Modelo: "",
    Anio: "",
    Precio: "",
    Motor: "",
    TipoCombustible: "",
    NumPuertas: "",
    Color: "",
    Imagen: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Si el campo es un archivo, actualiza el estado con la primera imagen seleccionada
    if (files) {
      setAutoData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setAutoData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que todos los campos tengan valores
    for (const key in autoData) {
      if (
        autoData[key] === null ||
        autoData[key] === undefined ||
        autoData[key] === ""
      ) {
        console.error(`Campo ${key} no puede ser null, undefined o vacío.`);
        return;
      }
    }

    console.log("autoData:", autoData);
    try {
      // Hacer la solicitud POST al backend
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(autoData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }

      console.log("Datos enviados exitosamente al backend");
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <div className="container_Contacto" id="AutoFormulario">
      <h2>Formulario de Auto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="marca">Marca:</label>
        <input
          type="text"
          id="marca"
          name="Marca"
          value={autoData.Marca}
          onChange={handleChange}
          required
        />

        <label htmlFor="modelo">Modelo:</label>
        <input
          type="text"
          id="modelo"
          name="Modelo"
          value={autoData.Modelo}
          onChange={handleChange}
          required
        />

        <label htmlFor="año">Año:</label>
        <input
          type="text"
          id="año"
          name="Anio"
          value={autoData.Anio}
          onChange={handleChange}
          required
        />

        <label htmlFor="precio">Precio:</label>
        <input
          type="text"
          id="precio"
          name="Precio"
          value={autoData.Precio}
          onChange={handleChange}
          required
        />

        <label htmlFor="Motor">Motor:</label>
        <input
          type="text"
          id="Motor"
          name="Motor"
          value={autoData.Motor}
          onChange={handleChange}
          required
        />
        <label htmlFor="TipoCombustible">TipoCombustible:</label>
        <input
          type="text"
          id="TipoCombustible"
          name="TipoCombustible"
          value={autoData.TipoCombustible}
          onChange={handleChange}
          required
        />
        <label htmlFor="NumPuertas">NumPuertas:</label>
        <input
          type="text"
          id="NumPuertas"
          name="NumPuertas"
          value={autoData.NumPuertas}
          onChange={handleChange}
          required
        />
        <label htmlFor="Color">Color:</label>
        <input
          type="text"
          id="Color"
          name="Color"
          value={autoData.Color}
          onChange={handleChange}
          required
        />
        <label htmlFor="Imagen">Imagen:</label>
        <input
          type="text"
          id="Imagen"
          placeholder="Ingrese SI O SI una URL asjajds"
          name="Imagen"
          value={autoData.Imagen}
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AutoFormulario;

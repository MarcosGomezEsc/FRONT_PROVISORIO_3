import React from "react";
import "../cssDiseñoAutos/Data_Autos.css";

// Componente que recibe los datos como prop
const DataAutos = ({ data }) => {
  return (
    <div>
      <h2>Datos de Autos</h2>
      <ul>
        {data.map((auto, index) => (
          <li key={index}>
            {auto.id}
            <h3 className="titulo_del_auto">
              {auto.Marca} - {auto.Modelo}
            </h3>
            <p className="año">Año: {auto.Anio}</p>
            <p className="color">Color: {auto.Color}</p>
            <p className="precio">Precio: {auto.Precio}</p>
            {/* Agrega más detalles según tus necesidades */}
            <img
              width={100}
              src={auto.Imagen}
              alt={`Imagen de ${auto.Marca} ${auto.Modelo}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataAutos;

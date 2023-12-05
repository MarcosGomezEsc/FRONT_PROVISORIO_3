import React, { useEffect, useState } from "react";
import DataAutos from "../dataAutos_Api/obtener_Datos";
import Navvar from "../componentes/Navvar";
// import SobreNosotros from "../componentes/SobreNosotros";
import VenderAuto from "../componentes/VenderAuto";
// import BuscadorAutos from "../componentes/Buscador";
//ruteo
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const API_URL = "http://localhost:3000";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
          throw new Error(`Error al obtener datos: ${response.statusText}`);
        }
        const newData = await response.json();

        setData(newData);
      } catch (error) {
        console.error("Error con Fetch:", error.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // Sin dependencias, se ejecutará una vez al montar el componente

  return (
    <>
      <Navvar />
      {/* <BuscadorAutos data={data}></BuscadorAutos> */}
      {loading ? <p>Cargando...</p> : <DataAutos data={data} />}
      <VenderAuto></VenderAuto>
      {/* <SobreNosotros></SobreNosotros> */}
      {/* //ruteo */}
      {/* <BrowserRouter>
        <Routes>{/* <Route path="/Autos" element={<Auto></Auto>} /> </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;

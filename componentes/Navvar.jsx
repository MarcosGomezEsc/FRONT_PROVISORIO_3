// Navbar.jsx
import React from "react";
import "../cssDiseñoHeader/Navvar.css";

function Navbar() {
  return (
    <nav className="nav" id="Navar">
      <ul className="nav-list">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="#Contacto">Contacto</a>
        </li>
        <li>
          <a href="/autos">Autos</a>
        </li>
        <li>
          <a href="/sobre-nosotros">Sobre Nosotros</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

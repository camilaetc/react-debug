import React from "react";
import "./styles/Footer.css";

const PieDePagina = () => {
  return (
    <footer className="pieDePagina">
      <p className="parrafoFooter">
        Todos los derechos reservados 2003-2021. República Argentina. INCAA{" "}
        <br />
        Lima 319; Código Postal: C1073AAG, CABA; República Argentina.
      </p>
      <ul className="lista-enlaces-externos">
        <li>
          <a href="/">
            <img src="http://cine.ar/img/logo-cinear.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="http://cine.ar/img/logo-arsat.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="http://cine.ar/img/logo-incaa.svg" alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default PieDePagina;

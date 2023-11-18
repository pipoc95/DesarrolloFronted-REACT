/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import logocfm from "./img/Logo-cfim.png";
import cerrarsesi from "./img/Cerrar sesi icono.png";
import reporte from "./img/Reporte.jpg";
import medi from "./img/Medicamentos.jpg";
import product from "./img/Gesti productos.jpg";
import documents from "./img/Gestion documentos.jpg";
import bd from "./img/Base de datos.jpg";
import "./Styles/Styles.css";
import "./Styles/stylegp.css";
import PrimerComponente from "./components/PrimerComponente";
function App() {
  return (
    /* <!-- inicio encabezado del sitio: --> */
    <>
      <header class="header-section">
        <h1>NeyCaDi Tecnology</h1>
        <h2>
          Comercializadora Farmacéutica de Insumos y Productos Médicos CFIM
          S.A.S
        </h2>
        {/* <!-- Inicio menú navegación: --> */}
        <nav class="nav">
          <img class="site-logo" src={logocfm} alt="Logo empresarial" />
          <ul class="site-nav">
            <li>
              <a href="Inicio.html">Inicio</a>
            </li>
            <li>
              <a href="#">Registro de Productos</a>
            </li>
            <li>
              <a href="#">Admón</a>
            </li>
            <li>
              <a href="Loguin.html">Cerrar sesión</a>
            </li>
            <a href="Loguin.html">
              <img class="logo-log_out" src={cerrarsesi} alt="Cerrar sesión" />
            </a>
          </ul>
        </nav>
        {/* <!-- Fin menú navegación --> */}
      </header>

      {/* /*  <!--Fin encabezado--> */
      /* <!-- inicio contenido principal --> */}
      <main class="main">
        <h2 class="section-title">Secciones disponibles</h2>
        <section class="sections">
          <article class="options_section">
            <img
              class="section-info_imagen"
              src={reporte}
              alt="Gestión de Productos"
            />
            <a href="Gestion productos.html">
              <h2 class="section-info_title">Reporte de Novedades</h2>
            </a>
            <p class="services-info__text">
              Laboris id enim consequat anim amet exercitation in cillum dolor
              quis.
            </p>
          </article>
          <article class="options_section">
            <img
              class="section-info_imagen"
              src={medi}
              alt="Gestión de Productos"
            />
            <a href="Gestion productos.html">
              <h2 class="section-info_title">Gestión de Productos</h2>
            </a>
            <p class="services-info__text">
              Laboris id enim consequat anim amet exercitation in cillum dolor
              quis.
            </p>
          </article>
          <article class="options_section">
            <img
              class="section-info_imagen1"
              src={product}
              alt="Gestión de Productos"
            />
            <a href="Recepcion.html">
              <h3 class="section-info_title">Recepción de Productos</h3>
            </a>
            <p class="services-info__text">
              Laboris id enim consequat anim amet exercitation in cillum dolor
              quis.
            </p>
            <br></br>
            <PrimerComponente />
          </article>

          <article class="options_section">
            <img
              class="section-info_imagen"
              src={documents}
              alt="Gestión de Productos"
            />
            <a href="Gestion productos.html">
              <h2 class="section-info_title">Gestión de Documentos</h2>
            </a>
            <p class="services-info__text">
              Laboris id enim consequat anim amet exercitation in cillum dolor
              quis.
            </p>
          </article>

          <article class="options_section">
            <img
              class="section-info_imagen"
              src={bd}
              alt="Gestión de Productos"
            />
            <a href="Gestion productos.html">
              <h2 class="section-info_title">Base de Datos</h2>
            </a>
            <p class="services-info__text">
              Laboris id enim consequat anim amet exercitation in cillum dolor
              quis.
            </p>
          </article>
        </section>
      </main>
      {/* /* <!-- fin contenido principal --> */
      /* <!-- Inicio pie del sitio --> */}
      <footer class="footer">
        <div>
          <h4>Copyright ©2023 Todos los derechos reservados.</h4>
        </div>
      </footer>
    </>
    /* <!-- fin pie del sitio --> */
  );
}

export default App;

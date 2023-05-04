import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import AddImagen from "./components/add-imagen.component";
import ImagenesList from "./components/imagenes-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark img-background">
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                <button className="pinterest-btn pinterest-btn--black">
                  Publicaciones
                </button>
              </Link>
            </li>
          </div>
          <a href="/" className="mx-auto animes-titulo">
            Animes
          </a>
          <div className="navbar-nav mr-auto ml-auto">
            <li className="nav-item mr-0">
              <Link to={"/add"} className="nav-link">
                <button className="pinterest-btn pinterest-btn--black">
                  Crear publicacion
                </button>
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3 background-back">
          <h2>SocialMe</h2>
          <Routes>
            <Route path="/" element={
              <>
                <div class="finder cont-center">
                  <input type="text" placeholder="🔎 Search" />
                </div>
                <ImagenesList />
              </>
            } />
            <Route path="add" element={<AddImagen />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import AddImagen from "./components/add-imagen.component";
import ImagenesList from "./components/imagenes-list.component";
import { Login } from "./userComponents/Login";
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { Logout } from './userComponents/Logout';
import { Register } from './userComponents/Register';
import { Perfil } from './userComponents/Perfil';



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
          <div className="navbar-nav mr-auto ml-auto">
            <li className='nav-item'>
              <Link to={"/perfil"} className='nav-link'>
                <button className="pinterest-btn pinterest-btn--black">
                  Ver perfil
                </button>
              </Link>
            </li>
            <li className='nav-item'>
              <AuthProvider>
                <button className="pinterest-btn pinterest-btn--black"> 
                  <Logout />
                </button>
              </AuthProvider>
            </li>
          </div>
        </nav>

        <div className="container mt-3 background-back">
          <h2>SocialMe</h2>
          <AuthProvider>
            <Routes>
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path="/" element={
                <>
                  <div class="finder cont-center">
                    <input type="text" placeholder="🔎 Search" />
                  </div>
                  <ProtectedRoute>
                    <ImagenesList />
                  </ProtectedRoute>
                </>
              } />
              <Route path="add" element={
                <ProtectedRoute>
                  <AddImagen />
                </ProtectedRoute>
              } />
                
              <Route path="perfil" element={
                <ProtectedRoute>
                  <Perfil />
                </ProtectedRoute>
              } />
            </Routes>
          </AuthProvider>
        </div>
      </div>
    );
  }
}

export default App;

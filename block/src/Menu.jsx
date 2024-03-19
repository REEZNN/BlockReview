import { useState } from 'react';
import './Css/Menu.css';

const Menu = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para alternar entre abrir y cerrar el menú
  const abrirOcerrar = () => {
    setMenuAbierto(!menuAbierto);//cambia el estado atravez del signo

  };

  return (
    <header className="contenedorheader">
      <nav className="topnav">
        <a href="#" className="logo">
          <img src="src\assets\logo1x.png" alt="Logo" />
        </a>
        <button className="abrir-menu" onClick={abrirOcerrar}>
          Open
        </button>
        <ul className={`menu ${menuAbierto ? 'menu-abierto' : false}`}>
          {/* menuAbierto = true; anadira la clase "menu-abierto"  
          
          cuando apretamos el boton X menuAbierto =false 
          */}

          <button className="cerrar-menu" onClick={abrirOcerrar}>
            X
          </button>
          <li>
            <a href="#Inicio">Inicio</a>
          </li>
          <li>
            <a href="#Peliculas">Peliculas</a>
          </li>
          <li>
            <a href="#Series">Series</a>
          </li>
          <li>
            <a href="#Actores">Actores</a>
          </li>
          <li>
            <form>
              <input type="text" placeholder="Buscar serie o pelicula" />
              <button type="submit"></button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;

import "./App.css";

const Menu = () => {
  return (
    <div id="menu" className="menuprincipal">
      <div className="contenedor1">
      <img src="src\assets\logo1x.png" />
      <h1>Inicio</h1>
      <h1>Peliculas</h1>
      <h1>Series</h1>
      <h1>Actores</h1>
    </div>
      <form>
        <input type="text" placeholder="Buscar serie o pelicula"></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Menu
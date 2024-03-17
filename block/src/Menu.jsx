import "./App.css";

const Menu = () => {
  return (
    <div id="menu" className="menuprincipal">
      <h1>Inicio</h1>
      <h1>Peliculas</h1>
      <h1>Series</h1>
      <h1>Actores</h1>
      <form>
        <input type="text" placeholder="Buscar serie o pelicula"></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Menu
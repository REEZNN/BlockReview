import "./Css/TendenciasHoy.css"

// eslint-disable-next-line react/prop-types
const Moviecard = ({ title, name, poster_path }) => {
  return (
    <div className="moviecard">
      <img src={"https://image.tmdb.org/t/p/w300/" + poster_path}></img>
      <div className="titulo-produccion">{title || name}</div>
    </div>
  );
};

export default Moviecard;

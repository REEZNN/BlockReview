import { useState } from "react";
import "./Css/Encines.css";
import { useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const Encines = () => {
  const [encines, setEncines] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: "Bearer 2da173810187d9446d4b38d39c6e1569",
      },
    };

    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=2da173810187d9446d4b38d39c6e1569",
        options
      )
      .then((response) => {
        setEncines(response.data.results);
        console.log(response.data.results);
      })
      .catch(() => {
        setError("hubo un error al cargar las peliculas en el cine");
      });
  }, []);

  if (error) {
    return <h2 className="title">{error}</h2>;
  }

  if (!encines) {
    return <h2 className="title">Cargando Tendencias de Hoy...</h2>;
  }

  return (
    <div className="contenedor-encinessuperior">
      <h2>Estreno en cines</h2>

      <ul className="contenedor-encines">
        {encines.map((parametro) => (
          <MovieCard key={parametro.id} {...parametro} />
        ))}
      </ul>
    </div>
  );
};
export default Encines;

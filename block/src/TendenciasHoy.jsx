import "./Css/TendenciasHoy.css";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const TendenciasHoy = () => {
  const [tendencias, setTendencias] = useState(null);
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
        "https://api.themoviedb.org/3/trending/all/day?api_key=2da173810187d9446d4b38d39c6e1569",
        options
      )
      .then((response) => {
        setTendencias(response.data.results);
        console.log(response.data.results);
      })
      .catch(() => {
        setError("Hubo un error al cargar las Tendencias de Hoy");
      });
  }, []);

  if (error) {
    return <h2 className="title">{error}</h2>;
  }

  if (!tendencias) {
    return <h2 className="title">Cargando Tendencias de Hoy...</h2>;
  }

  return (
    <div>
      <h2 className="titulo-producciones">Tendencias Hoy</h2>

      <div className="contenedor-producciones">
        <ul>
          {tendencias.map((parametro) => (
            <MovieCard key={parametro.id} {...parametro}/>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TendenciasHoy;

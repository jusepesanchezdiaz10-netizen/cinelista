import { useState } from "react";
import { peliculas } from "./data/peliculas";
import ListaPeliculas from "./components/ListaPeliculas";
import FiltroClasificacion from "./components/FiltroClasificacion";

function App() {
  const [filtro, setFiltro] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  const peliculasHoy = peliculas.filter(
    (pelicula) => pelicula.funcionHoy
  ).length;

  const peliculasFiltradas = peliculas.filter((pelicula) => {
    const coincideClasificacion =
      filtro === "Todas" ||
      pelicula.clasificacion === filtro;

    const coincideBusqueda =
      pelicula.titulo
        .toLowerCase()
        .includes(busqueda.toLowerCase());

    return coincideClasificacion && coincideBusqueda;
  });

  return (
    <div>
      <h1>CineLista</h1>

      <h3>Películas de hoy: {peliculasHoy}</h3>

      <input
        type="text"
        placeholder="Buscar película"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <FiltroClasificacion setFiltro={setFiltro} />

      {peliculasFiltradas.length === 0 ? (
        <p>No hay películas que coincidan</p>
      ) : (
        <ListaPeliculas peliculas={peliculasFiltradas} />
      )}
    </div>
  );
}

export default App;
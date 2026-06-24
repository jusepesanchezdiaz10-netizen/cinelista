import { useState } from "react";
import { peliculas } from "./data/peliculas";
import ListaPeliculas from "./components/ListaPeliculas";
import FiltroClasificacion from "./components/FiltroClasificacion";

function App() {
  const [filtro, setFiltro] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  const peliculasFiltradas = peliculas.filter((pelicula) => {
    const cumpleFiltro =
      filtro === "Todas" ||
      pelicula.clasificacion === filtro;

    const cumpleBusqueda =
      pelicula.titulo
        .toLowerCase()
        .includes(busqueda.toLowerCase());

    return cumpleFiltro && cumpleBusqueda;
  });

  return (
    <div>
      <h1>CineLista</h1>

      <input
        type="text"
        placeholder="Buscar"
        value={busqueda}
        onChange={(e) =>
          setBusqueda(e.target.value)
        }
      />

      <FiltroClasificacion
        setFiltro={setFiltro}
      />

      {peliculasFiltradas.length === 0 ? (
        <p>No hay películas que coincidan</p>
      ) : (
        <ListaPeliculas
          peliculas={peliculasFiltradas}
        />
      )}
    </div>
  );
}

export default App;
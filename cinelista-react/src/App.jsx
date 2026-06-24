import { peliculas } from "./data/peliculas";
import ListaPeliculas from "./components/ListaPeliculas";

function App() {
  return (
    <div>
      <h1>CineLista</h1>

      <ListaPeliculas peliculas={peliculas} />
    </div>
  );
}

export default App;
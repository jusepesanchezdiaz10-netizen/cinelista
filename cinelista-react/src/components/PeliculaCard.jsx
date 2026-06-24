function PeliculaCard({
  titulo,
  genero,
  duracion,
  clasificacion,
  sinopsis,
  horarios,
  funcionHoy,
}) {
  return (
    <div>
      {funcionHoy && <h3>HOY</h3>}

      <h2>{titulo}</h2>

      <p>Genero: {genero}</p>

      <p>Duracion: {duracion} min</p>

      <p>Clasificacion: {clasificacion}</p>

      <p>{sinopsis}</p>

      <p>{horarios.join(" - ")}</p>
    </div>
  );
}

export default PeliculaCard;
function PeliculaCard({
  titulo,
  genero,
  duracion,
  clasificacion,
  sinopsis,
  horarios
}) {
  return (
    <div>
      <h2>{titulo}</h2>

      <p>Genero: {genero}</p>

      <p>Duracion: {duracion}</p>

      <p>Clasificacion: {clasificacion}</p>

      <p>{sinopsis}</p>

      <p>{horarios.join(" - ")}</p>
    </div>
  );
}

export default PeliculaCard;
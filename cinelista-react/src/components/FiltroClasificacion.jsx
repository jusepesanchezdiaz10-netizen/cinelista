function FiltroClasificacion({ setFiltro }) {
  return (
    <div>
      <button onClick={() => setFiltro("Todas")}>Todas</button>
      <button onClick={() => setFiltro("TE")}>TE</button>
      <button onClick={() => setFiltro("+14")}>+14</button>
      <button onClick={() => setFiltro("+18")}>+18</button>
    </div>
  );
}

export default FiltroClasificacion;
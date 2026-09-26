const ProyectCard = ({ proyecto }) => {
  return (
    <div className="card-proyecto">
      <em>{proyecto.estado}</em>

      <h3>{proyecto.titulo}</h3>

      <p>{proyecto.descripcion}</p>

      {proyecto.tecnologias.map((tec) => (
        <span className="badge" key={tec}>
          {tec}
        </span>
      ))}
    </div>
  );
};

export default ProyectCard;

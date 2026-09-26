import { useState } from "react";

const ProyectCard = ({ proyecto }) => {
  const [mostrarMas, setMostrarMas] = useState(false);

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

      {mostrarMas && (
        <div className="detalle">
          <p>
            <strong>Mi rol:</strong> {proyecto.rol}
          </p>

          <p>{proyecto.detalle}</p>

          {proyecto.repositorio && (
            <a href={proyecto.repositorio} target="_blank" rel="noreferrer">
              Ver repositorio
            </a>
          )}
        </div>
      )}

      <button onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
};

export default ProyectCard;

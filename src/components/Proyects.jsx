import ProyectCard from "./ProyectCard";

const Proyects = ({ proyectos }) => {
  return (
    <div className="seccion" id="Proyectos">
      <h2>Proyectos</h2>

      {proyectos.map((proyecto) => (
        <ProyectCard key={proyecto.id} proyecto={proyecto} />
      ))}
    </div>
  );
};

export default Proyects;

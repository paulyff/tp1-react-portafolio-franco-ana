const Skills = ({ tecnologias }) => {
  return (
    <div className="seccion" id="Tecnologías">
      <h2>Tecnologías y herramientas</h2>

      {tecnologias.map((tec) => (
        <span className="badge" key={tec}>
          {tec}
        </span>
      ))}
    </div>
  );
};

export default Skills;

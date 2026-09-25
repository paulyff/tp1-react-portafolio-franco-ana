const Hero = ({ nombre, titulo, resumen }) => {
  return (
    <div className="hero" id="Inicio">
      <h1>¡Hola! Soy {nombre}</h1>
      <p>{titulo}</p>
      <p>{resumen}</p>
    </div>
  );
};

export default Hero;
